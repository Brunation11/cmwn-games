import classNames from 'classnames';

export default function (props, ref, key, opts = {}) {
    var onCloseReveal;
    var onSelect;
    var onAnimationEnd;
    var getStarClassNames;

    onCloseReveal = function (prevMessage) {
        if (!prevMessage) return;

        this.updateGameState({
            path: 'reveal',
            data: {
                open: null,
            }
        });

        if (prevMessage !== 'instructions') {
            this.updateGameState({
                path: ['animate'],
                data: {
                    [opts.level]: true,
                }
            });
        }
    };

    onSelect = function () {
        this.updateGameState({
            path: 'reveal',
            data: {
                open: 'fact',
            }
        });
    };

    onAnimationEnd = function () {
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
            id={`monarch-generations-${opts.level}`}
        >
            <skoash.Image
                className="hidden"
                src={`${MEDIA.SPRITE}sprite.circles.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.SPRITE}sprite.starmap.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.SPRITE}sprite.butterflyhover.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.IMAGE}path.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.FRAME}frame.big.png`}
            />
            <skoash.Component
                className="path"
            >
                <skoash.Component
                    className="circle-1"
                >
                    <div className={getStarClassNames(1, 1)}/>
                    <div className={getStarClassNames(1, 2)}/>
                    <div className={getStarClassNames(1, 3)}/>
                </skoash.Component>
                <skoash.Component
                    className="circle-2"
                >
                    <div className={getStarClassNames(2, 1)}/>
                    <div className={getStarClassNames(2, 2)}/>
                    <div className={getStarClassNames(2, 3)}/>
                </skoash.Component>
                <skoash.Component
                    className="circle-3"
                >
                    <div className={getStarClassNames(3, 1)}/>
                    <div className={getStarClassNames(3, 2)}/>
                    <div className={getStarClassNames(3, 3)}/>
                </skoash.Component>
                <skoash.Selectable
                    onSelect={onSelect}
                    list={[
                        <skoash.Component
                            type="li"
                            className={classNames('butterfly-1', {
                                animate: _.get(props, 'gameState.data.animate.1')
                            })}
                            onAnimationEnd={onAnimationEnd}
                        />,
                        <skoash.Component
                            type="li"
                            className={classNames('butterfly-2', {
                                animate: _.get(props, 'gameState.data.animate.2')
                            })}
                            onAnimationEnd={onAnimationEnd}
                        />,
                        <skoash.Component
                            type="li"
                            className={classNames('butterfly-3', {
                                animate: _.get(props, 'gameState.data.animate.3')
                            })}
                            onAnimationEnd={onAnimationEnd}
                        />,
                        <skoash.Component
                            type="li"
                            className={classNames('butterfly-4', {
                                animate: _.get(props, 'gameState.data.animate.4')
                            })}
                            onAnimationEnd={onAnimationEnd}
                        />,
                    ]}
                />
            </skoash.Component>
            <skoash.Reveal
                openOnStart={opts.openOnStart}
                openTarget="reveal"
                openReveal={_.get(props, 'data.reveal.open', false)}
                closeReveal={_.get(props, 'data.reveal.close', false)}
                onClose={onCloseReveal}
                list={[
                    <skoash.Component
                        ref="instructions"
                        className="instructions"
                        type="li"
                    >
                        <h4>
                            click anywhere on the screen to continue
                        </h4>
                        <p>
                            Click to reveal interesting<br/>
                            facts about the four<br/>
                            generations of Monarchs.
                        </p>
                        <skoash.Image
                            className="butterfly-a"
                            src={`${MEDIA.IMAGE}orange.butterfly.png`}
                        />
                        <skoash.Image
                            className="butterfly-b"
                            src={`${MEDIA.IMAGE}orange.butterfly.png`}
                        />
                        <skoash.Image
                            className="arrow-1"
                            src={`${MEDIA.IMAGE}orange.arrow.png`}
                        />
                        <skoash.Image
                            className="arrow-2"
                            src={`${MEDIA.IMAGE}orange.arrow.png`}
                        />
                    </skoash.Component>,
                    <skoash.Component
                        ref="fact"
                        className="fact"
                        type="li"
                    >
                        {opts.factContent}
                    </skoash.Component>,
                ]}
            />
            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open')}
            >
                <skoash.MediaSequence
                    ref="instructions"
                    silentOnStart
                    complete={!opts.openOnStart}
                >
                    <skoash.Audio
                        type="voiceOver"
                        src={`${MEDIA.VO}ClickAnywhere.mp3`}
                    />
                    <skoash.Audio
                        type="voiceOver"
                        ref="instructions"
                        src={`${MEDIA.VO}FourGenerations.mp3`}
                    />
                </skoash.MediaSequence>
                <skoash.Audio
                    type="voiceOver"
                    ref="fact"
                    src={`${MEDIA.VO}${opts.factVO}.mp3`}
                />
            </skoash.MediaCollection>
        </skoash.Screen>
    );
}
