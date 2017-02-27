export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="flip"
            playOnStart="fire-sfx"
        >
            <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-flip.mp3`} />
            <skoash.Audio type="sfx" ref="fire-sfx" src={`${CMWN.MEDIA.EFFECT}s-13-1.mp3`} />
            <h2>
                You just earned<br /> a red hot
            </h2>
            <div className="flip-text">
                FLIP
            </div>
            <skoash.Image className="animated fire" src={`${CMWN.MEDIA.IMAGE}img-1-1.png`} />
            <skoash.Image className="animated flip" src={`${CMWN.MEDIA.IMAGE}img-13-1.png`} />
        </skoash.Screen>
    );
}

