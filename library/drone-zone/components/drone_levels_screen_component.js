import classNames from 'classnames';

export default function (props, ref, key, opts = {}) {
    var onSelect;
    var getStarClassNames;

    onSelect = function () {
        if (_.get(props, 'gameState.currentScreenIndex') !== parseInt(key, 10)) return;
        skoash.Screen.prototype.goto(parseInt(key, 10) + 1);
    };

    getStarClassNames = function (level, star) {
        return classNames({
            earned: _.get(props, `gameState.data.game.levels.${level}.mostStars`, 0) >= star,
        });
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={`drone-level-${opts.level}`}
        >
            <skoash.Audio
                type="voiceOver"
                src={`${MEDIA.VO}${opts.instructionsVO}.mp3`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.SPRITE}sprite.starmap.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.SPRITE}sprite.pathicons.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.IMAGE}path.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.IMAGE}flygameframe.png`}
            />

            <skoash.Component className="instructions">
                <h1 className="level">LEVEL: {opts.level}</h1>
                {opts.instructions}
            </skoash.Component>

            <skoash.Component
                className="path"
            >
                <skoash.Component className="drone" />
                <span className="start">START</span>
                <span className="finish">FINISH!</span>
                <skoash.Selectable
                    onSelect={onSelect}
                    list={[
                        <skoash.Component
                            type="li"
                            className="lock-1"
                        >
                            <div className={getStarClassNames(1, 1)}/>
                            <div className={getStarClassNames(1, 2)}/>
                            <div className={getStarClassNames(1, 3)}/>
                            <span className="level">Level: 1</span>
                        </skoash.Component>,
                        <skoash.Component
                            type="li"
                            className="lock-2"
                        >
                            <div className={getStarClassNames(2, 1)}/>
                            <div className={getStarClassNames(2, 2)}/>
                            <div className={getStarClassNames(2, 3)}/>
                            <span className="level">Level: 2</span>
                        </skoash.Component>,
                        <skoash.Component
                            type="li"
                            className="lock-3"
                        >
                            <div className={getStarClassNames(3, 1)}/>
                            <div className={getStarClassNames(3, 2)}/>
                            <div className={getStarClassNames(3, 3)}/>
                            <span className="level">Level: 3</span>
                        </skoash.Component>,
                    ]}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
