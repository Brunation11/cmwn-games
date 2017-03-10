export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-step-5"
            className="large-frame left"
        >
            <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-17-1.mp3`} />
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.FRAME}fr-1.png`} />
            <skoash.Component className="frame">
                <skoash.Image
                    className="illustration animated"
                    src={`${CMWN.MEDIA.SPRITE}img-17-2.gif`}
                />
                <skoash.Component>
                    <skoash.Image className="title animated" src={`${CMWN.MEDIA.IMAGE}img-17-1.png`} />
                    <p>
                        Now tear off a piece of<br/>
                        clear tape.<br/>
                        Place the tape directly<br/>
                        on top of the fingerprint.<br/>
                        Press it down.
                    </p>
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
