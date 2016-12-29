export default function (props, ref, key, opts = {}) {
    var onCloseReveal;
    var onSelect;

    onCloseReveal = function (prevMessage) {
        if (!prevMessage) return;

        this.updateGameState({
            path: 'reveal',
            data: {
                open: null,
            }
        });

        if (prevMessage !== 'instructions') {
            skoash.Screen.prototype.goto(parseInt(key, 10) + 1);
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
                <skoash.Selectable
                    onSelect={onSelect}
                    list={[
                        <skoash.Component
                            type="li"
                            className="butterfly-1"
                        />,
                        <skoash.Component
                            type="li"
                            className="butterfly-2"
                        />,
                        <skoash.Component
                            type="li"
                            className="butterfly-3"
                        />,
                        <skoash.Component
                            type="li"
                            className="butterfly-4"
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
            {/*
            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open')}
            >
                <skoash.Audio
                    type="voiceOver"
                    ref="instructions"
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
        </skoash.Screen>
    );
}
