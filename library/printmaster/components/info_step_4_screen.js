export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-step-4"
            className="large-frame left"
        >
            <skoash.Audio type="voiceOver" src="media/S_16/VO_16.1.mp3" />
            <skoash.Image className="hidden" src="media/_Frame/Fr_1.png" />
            <skoash.Component className="frame">
                <skoash.Image className="illustration animated" src="media/S_16/img_16.2.gif" />
                <skoash.Image className="title animated" src="media/S_16/img_16.1.png" />
                <p>
                    Use the brush<br/>
                    to GENTLY brush<br/>
                    away the excess powder.<br/>
                    Powder will stick<br/>
                    to your fingerprint<br/>
                    so don't brush too hard.
                </p>
            </skoash.Component>
        </skoash.Screen>
    );
}
