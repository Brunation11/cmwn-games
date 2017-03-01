export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="step-4"
        >
            <skoash.MediaSequence
                ref="audio-sequence"
                checkComplete={true}
            >
                <skoash.Audio ref="step" type="sfx" src={`${CMWN.MEDIA.EFFECT}ti-rv-1.mp3`} />
                <skoash.Audio ref="step-4" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-step-4.mp3`} />
                <skoash.Audio ref="check-the" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-check-the.mp3`} />
            </skoash.MediaSequence>
            <div className="step" />
                <p>
                    Check the faucet.<br /><br />
                    Determine how your tag<br />
                    will fit on your faucet.
                </p>
            <div className="faucet animated" />
        </skoash.Screen>
    );
}

