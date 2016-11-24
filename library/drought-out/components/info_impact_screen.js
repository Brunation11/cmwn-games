export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-impact"
            className="small-frame"
        >
            <skoash.Audio type="voiceOver" src="media/S_4/VO_4.1.mp3"/>
            <skoash.Component className="frame animated">
                <p>
                    What is the impact<br /> of drought?
                </p>
            </skoash.Component>
        </skoash.Screen>
    );
}
