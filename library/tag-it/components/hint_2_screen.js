export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="hint-2"
        >
            <skoash.MediaSequence
                 ref="audio-sequence"
                 checkComplete={true}
            >
                <skoash.Audio type="sfx" src={`${CMWN.MEDIA.EFFECT}ti-rv-2.mp3`} />
                <skoash.Audio ref="you-can" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-hint-you-can.mp3`} />
            </skoash.MediaSequence>
            <div className="tip hint">
                <p>
                    Hint: You can draw a template on paper and trace it if you like!
                </p>
            </div>
        </skoash.Screen>
    );
}

