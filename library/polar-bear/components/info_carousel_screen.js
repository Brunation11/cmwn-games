export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-carousel"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_10.1.mp3" delay={750} />
            <skoash.Component className="frame">
                <skoash.Image ref="banner" className="banner animated" src="media/images/Img_10.1.png" />
                <h3>
                    Tap or click the puck.<br />
                    Land 5 in the pocket when the<br />
                    polar bear is overhead.
                </h3>
            </skoash.Component>
        </skoash.Screen>
    );
}
