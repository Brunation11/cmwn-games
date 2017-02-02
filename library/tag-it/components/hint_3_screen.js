export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="hint-3"
        >
            <skoash.MediaSequence
                 ref="audio-sequence"
                 checkComplete={true}
            >
                <skoash.Audio type="sfx" src="media/_audio/_Reveals/TI_RV_2.mp3" />
                <skoash.Audio ref="plan" type="voiceOver" src="media/_audio/S_Step8/VO_HintPlan.mp3" />
            </skoash.MediaSequence>
            <div className="tip hint">
                <p>
                    Hint: Plan out your spacing before you write!
                </p>
            </div>
        </skoash.Screen>
    );
}

