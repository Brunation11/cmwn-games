export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-step-7"
            className="large-frame"
        >
            <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-19-1.mp3`} />
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.FRAME}fr-1.png`} />
            <skoash.Component className="frame" pl-bg={`${CMWN.MEDIA.FRAME}fr-1.png`}>
                <skoash.Image className="title animated" src={`${CMWN.MEDIA.IMAGE}img-19-1.png`} />
                <skoash.Image className="illustration animated" src={`${CMWN.MEDIA.SPRITE}img-19-2.gif`} />
                <p>
                    Now examine with your magnifying glass and<br/>
                    determine what kind of fingerprints you have:<br/>
                    Arches, Loops, Whorls, or Double Loops?
                </p>
            </skoash.Component>
        </skoash.Screen>
    );
}
