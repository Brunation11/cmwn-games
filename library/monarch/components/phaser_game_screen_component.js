export default function (props, ref, key, opts = {}) {
    var startScreen;
    var onScreenStart;
    var getGameSrc;
    // var onOpenReveal;
    // var onCloseReveal;
    var onRespond;
    var onTimerComplete;

    startScreen = function (screenStart = true) {
        this.updateGameState({
            path: 'game',
            data: {
                screenStart,
            },
        });
    };

    onScreenStart = function () {
        var gameData = _.get(props, 'gameState.data.game');

        startScreen.call(this);

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
                hits: 0,
                bagCount: 0,
                score: 0,
                lives: 1,
            }),
        });
    };

    getGameSrc = function () {
        if (!_.get(props, 'data.game.screenStart')) return;
        return `../monarch-phaser/index.html?v=${opts.level}`;
    };

    // onOpenReveal = function () {
    //     setTimeout(() => {
    //         this.updateGameState({
    //             path: 'd-pad',
    //             data: {
    //                 pause: true
    //             },
    //         });
    //     }, 1000);
    // };

    // onCloseReveal = function (prevMessage) {
    //     this.updateGameState({
    //         path: 'reveal',
    //         data: {
    //             close: false,
    //             open: null,
    //         }
    //     });

    //     this.updateGameState({
    //         path: 'd-pad',
    //         data: {
    //             pause: false
    //         },
    //     });

    //     this.updateGameState({
    //         path: ['game'],
    //         data: {
    //             levels: {
    //                 [opts.level]: {
    //                     start: true,
    //                 }
    //             }
    //         },
    //     });

    //     if (prevMessage === 'complete') {
    //         skoash.Screen.prototype.goto(parseInt(key, 10) + 1);
    //     }
    // };

    onRespond = function (options) {
        var complete = _.get(props, `gameState.data.game.levels.${opts.level}.complete`);

        if (_.get(options, 'updateGameState.data.game.hits') === 10) {
            startScreen.call(this, false);

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
        }

        if (_.get(options, `updateGameState.data.game.levels.${opts.level}.start`) &&
            _.get(props, 'data.reveal.open', false)) {
            this.updateGameState({
                path: 'd-pad',
                data: {
                    pause: true
                },
            });
        }

        if (complete && _.get(props, 'data.reveal.wasOpened') !== 'complete') {
            this.updateGameState({
                path: 'reveal',
                data: {
                    open: 'complete',
                    wasOpened: 'complete',
                }
            });
        }
    };

    onTimerComplete = function () {
        if (_.get(props, `gameState.data.game.levels.${opts.level}.complete`, false)) return;

        startScreen.call(this, false);

        this.updateGameState({
            path: ['game'],
            data: {
                bagCount: 0,
                lives: _.get(props, 'gameState.data.game.lives', 1) - 1 || 1,
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
                <skoash.DPad />
                <skoash.Score
                    className="score"
                    correct={_.get(props, 'gameState.data.game.score', 0)}
                    setScore={true}
                />
                <skoash.Score
                    className="life"
                    correct={10 - _.get(props, 'gameState.data.game.hits', 0) || 0}
                    setScore={true}
                />
            </skoash.Component>
            {/*
            <skoash.Reveal
                openOnStart="intro"
                openTarget="reveal"
                openReveal={_.get(props, 'data.reveal.open', false)}
                closeReveal={_.get(props, 'data.reveal.close', false)}
                onClose={onCloseReveal}
                onOpen={onOpenReveal}
                list={[
                    <skoash.Component
                        ref="complete"
                        className="complete frame square"
                        type="li"
                    >
                        <div className="content">
                            {opts.completeContent}
                        </div>
                    </skoash.Component>,
                    <skoash.Component
                        ref="replay"
                        className="replay frame square"
                        type="li"
                    >
                        <div className="content">
                            <p>
                                You have not won this level,<br/>
                                but don't worry—<br/>
                                you have another chance!
                            </p>
                        </div>
                    </skoash.Component>,
                ]}
            />
            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open')}
            >
                <skoash.Audio
                    type="voiceOver"
                    ref="complete"
                    src={`${MEDIA.VO}${opts.completeVO}.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    ref="replay"
                    src={`${MEDIA.VO}Another_Chance.mp3`}
                />
            </skoash.MediaCollection>
            */}
        </skoash.Screen>
    );
}
