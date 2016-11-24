export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-tiny-patterns"
            className="large-frame"
        >
            <skoash.Audio type="voiceOver" src="media/S_2/VO_2.1.mp3" delay={2000} />
            <skoash.Image ref="img" className="hidden" src="media/_Frame/Fr_1.png" />
            <skoash.MediaSequence>
                <skoash.Audio type="sfx" src="media/S_1/S_1.1.mp3" />
                <skoash.Audio type="sfx" src="media/S_1/S_1.2.mp3" />
            </skoash.MediaSequence>
            <skoash.Component ref="frame" className="frame">
                <skoash.Image ref="img" className="animated" src="media/S_2/img_2.1.gif" />
                <p>
                    Fingerprints are the<br/>
                    tiny patterns on the<br/>
                    tips of each finger.
                </p>
            </skoash.Component>

        </skoash.Screen>
    );
}
