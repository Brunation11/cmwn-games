export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="hint-4"
        >
            <skoash.MediaSequence
                 ref="audio-sequence"
                 checkComplete={true}
            >
                <skoash.Audio
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-1.mp3`}
                />
                <skoash.Audio
                    ref="be-creative"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-be-creative.mp3`}
                />
            </skoash.MediaSequence>
            <div className="tip hint">
                <p>
                    Hint: Be creative! Use bold colors to attract attention.
                </p>
            </div>
        </skoash.Screen>
    );
}

