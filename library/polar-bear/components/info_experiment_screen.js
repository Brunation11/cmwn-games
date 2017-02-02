export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-experiment"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_12.1.mp3" delay={750} />
            <skoash.Component className="frame">
                <skoash.Image ref="banner" className="banner animated" src="media/images/Img_12.1.png" />
                <h3>Time for an experiment!</h3>
            </skoash.Component>
        </skoash.Screen>
    );
}
