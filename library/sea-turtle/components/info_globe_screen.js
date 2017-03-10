export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-globe"
            className="no-frame"
        >
            <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-3-1.mp3`} />
            <skoash.Component className="center">
                <skoash.Component className="frame">
                    <skoash.Image className="background" src={`${CMWN.MEDIA.FRAME}bg-globe.png`} />
                    <skoash.Component className="content-group center">
                        <skoash.Component>
                            <skoash.Image src={`${CMWN.MEDIA.IMAGE}img-3-1.png`} width="80%" />
                            <h2>
                                Answering these questions<br/>
                                fills your bowl<br/>
                                AND gives you the scoop!
                            </h2>
                        </skoash.Component>
                    </skoash.Component>
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
