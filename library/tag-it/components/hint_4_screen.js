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
                    src="media/_audio/_Reveals/TI_RV_1.mp3"
                />
                <skoash.Audio
                    ref="be-creative"
                    type="voiceOver"
                    src="media/_audio/S_SelectPaint/VO_BeCreative.mp3"
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

