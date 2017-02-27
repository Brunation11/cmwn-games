export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="men-and-women"
        >
            <skoash.MediaSequence ref="media-sequence">
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-men-women-firefighters.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-they-are-in-excellent-physical.mp3`}
                />
            </skoash.MediaSequence>
            <skoash.Image className="animated" src={`${CMWN.MEDIA.IMAGE}img-7-1.png`} />
            <skoash.Image className="animated" src={`${CMWN.MEDIA.IMAGE}img-7-2.png`} />
            <skoash.Component className="frame">
                <skoash.Image className="background" src={`${CMWN.MEDIA.FRAME}fr-3.png`} />
                <div>
                    They are in great physical shape<br /> and also excellent mental shape.<br />
                    They constantly learn theory<br /> and firefighting techniques.
                </div>
            </skoash.Component>
        </skoash.Screen>
    );
}
