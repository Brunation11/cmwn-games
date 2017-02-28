export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-step-6"
            className="large-frame right"
        >
            <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-18-1.mp3`} />
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.FRAME}fr-1.png`} />
            <skoash.Component className="frame">
                <skoash.Image
                    className="illustration animated"
                    src={`${CMWN.MEDIA.SPRITE}img-18-2.gif`}
                />
                <skoash.Component>
                    <skoash.Image className="title animated" src={`${CMWN.MEDIA.IMAGE}img-18-1.png`} />
                    <p>
                        Slowly pull the tape<br/>
                        off the surface.<br/>
                        The powder will stick to it<br/>
                        and preserve the print.<br/>
                        <br/>
                        Press the tape onto<br/>
                        the black construction paper.
                    </p>
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
