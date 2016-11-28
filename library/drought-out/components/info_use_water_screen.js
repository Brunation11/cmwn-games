export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-use-water"
            className="large-frame"
        >
            <skoash.Audio type="voiceOver" src="media/S_6/VO_6.1.mp3"/>
            <skoash.Component className="frame animated">
                <skoash.Image src="media/S_6/img_6.1.png"/>
                <p>
                    Click to reveal things<br /> that we use water for<br /> almost every day!
                </p>
            </skoash.Component>
        </skoash.Screen>
    );
}
