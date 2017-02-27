export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-forrest"
        >
            <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-fire-destroys-trees.mp3`} />
            <skoash.Component className="frame animated">
                <skoash.Image className="background" src={`${CMWN.MEDIA.FRAME}fr-1.png`} />
                <p className="animated">
                    Fire destroys trees and homes and<br />
                    consumes landscapes and habitats.
                </p>
            </skoash.Component>
        </skoash.Screen>
    );
}
