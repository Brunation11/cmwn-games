export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-good-job"
        >
            <skoash.Audio ref="vo-jingle" type="voiceOver" src="media/audio/VO_11-1.mp3" />
            <skoash.Component className="frame">
                <skoash.Image ref="banner" className="banner animated" src="media/images/img_11.1.png" />
                <h3>Now let's see<br/>WHO belongs with WHAT!</h3>
            </skoash.Component>
        </skoash.Screen>
    );
}
