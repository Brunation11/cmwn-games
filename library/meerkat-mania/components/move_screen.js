export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="move"
        >
            <skoash.Audio ref="start" type="sfx" src="media/S_7/S_7.1.mp3" complete />
            <skoash.Audio type="voiceOver" src="media/S_7/VO_7.1.mp3" />
            <skoash.Component className="frame">
                <skoash.Image className="background" src="media/_Frames/FR_10.png" />
                <p>
                    Check out the
                </p>
                <skoash.Image src="media/S_7/img_7.1.png" />
            </skoash.Component>
        </skoash.Screen>
    );
}
