export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="step-6"
        >
            <skoash.MediaSequence
                ref="audio-sequence"
                checkComplete={true}
            >
                <skoash.Audio ref="step" type="sfx" src={`${CMWN.MEDIA.EFFECT}ti-rv-1.mp3`} />
                <skoash.Audio ref="step-6" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-step-6.mp3`} />
                <skoash.Audio ref="test-it" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-test-it.mp3`} />
            </skoash.MediaSequence>
            <div className="step animated" />
                <p>
                    Test it on the faucet<br />
                    to be sure it fits,<br />
                    and that the faucet<br />
                    is still useable.<br /><br />
                    Make any<br />
                    adjustments necessary.
                </p>
            <div className="faucet"></div>
        </skoash.Screen>
    );
}

