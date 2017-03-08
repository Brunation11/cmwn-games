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
                <skoash.Audio type="sfx" src={`${CMWN.MEDIA.EFFECT}ti-rv-2.mp3`} />
                <skoash.Audio ref="plan" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-hint-plan.mp3`} />
            </skoash.MediaSequence>
            <div className="tip hint">
                <p>
                    Hint: Plan out your spacing before you write!
                </p>
            </div>
        </skoash.Screen>
    );
}

