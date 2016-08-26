export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="flip"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/flip/VO_8.1.mp3" />
            <skoash.Image className="toilet" src="media/S_3/img_3.1.png" />
            <skoash.Component className="message">
                <skoash.Image className="banner" src="media/flip/img_8.1.png" />
                <p>You flushed out a brand new</p><br />
                <skoash.Image className="flip" src="media/flip/flip.png" />
            </skoash.Component>
        </skoash.Screen>
    );
}
