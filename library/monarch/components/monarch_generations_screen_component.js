export default function (props, ref, key, opts = {}) {
    var onCloseReveal;

    onCloseReveal = function (prevMessage) {
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

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={`monarch-generations-${opts.level}`}
        >
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
