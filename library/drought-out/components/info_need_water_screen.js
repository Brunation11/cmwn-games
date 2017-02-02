export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-need-water"
            className="small-frame"
        >
            <skoash.Audio type="voiceOver" src="media/S_5/VO_5.1.mp3"/>
            <div className="frame animated">
                <p>
                    Humans, animals and<br /> plants need<br /> water to live!
                </p>
            </div>
        </skoash.Screen>
    );
}
