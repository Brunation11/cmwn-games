export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-jelly"
            className="no-frame"
        >
            <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-8-1.mp3`} />
            <skoash.Component className="center">
                <skoash.Component className="frame">
                    <skoash.Image src={`${CMWN.MEDIA.FRAME}bg-jelly.png`} className="background" />
                    <skoash.Component className="content-group center">
                        <skoash.Component>
                            <skoash.Component className="content">
                                <skoash.Image src={`${CMWN.MEDIA.IMAGE}img-8-1.png`} height="140vh" />
                                <h2>Catch the jellyfish<br/> to discover what<br/> you need to know.</h2>
                            </skoash.Component>
                        </skoash.Component>
                    </skoash.Component>
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
