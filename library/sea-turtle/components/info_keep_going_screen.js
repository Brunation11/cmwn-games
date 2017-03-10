export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-keep-going"
        >
            <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-7-1.mp3`} />
            <skoash.Component className="center">
                <skoash.Component className="frame">
                    <skoash.Image src={`${CMWN.MEDIA.FRAME}bg-slide.png`} className="background" />
                    <skoash.Component className="content-group center">
                        <skoash.Component>
                            <skoash.Component className="content">
                                <skoash.Image src={`${CMWN.MEDIA.IMAGE}img-7-1.png`} width="80%" />
                                <h2>Let's keep going!</h2>
                            </skoash.Component>
                        </skoash.Component>
                    </skoash.Component>
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
