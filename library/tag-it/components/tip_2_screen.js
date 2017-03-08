export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="tip-2"
        >
            <skoash.MediaSequence
                ref="audio-sequence"
                checkComplete={true}
            >
                <skoash.Audio ref="sfx" type="sfx" src={`${CMWN.MEDIA.EFFECT}ti-rv-2.mp3`} />
                <skoash.Audio ref="tip" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-tip-2.mp3`} />
            </skoash.MediaSequence>
            <div className="tip size hint">
                <p>
                    Tip: You'll want to choose a size for your faucet that<br />
                    is big enough to see but not too big to be in the way.
                </p>
            </div>
        </skoash.Screen>
    );
}

