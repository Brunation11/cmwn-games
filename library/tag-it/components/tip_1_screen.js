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
                <skoash.Audio ref="sfx" type="sfx" src="media/_audio/_Reveals/TI_RV_2.mp3" />
                <skoash.Audio ref="tip" type="voiceOver" src="media/_audio/S_Step2/VO_Tip1.mp3" />
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

