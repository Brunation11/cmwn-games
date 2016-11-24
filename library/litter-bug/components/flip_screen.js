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
            <skoash.Image className="hidden" src="media/_assets/_sprites/sprites.mr.eco-01.png" />
            <skoash.Image className="hidden" src="media/_assets/_sprites/sprites.sing.thankyou.flip-01.png" />
            <skoash.Audio type="voiceOver" src="media/_assets/_sounds/_vos/Flip.mp3" />
            <div className="words" />
            <div className="flip-container animated">
                <div className="flip" />
            </div>
            <div className="mr-eco animated" />
            <skoash.Image className="earned" src="media/_assets/_animations/LitterbugEarnedFlips.gif" />
        </skoash.Screen>
    );
}
