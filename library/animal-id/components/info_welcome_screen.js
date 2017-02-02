export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-welcome"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_2-1.mp3" />
            <skoash.Image ref="banner" className="banner animated" src="media/images/img_2.1.png" />
        </skoash.Screen>
    );
}
