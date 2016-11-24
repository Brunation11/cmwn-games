export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="flip"
            playOnStart="fire-sfx"
        >
            <skoash.Audio type="voiceOver" src="media/S_13/vo_Flip.mp3" />
            <skoash.Audio type="sfx" ref="fire-sfx" src="media/S_13/S_13.1.mp3" />
            <h2>
                You just earned<br /> a red hot
            </h2>
            <div className="flip-text">
                FLIP
            </div>
            <skoash.Image className="animated fire" src="media/S_1/img_1.1.png" />
            <skoash.Image className="animated flip" src="media/S_13/img_13.1.png" />
        </skoash.Screen>
    );
}

