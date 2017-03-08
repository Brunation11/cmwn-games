export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="step-3"
        >
            <skoash.MediaSequence
                ref="audio-sequence"
                checkComplete={true}
            >
                <skoash.Audio type="sfx" src={`${CMWN.MEDIA.EFFECT}ti-rv-1.mp3`} />
                <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-step-3.mp3`} />
                <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-choose-a.mp3`} />
            </skoash.MediaSequence>
            <div className="step" />
            <div className="text">
                <p>
                    Choose a plastic lid and cut off the rim.
                </p>
                <span>
                    (The part that attaches to the body of the container.)
                </span>
            </div>
            <div className="lids animated" />
        </skoash.Screen>
    );
}

