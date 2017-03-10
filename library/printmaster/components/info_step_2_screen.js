export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-step-2"
            className="large-frame"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-14-1.mp3`} />
            <skoash.Image ref="frame-img" className="hidden" src={`${CMWN.MEDIA.FRAME}fr-1.png`} />
            <skoash.Component className="frame">
                <skoash.Image
                    ref="title"
                    className="title animated"
                    src={`${CMWN.MEDIA.IMAGE}img-14-1.png`}
                />
                <p>
                    Press your fingertips onto a hard surface,<br/>
                    like a kitchen counter, bathroom sink,<br/>
                    or dinner plate.
                </p>
                <skoash.Image
                    ref="illustration"
                    className="illustration animated"
                    src={`${CMWN.MEDIA.SPRITE}img-14-2.gif`}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
