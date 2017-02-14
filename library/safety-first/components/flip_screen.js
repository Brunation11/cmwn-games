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
                src={`${MEDIA.VO}Flip.mp3`}
            />
            <skoash.Image
                className="flip"
                src={`${MEDIA.SPRITE}SF.AnimatedEarnedFlip.gif`}
            />
            <skoash.Image
                className="sign"
                src={`${MEDIA.IMAGE}frame.flip.png`}
            />
            <h1 className="header">
                You are important<br />
                to us.
            </h1>
            <h2 className="sub-header">
                Thank you for doing<br />
                what it takes to stay safe.<br />
                Here's a flip<br />
                to show we care!
            </h2>
        </skoash.Screen>
    );
}
