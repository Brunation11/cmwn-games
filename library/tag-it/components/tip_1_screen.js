export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="tip-1"
        >
             <skoash.MediaSequence
                ref="audio-sequence"
                checkComplete={true}
            >
                <skoash.Audio ref="sfx" type="sfx" src={`${CMWN.MEDIA.EFFECT}ti-rv-2.mp3`} />
                <skoash.Audio ref="tip" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-tip-1.mp3`} />
            </skoash.MediaSequence>
            <div className="tip round">
                <p>
                    Tip: Use plastic lids from products like cottage cheese,<br />
                    yogurt or even take-out food containers.<br />
                    Round works best.
                </p>
            </div>
        </skoash.Screen>
    );
}

