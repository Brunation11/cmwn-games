export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-step-3"
            className="large-frame left"
        >
            <skoash.Audio type="voiceOver" src="media/S_15/VO_15.1.mp3" />
            <skoash.Image className="hidden" src="media/_Frame/Fr_1.png" />
            <skoash.Component className="frame">
                <skoash.Image className="illustration animated" src="media/S_15/img_15.2.gif" />
                <skoash.Component>
                    <skoash.Image className="title animated" src="media/S_15/img_15.1.png" />
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
