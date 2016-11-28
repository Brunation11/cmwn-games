export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="hint-5"
        >
            <skoash.MediaSequence
                 ref="audio-sequence"
                 checkComplete={true}
             >
                <skoash.Audio type="sfx" src="media/_audio/_Reveals/TI_RV_2.mp3" />
                <skoash.Audio ref="apply" type="voiceOver" src="media/_audio/S_Step9/VO_HintApply.mp3" />
            </skoash.MediaSequence>
            <div className="tip hint">
                <p>
                    Hint: Apply in layers. Your color must be dry between each layer.
                </p>
            </div>
        </skoash.Screen>
    );
}

