export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-sneezers"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_16-1.mp3" />
            <skoash.Image ref="banner" className="banner animated" src="media/images/img_16.1.png" />
        </skoash.Screen>
    );
}
