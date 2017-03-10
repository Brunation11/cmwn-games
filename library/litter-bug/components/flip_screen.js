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
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprites-mr-eco-01.png`} />
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprites-sing-thankyou-flip-01.png`} />
            <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}flip.mp3`} />
            <div className="words" />
            <div className="flip-container animated">
                <div className="flip" />
            </div>
            <div className="mr-eco animated" />
            <skoash.Image className="earned" src={`${CMWN.MEDIA.SPRITE}litterbug-earned-flips.gif`} />
        </skoash.Screen>
    );
}
