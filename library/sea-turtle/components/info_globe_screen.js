export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-globe"
            className="no-frame"
        >
            <skoash.Audio type="voiceOver" src="media/audio/VO_3.1.mp3" />
            <skoash.Component className="center">
                <skoash.Component className="frame">
                    <skoash.Image className="background" src="media/images/bg-globe.png" />
                    <skoash.Component className="content-group center">
                        <skoash.Component>
                            <skoash.Image src="media/images/img_3.1.png" width="80%" />
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
