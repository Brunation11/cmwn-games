export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="question-what-color"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_6.1.mp3" delay={500} />
            <skoash.Component className="frame">
                <skoash.Image ref="bear" className="bear animated" src="media/images/Img_6.1.png" />
                <h3>What color<br />is a Polar Bear’s fur?</h3>
            </skoash.Component>
        </skoash.Screen>
    );
}
