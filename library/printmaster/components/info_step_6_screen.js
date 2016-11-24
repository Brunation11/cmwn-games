export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-step-6"
            className="large-frame right"
        >
            <skoash.Audio type="voiceOver" src="media/S_18/VO_18.1.mp3" />
            <skoash.Image className="hidden" src="media/_Frame/Fr_1.png" />
            <skoash.Component className="frame">
                <skoash.Image className="illustration animated" src="media/S_18/img_18.2.gif" />
                <skoash.Component>
                    <skoash.Image className="title animated" src="media/S_18/img_18.1.png" />
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
