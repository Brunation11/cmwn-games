export default function (props, ref, key, opts = {}) {
    var startScreen;
    var onScreenStart;
    var getGameSrc;
    var onOpenReveal;
    var onCloseReveal;
    var onRespond;
    var onTimerComplete;
    var onScoreComplete;
    var onLifeComplete;

    startScreen = function (screenStart = true) {
        this.updateGameState({
            path: 'game',
            data: {
                screenStart,
            },
        });
    };

    onScreenStart = function (screenStart = true) {
        var gameData = _.get(props, 'gameState.data.game');

        startScreen.call(this, screenStart);

        if (_.get(gameData, `levels.${opts.level}.complete`, false)) {
            _.assign(gameData, {
                levels: {
                    [opts.level]: {
                        complete: false,
                    }
                }
            });
        }

        this.updateGameState({
            path: ['game'],
            data: _.defaults(gameData, {
                levels: {
                    [opts.level]: {
                        hits: 0,
                        score: 0,
                        stars: 0,
                    }
                }
            })
        });

        this.updateGameState({
            path: ['game'],
            data: {
                levels: {
                    [opts.level]: {
                        start: true,
                    }
                }
            }
        });

        this.updateGameState({
            path: 'timer',
            data: {
                complete: false
            }
        });
    };

    getGameSrc = function () {
        if (!_.get(props, 'data.game.screenStart')) return;
        return `../drone-zone-phaser/index.html?v=${opts.level}`;
    };

    onOpenReveal = function () {
        this.updateGameState({
            path: 'd-pad',
            data: {
                pause: true
            },
        });

        this.updateGameState({
            path: ['game'],
            data: {
                levels: {
                    [opts.level]: {
                        start: false,
                    }
                }
            },
        });
    };

    onCloseReveal = function (prevMessage) {
        var stars = _.get(props, `gameState.data.game.levels.${opts.level}.stars`, 0);

        if (!prevMessage) return;

        this.updateGameState({
            path: 'reveal',
            data: {
                open: null,
                prevMessage: prevMessage
            }
        });

        this.updateGameState({
            path: 'd-pad',
            data: {
                pause: false
            },
        });

        if (prevMessage === 'replay') {
            onScreenStart.call(this, false);

            this.updateGameState({
                path: ['game'],
                data: {
                    levels: {
                        [opts.level]: {
                            start: false,
                        }
                    }
                },
            });

            setTimeout(() => {
                startScreen.call(this);
            }, 0);
        } else if (stars > 0) {
            if (prevMessage === 'fact-1') {
                this.updateGameState({
                    path: 'reveal',
                    data: {
                        open: 'fact-2',
                    }
                });
            } else if (prevMessage === 'fact-2') {
                this.updateGameState({
                    path: 'reveal',
                    data: {
                        open: 'fact-3',
                    }
                });
            } else if (prevMessage === 'fact-3') {
                this.updateGameState({
                    path: 'reveal',
                    data: {
                        open: 'complete',
                    }
                });
            } else {
                skoash.Screen.prototype.goto(parseInt(key, 10) + 1);
            }
        }
    };

    onRespond = function (options) {
        if (_.get(options, `updateGameState.data.game.levels.${opts.level}.hits`) === 10) {
            onTimerComplete.call(this);
        }

        if (_.get(options, `updateGameState.data.game.levels.${opts.level}.start`)) {
            window.focus();
        }
    };

    onTimerComplete = function () {
        var stars = _.get(props, `gameState.data.game.levels.${opts.level}.stars`, 0);

        if (_.get(props, 'data.timer.complete')) return;

        if (!stars) {
            this.updateGameState({
                path: 'reveal',
                data: {
                    open: 'replay',
                }
            });
        } else {
            this.updateGameState({
                path: ['game'],
                data: {
                    levels: {
                        [opts.level]: {
                            complete: true,
                            mostStars: Math.max(stars,
                                _.get(props, `gameState.data.game.levels.${opts.level}.mostStars`, 0)),
                            fact2Complete: stars === 1,
                            fact3Complete: stars > 0 && stars < 3,
                        }
                    }
                },
            });
            this.updateGameState({
                path: 'reveal',
                data: {
                    open: 'fact-1',
                }
            });
            this.updateGameState({
                path: 'timer',
                data: {
                    complete: true
                }
            });
        }
    };

    onLifeComplete = function () {
        if (_.get(props, 'data.reveal.prevMessage') === 'replay') return;

        onTimerComplete.call(this);
    };

    onScoreComplete = function () {
        this.updateGameState({
            path: ['game'],
            data: {
                levels: {
                    [opts.level]: {
                        stars: _.get(props, `gameState.data.game.levels.${opts.level}.stars`, 0) + 1,
                        score: 0,
                    }
                }
            },
        });
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={`phaser-level-${opts.level}`}
            onStart={onScreenStart}
        >
            <skoash.GameEmbedder
                src={getGameSrc()}
                controller={_.get(props, 'data.d-pad')}
                complete={_.get(props, `gameState.data.game.levels.${opts.level}.complete`, false)}
                data={_.get(props, 'gameState.data.game', {})}
                pause={_.get(props, 'data.d-pad.pause')}
                resume={!_.get(props, 'data.d-pad.pause')}
                onRespond={onRespond}
            />

            <skoash.Timer
                leadingContent={
                    <span className="label">TIME</span>
                }
                countDown
                timeout={120000}
                onComplete={onTimerComplete}
                pause={
                    _.get(props, `gameState.data.game.levels.${opts.level}.start`, false) &&
                    _.get(props, 'data.reveal.open', false)
                }
                resume={!_.get(props, 'data.reveal.open', false)}
                stop={_.get(props, `gameState.data.game.levels.${opts.level}.complete`, false)}
                complete={_.get(props, `gameState.data.game.levels.${opts.level}.complete`, false)}
                checkComplete={_.get(props, `gameState.data.game.levels.${opts.level}.start`, false)}
                restart={_.get(props, `gameState.data.game.levels.${opts.level}.start`, false)}
            />

            <skoash.Component
                className="gauges"
                complete={_.get(props, `gameState.data.game.levels.${opts.level}.complete`, false)}
            >
                <skoash.DPad
                    onKeyAction={function (keyCode) {
                        if (keyCode === 32) return 'up';
                    }}
                />

                <skoash.Score
                    className="star-score"
                    correct={Math.min(3, _.get(props, `gameState.data.game.levels.${opts.level}.stars`, 0))}
                    setScore={true}
                />

                <skoash.Score
                    className="level-score"
                    max={10}
                    correct={_.get(props, `gameState.data.game.levels.${opts.level}.score`, 0)}
                    setScore={true}
                    onComplete={onScoreComplete}
                />

                <skoash.Score
                    className="life"
                    max={0}
                    incorrect={10}
                    correct={_.get(props, `gameState.data.game.levels.${opts.level}.hits`, 0) || 0}
                    setScore={true}
                    onComplete={onLifeComplete}
                />
            </skoash.Component>

            <skoash.Reveal
                openTarget="reveal"
                openReveal={_.get(props, 'data.reveal.open', false)}
                closeReveal={_.get(props, 'data.reveal.close', false)}
                onClose={onCloseReveal}
                onOpen={onOpenReveal}
                list={[
                    <skoash.Component
                        ref="fact-1"
                        className="fact frame square"
                        type="li"
                    >
                        <h1 className="header">DRONE FACT</h1>
                        {opts.fact1Content}
                    </skoash.Component>,
                    <skoash.Component
                        ref="fact-2"
                        className="fact frame square"
                        type="li"
                    >
                        <h1 className="header">DRONE FACT</h1>
                        {opts.fact2Content}
                    </skoash.Component>,
                    <skoash.Component
                        ref="fact-3"
                        className="fact frame square"
                        type="li"
                    >
                        <h1 className="header">DRONE FACT</h1>
                        {opts.fact3Content}
                    </skoash.Component>,
                    <skoash.Component
                        ref="complete"
                        className="complete frame square"
                        type="li"
                    >
                        <h1 className="header">LEVEL {opts.level} COMPLETE!</h1>
                        {opts.completeContent}
                    </skoash.Component>,
                    <skoash.Component
                        ref="replay"
                        className="replay frame square"
                        type="li"
                    >
                        <h1 className="header">TRY AGAIN</h1>
                        <p className="copy">
                            You lost this round, but
                            <br />
                            you have another chance
                            <br />
                            to deliver victory!
                        </p>
                    </skoash.Component>,
                ]}
            />

            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open')}
            >
                <skoash.Audio
                    type="voiceOver"
                    ref="fact-1"
                    src={`${MEDIA.VO}${opts.fact1VO}.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    ref="fact-2"
                    src={`${MEDIA.VO}${opts.fact2VO}.mp3`}
                    complete={_.get(props, `gameState.data.game.levels.${opts.level}.fact2Complete`, false)}
                />
                <skoash.Audio
                    type="voiceOver"
                    ref="fact-3"
                    src={`${MEDIA.VO}${opts.fact3VO}.mp3`}
                    complete={_.get(props, `gameState.data.game.levels.${opts.level}.fact3Complete`, false)}
                />
                <skoash.Audio
                    type="voiceOver"
                    ref="complete"
                    src={`${MEDIA.VO}${opts.completeVO}.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    ref="replay"
                    src={`${MEDIA.VO}TryAgain.mp3`}
                    complete
                />
            </skoash.MediaCollection>
        </skoash.Screen>
    );
}
