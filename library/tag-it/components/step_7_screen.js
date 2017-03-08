import ClasssNames from 'classnames';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            className={ClasssNames({
                STAY: props.gameState.currentScreenIndex === 20
            })}
            id="step-7"
        >
            <skoash.MediaSequence
                ref="audio-sequence"
                checkComplete={true}
            >
                <skoash.Audio ref="step" type="sfx" src={`${CMWN.MEDIA.EFFECT}ti-rv-1.mp3`} />
                <skoash.Audio ref="step-7" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-step-7.mp3`} />
                <skoash.Audio ref="test-it" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-your-tag.mp3`} />
            </skoash.MediaSequence>
            <div className="step animated" />
            <p className="text">
                Your tag can have any shape you<br />
                choose from round to scalloped edges.<br /><br />
                Cut the outside edge to create<br />
                whatever design you like.<br /><br />
                Let creativity be your guide.
            </p>
            <div className="lid" />
        </skoash.Screen>
    );
}

