import classNames from 'classnames';

import GameEmbedder from 'shared/components/game_embedder/0.1';
import Timer from 'shared/components/timer/0.1';
import Score from 'shared/components/score/0.1';
import DPad from 'shared/components/d_pad/0.1';

export default function (props, ref, key, opts = {}) {
    var startScreen;
    var onScreenStart;
    var getGameSrc;
    var onOpenReveal;
    var onCloseReveal;
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
        return `../waste-busters-phaser/index.html?v=${opts.level}`;
    };

    onOpenReveal = function () {
        this.updateGameState({
            path: 'game',
            data: {
                stop: true,
                start: false,
            },
        });
    };

    onCloseReveal = function (prevMessage) {
        this.updateGameState({
            path: 'game',
            data: {
                stop: false,
                start: true,
            },
        });
        this.updateGameState({
            path: 'reveal',
            data: {
                close: false,
                open: null,
            }
        });
        this.updateGameState({
            path: 'score',
            data: {
                correct: 0,
                incorrect: 0,
            }
        });

        if (prevMessage === 'completed') {
            skoash.Screen.prototype.goto(parseInt(key, 10) + 1);
        }
    };

    onRespond = function (options) {
        if (_.get(options, 'updateGameState.data.game.lives') === 0) {
            startScreen.call(this, false);

            this.updateGameState({
                path: ['game'],
                data: {
                    bagCount: 0,
                    lives: 1,
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
            <GameEmbedder
                src={getGameSrc()}
                controller={_.get(props, 'data.d-pad')}
                complete={_.get(props, `gameState.data.game.levels.${opts.level}.complete`, false)}
                data={_.get(props, 'gameState.data.game', {})}
                onRespond={onRespond}
            />
            <Timer
                countDown
                timeout={120000}
                onComplete={onTimerComplete}
                stop={_.get(props, `gameState.data.game.levels.${opts.level}.complete`, false)}
                complete={_.get(props, `gameState.data.game.levels.${opts.level}.complete`, false)}
                checkComplete={_.get(props, `gameState.data.game.levels.${opts.level}.start`, false)}
                restart={_.get(props, `gameState.data.game.levels.${opts.level}.start`, false)}
            />
            <skoash.Component
                className="bottom"
                complete={_.get(props, `gameState.data.game.levels.${opts.level}.complete`, false)}
            >
                <skoash.Component
                    className="left"
                >
                    <Score
                        className="life"
                        correct={4 - _.get(props, 'gameState.data.game.hits', 0) || 0}
                        setScore={true}
                    />
                    <Score
                        className="bags"
                        correct={_.get(props, 'gameState.data.game.bagCount', 0)}
                        setScore={true}
                    />
                </skoash.Component>
                <skoash.Component
                    className="middle"
                >
                    <Score
                        className="level-score"
                        correct={_.get(props, 'gameState.data.game.score', 0)}
                        setScore={true}
                    />
                    <skoash.Component
                        className={classNames('level', `level-${opts.level}`)}
                    />
                </skoash.Component>
                <skoash.Component
                    className="right"
                >
                    <Score
                        className="lives"
                        correct={_.get(props, 'gameState.data.game.lives', 1)}
                        setScore={true}
                    />
                    <Score
                        className="trucks"
                        correct={_.get(props, `gameState.data.game.levels.${opts.level}.trucks`)}
                        setScore={true}
                    />
                    <DPad />
                </skoash.Component>
            </skoash.Component>
            <skoash.Reveal
                openOnStart="intro"
                openTarget="reveal"
                openReveal={_.get(props, 'data.reveal.open', false)}
                closeReveal={_.get(props, 'data.reveal.close', false)}
                onClose={onCloseReveal}
                onOpen={onOpenReveal}
                list={[
                    <skoash.Component
                        ref="intro"
                        className="intro frame square"
                        type="li"
                    >
                        <div className="content">
                            {opts.introContent}
                        </div>
                    </skoash.Component>,
                    <skoash.Component
                        ref="fact-1"
                        className="fact-1 frame square"
                        type="li"
                    >
                        <div className="content">
                            {opts.fact1Content}
                        </div>
                    </skoash.Component>,
                    <skoash.Component
                        ref="fact-2"
                        className="fact-2 frame square"
                        type="li"
                    >
                        <div className="content">
                            {opts.fact2Content}
                        </div>
                    </skoash.Component>,
                    <skoash.Component
                        ref="fact-3"
                        className="fact-3 frame square"
                        type="li"
                    >
                        <div className="content">
                            {opts.fact3Content}
                        </div>
                    </skoash.Component>,
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
                            You have not won this level,<br/>
                            but don't worry—<br/>
                            you have another chance!
                        </div>
                    </skoash.Component>,
                ]}
            />
        </skoash.Screen>
    );
}
