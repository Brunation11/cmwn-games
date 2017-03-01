import ClasssNames from 'classnames';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            className={ClasssNames({
                STAY: props.gameState.currentScreenIndex === 23
            })}
            id="step-8"
        >
            <skoash.MediaSequence
                ref="audio-sequence"
                checkComplete={true}
            >
                <skoash.Audio type="sfx" src={`${CMWN.MEDIA.EFFECT}ti-rv-1.mp3`} />
                <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-step-8.mp3`} />
                <skoash.Audio ref="first" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-first.mp3`} />
            </skoash.MediaSequence>
            <div className="step animated" />
            <p className="text">
                First, write your<br />
                <span>SAVE WATER </span>
                message<br />
                with a marker.
            </p>
            <div className="lid" />
        </skoash.Screen>
    );
}

