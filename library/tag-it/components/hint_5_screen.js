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
                <skoash.Audio type="sfx" src={`${CMWN.MEDIA.EFFECT}ti-rv-2.mp3`} />
                <skoash.Audio ref="apply" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-hint-apply.mp3`} />
            </skoash.MediaSequence>
            <div className="tip hint">
                <p>
                    Hint: Apply in layers. Your color must be dry between each layer.
                </p>
            </div>
        </skoash.Screen>
    );
}

