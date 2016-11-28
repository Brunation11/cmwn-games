export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="men-and-women"
        >
            <skoash.MediaSequence ref="media-sequence">
                <skoash.Audio type="voiceOver" src="media/S_7/vo_MenWomenFirefighters.mp3" />
                <skoash.Audio type="voiceOver" src="media/S_7/vo_TheyAreInExcellentPhysical.mp3" />
            </skoash.MediaSequence>
            <skoash.Image className="animated" src="media/S_7/img_7.1.png" />
            <skoash.Image className="animated" src="media/S_7/img_7.2.png" />
            <skoash.Component className="frame">
                <skoash.Image className="background" src="media/_Frames/FR_3.png" />
                <div>
                    They are in great physical shape<br /> and also excellent mental shape.<br />
                    They constantly learn theory<br /> and firefighting techniques.
                </div>
            </skoash.Component>
        </skoash.Screen>
    );
}
