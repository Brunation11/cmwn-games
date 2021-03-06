export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-trash"
        >
            <skoash.Audio type="voiceOver" src="media/audio/VO_5.1.mp3" />
            <skoash.Component className="center">
                <skoash.Component className="frame">
                    <skoash.Image src="media/images/bg-slide.png" className="background" />
                    <skoash.Component className="content-group center">
                        <skoash.Component>
                            <skoash.Image src="media/images/img_5.1.png" width="80%" />
                            <h3>Someone has thrown<br /> trash in the ocean.</h3>
                            <h3>Please make this Sea Turtle smile<br /> by cleaning up his home.</h3>
                        </skoash.Component>
                    </skoash.Component>
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
