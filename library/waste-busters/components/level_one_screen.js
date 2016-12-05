import classNames from 'classnames';

import GameEmbedder from 'shared/components/game_embedder/0.1';
import Timer from 'shared/components/timer/0.1';
import Score from 'shared/components/score/0.1';
import DPad from 'shared/components/d_pad/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="phaser-level-one"
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
                src="../waste-busters-phaser/index.html?v=1"
                controller={_.get(props, 'data.d-pad')}
            />
            <Timer
                timeout={120000}
                countDown
            />
            <skoash.Component
                className="bottom"
            >
                <skoash.Component
                    className="left"
                >
                    <Score
                        className="life"
                        correct={4 - _.get(props, 'data.data.hits') || 0}
                    />
                    <Score
                        className="bags"
                        correct={_.get(props, 'data.data.bagCount')}
                    />
                </skoash.Component>
                <skoash.Component
                    className="middle"
                >
                    <Score
                        className="level-score"
                        correct={_.get(props, 'data.data.score')}
                    />
                    <skoash.Component
                        className={classNames('level', 'level-1')}
                    />
                </skoash.Component>
                <skoash.Component
                    className="right"
                >
                    <Score
                        className="lives"
                        correct={_.get(props, 'data.data.lives')}
                    />
                    <Score
                        className="trucks"
                        correct={_.get(props, 'data.data.trucks')}
                    />
                    <DPad />
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
