export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="bubble-up"
        >
            <skoash.MediaSequence ref="media-sequence">
                <skoash.Audio
                    ref="vo-1"
                    type="voiceOver"
                    src="media/_audio/_S_BubbleUp/HFF_VO_BubbleUP.mp3"
                />
                <skoash.Audio
                    ref="vo-2"
                    type="voiceOver"
                    src="media/_audio/_S_BubbleUp/HFF_VO_Answer.mp3"
                />
            </skoash.MediaSequence>
            <skoash.Component className="center">
                <skoash.Component className="group">
                    <skoash.Component ref="frame" className="frame">
                        <skoash.Component ref="center" className="center">
                            <skoash.Component>
                                <skoash.Image src="media/_images/_S_BubbleUp/img_6.1.png" />
                                <p>
                                    Answer the question by<br /> popping the correct bubbles.
                                </p>
                            </skoash.Component>
                        </skoash.Component>
                    </skoash.Component>
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}

