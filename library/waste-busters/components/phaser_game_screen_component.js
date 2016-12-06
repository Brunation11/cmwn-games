import classNames from 'classnames';

import GameEmbedder from 'shared/components/game_embedder/0.1';
import Timer from 'shared/components/timer/0.1';
import Score from 'shared/components/score/0.1';
import DPad from 'shared/components/d_pad/0.1';

export default function (props, ref, key, opts = {}) {
    var onScreenStart;
    var getGameSrc;

    onScreenStart = function () {
        this.updateGameState({
            path: 'game',
            data: {
                screenStart: true,
            },
        });

        this.updateGameState({
            path: ['game'],
            data: _.defaults(_.get(props, 'gameState.data.game'), {
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

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={`phaser-level-${opts.level}`}
            onStart={onScreenStart}
        >
            <skoash.Image
                src={ENVIRONMENT.MEDIA_GAME + 'SpritesAnimations/game1.timelevelscore.png'}
                className="hidden"
            />
            <skoash.Image
                src={ENVIRONMENT.MEDIA_GAME + 'SpritesAnimations/game1.metericons.png'}
                className="hidden"
            />
            <GameEmbedder
                src={getGameSrc()}
                controller={_.get(props, 'data.d-pad')}
                complete={_.get(props, `gameState.data.game.levels.${opts.level}.complete`, false)}
                data={_.get(props, 'gameState.data.game', {})}
            />
            <Timer
                countDown
                timeout={120000}
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
                        correct={4 - _.get(props, 'gameState.data.game.hits') || 0}
                    />
                    <Score
                        className="bags"
                        correct={_.get(props, 'gameState.data.game.bagCount')}
                    />
                </skoash.Component>
                <skoash.Component
                    className="middle"
                >
                    <Score
                        className="level-score"
                        correct={_.get(props, 'gameState.data.game.score')}
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
                        correct={_.get(props, 'gameState.data.game.lives')}
                    />
                    <Score
                        className="trucks"
                        correct={_.get(props, `gameState.data.game.levels.${opts.level}.trucks`)}
                    />
                    <DPad />
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
