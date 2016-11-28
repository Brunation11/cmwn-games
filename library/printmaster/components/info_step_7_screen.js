export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-step-7"
            className="large-frame"
        >
            <skoash.Audio type="voiceOver" src="media/S_19/VO_19.1.mp3" />
            <skoash.Image className="hidden" src="media/_Frame/Fr_1.png" />
            <skoash.Component className="frame" pl-bg="media/_Frame/Fr_1.png">
                <skoash.Image className="title animated" src="media/S_19/img_19.1.png" />
                <skoash.Image className="illustration animated" src="media/S_19/img_19.2.gif" />
                <p>
                    Now examine with your magnifying glass and<br/>
                    determine what kind of fingerprints you have:<br/>
                    Arches, Loops, Whorls, or Double Loops?
                </p>
            </skoash.Component>
        </skoash.Screen>
    );
}
