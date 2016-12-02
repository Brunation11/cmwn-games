export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-forrest"
        >
            <skoash.Audio type="voiceOver" src="media/S_4/vo_FireDestroysTrees.mp3" />
            <skoash.Component className="frame animated">
                <skoash.Image className="background" src="media/_Frames/FR_1.png" />
                <p className="animated">
                    Fire destroys trees and homes and<br />
                    consumes landscapes and habitats.
                </p>
            </skoash.Component>
        </skoash.Screen>
    );
}
