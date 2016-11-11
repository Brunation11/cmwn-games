export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="make-a-difference"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/screen36.mp3" />
            <skoash.Image className="toilet" src="media/S_3/img_3.1.png" />
            <skoash.Component className="message">
                <p>Remember: YOU can make a<br />difference in the environment<br />and help keep waterways</p>
                <skoash.Image className="banner" src="media/S_7/img_7.1.png" />
            </skoash.Component>
        </skoash.Screen>
    );
}
