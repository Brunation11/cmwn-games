export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-step-3"
            className="large-frame left"
        >
            <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-15-1.mp3`} />
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.FRAME}fr-1.png`} />
            <skoash.Component className="frame">
                <skoash.Image
                    className="illustration animated"
                    src={`${CMWN.MEDIA.SPRITE}img-15-2.gif`}
                />
                <skoash.Component>
                    <skoash.Image className="title animated" src={`${CMWN.MEDIA.IMAGE}img-15-1.png`} />
                    <p>
                        Sprinkle a LITTLE powder<br/>
                        over the surface<br/>
                        that you touched.
                    </p>
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
