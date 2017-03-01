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
            <skoash.MediaSequence
                 ref="audio-sequence"
                 checkComplete={true}
            >
                    <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-flip.mp3`} />
                    <skoash.Audio ref="flip" type="sfx" src={`${CMWN.MEDIA.EFFECT}ti-flip.mp3`} />
            </skoash.MediaSequence>
            <div className="drop" />
            <p>
                    Thank you for conserving water!<br />
                    Every drop counts.
            </p>
            <div className="flip animated" />
        </skoash.Screen>
    );
}

