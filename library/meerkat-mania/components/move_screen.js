export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="move"
        >
            <skoash.Audio ref="start" type="sfx" src={`${CMWN.MEDIA.EFFECT}s-7-1.mp3`} complete />
            <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-7-1.mp3`} />
            <skoash.Component className="frame">
                <skoash.Image className="background" src={`${CMWN.MEDIA.FRAME}fr-10.png`} />
                <p>
                    Check out the
                </p>
                <skoash.Image src={`${CMWN.MEDIA.IMAGE}img-7-1.png`} />
            </skoash.Component>
        </skoash.Screen>
    );
}
