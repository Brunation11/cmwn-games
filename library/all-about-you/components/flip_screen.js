export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="flip"
            emitOnComplete={{
                name: 'flip',
            }}
        >
            <skoash.Audio
                ref="vo"
                type="voiceOver"
                src={`${CMWN.MEDIA.VO}vo-finished.mp3`}
            />
            <skoash.Image
                ref="frame"
                className="frame animated"
                src="media/assets/_images/S_17/IMG_17_Frame.png"
            />
            <skoash.Image
                ref="banner"
                className="banner animated"
                src="media/assets/_images/S_17/text-youvefinished_.png"
            />
            <skoash.Image
                ref="confetti"
                className="confetti animated"
                src="media/assets/_images/S_17/IMG_17_Confetti.png"
            />
            <div ref="flip-image" className="flip-image animated"></div>
        </skoash.Screen>
    );
}
