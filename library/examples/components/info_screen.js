export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-lets-learn"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/S_6/VO_6.1.mp3" />
            <skoash.Image ref="info" className="animated" src="media/S_6/img_6.png" />
        </skoash.Screen>
    );
}
