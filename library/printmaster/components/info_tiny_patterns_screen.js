export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-tiny-patterns"
            className="large-frame"
        >
            <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-2-1.mp3`} delay={2000} />
            <skoash.Image ref="img" className="hidden" src={`${CMWN.MEDIA.FRAME}fr-1.png`} />
            <skoash.MediaSequence>
                <skoash.Audio type="sfx" src={`${CMWN.MEDIA.EFFECT}s-1-1.mp3`} />
                <skoash.Audio type="sfx" src={`${CMWN.MEDIA.EFFECT}s-1-2.mp3`} />
            </skoash.MediaSequence>
            <skoash.Component ref="frame" className="frame">
                <skoash.Image ref="img" className="animated" src={`${CMWN.MEDIA.SPRITE}img-2-1.gif`} />
                <p>
                    Fingerprints are the<br/>
                    tiny patterns on the<br/>
                    tips of each finger.
                </p>
            </skoash.Component>

        </skoash.Screen>
    );
}
