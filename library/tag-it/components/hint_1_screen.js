export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="hint-1"
        >
            <skoash.MediaSequence
                 ref="audio-sequence"
                 checkComplete={true}
            >
                <skoash.Audio type="sfx" src={`${CMWN.MEDIA.EFFECT}ti-rv-2.mp3`} />
                <skoash.Audio ref="make-sure" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-make-sure.mp3`} />
            </skoash.MediaSequence>
            <div className="tip hint">
                <p>
                    Hint: Make sure to leave enough room to write your words.
                </p>
            </div>
        </skoash.Screen>
    );
}

