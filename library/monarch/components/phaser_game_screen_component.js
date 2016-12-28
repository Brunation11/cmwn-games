// this game has to be changed dramatically

export default function (props, ref, key, opts = {}) {
    var startScreen;
    var onScreenStart;
    var getGameSrc;
    var onOpenReveal;
    var onCloseReveal;
    var onRespond;
    var onTimerComplete;
    var onScoreComplete;

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
            }),
        });
    };

    getGameSrc = function () {
        if (!_.get(props, 'data.game.screenStart')) return;
        return `../monarch-phaser/index.html?v=${opts.level}`;
    };

    onOpenReveal = function () {
        setTimeout(() => {
            this.updateGameState({
                path: 'd-pad',
                data: {
                    pause: true
                },
            });
        }, 1000);
    };

    onCloseReveal = function (prevMessage) {
        var stars = _.get(props, `gameState.data.game.levels.${opts.level}.stars`, 0);

        this.updateGameState({
            path: 'reveal',
            data: {
                close: false,
                open: null,
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
        } else if (prevMessage === 'fact-1' && stars > 1) {
            this.updateGameState({
                path: 'reveal',
                data: {
                    open: 'fact-2',
                }
            });
        } else if (prevMessage === 'fact-2' && stars > 2) {
            this.updateGameState({
                path: 'reveal',
                data: {
                    open: 'fact-3',
                }
            });
        } else if (prevMessage) {
            this.updateGameState({
                path: ['game'],
                data: {
                    levels: {
                        [opts.level]: {
                            complete: true,
                        }
                    }
                },
            });
            setTimeout(() => {
                skoash.Screen.prototype.goto(parseInt(key, 10) + 1);
            }, 100);
        }
    };

    onRespond = function (options) {
        if (_.get(options, `updateGameState.data.game.levels.${opts.level}.hits`) === 10) {
            onTimerComplete.call(this);
        }
    };

    onTimerComplete = function () {
        if (!_.get(props, `gameState.data.game.levels.${opts.level}.stars`, 0)) {
            this.updateGameState({
                path: 'reveal',
                data: {
                    open: 'replay',
                }
            });
        } else {
            this.updateGameState({
                path: 'reveal',
                data: {
                    open: 'fact-1',
                }
            });
        }
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
                onRespond={onRespond}
            />
            <skoash.Timer
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
                    correct={_.get(props, `gameState.data.game.levels.${opts.level}.stars`, 0)}
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
                    onComplete={onTimerComplete}
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
                        <div className="content">
                            {opts.fact1Content}
                        </div>
                    </skoash.Component>,
                    <skoash.Component
                        ref="fact-2"
                        className="fact frame square"
                        type="li"
                    >
                        <div className="content">
                            {opts.fact2Content}
                        </div>
                    </skoash.Component>,
                    <skoash.Component
                        ref="fact-3"
                        className="fact frame square"
                        type="li"
                    >
                        <div className="content">
                            {opts.fact3Content}
                        </div>
                    </skoash.Component>,
                    <skoash.Component
                        ref="replay"
                        className="replay frame square"
                        type="li"
                    >
                        <div className="content">
                            <p>
                                Don't give up!<br/>
                                You still have another<br/>
                                chance to help the<br/>
                                Monarch complete<br/>
                                its mission!
                            </p>
                        </div>
                    </skoash.Component>,
                ]}
            />
            {/*
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
                />
                <skoash.Audio
                    type="voiceOver"
                    ref="fact-3"
                    src={`${MEDIA.VO}${opts.fact3VO}.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    ref="replay"
                    src={`${MEDIA.VO}DontGiveUp.mp3`}
                />
            </skoash.MediaCollection>
            */}
            <skoash.Image
                className="hidden"
                src={`${MEDIA.FRAME}monarch.fact.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.FRAME}try.again.frame.png`}
            />
        </skoash.Screen>
    );
}
