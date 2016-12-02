export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-step-5"
            className="large-frame left"
        >
            <skoash.Audio type="voiceOver" src="media/S_17/VO_17.1.mp3" />
            <skoash.Image className="hidden" src="media/_Frame/Fr_1.png" />
            <skoash.Component className="frame">
                <skoash.Image className="illustration animated" src="media/S_17/img_17.2.gif" />
                <skoash.Component>
                    <skoash.Image className="title animated" src="media/S_17/img_17.1.png" />
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
