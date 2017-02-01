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
                <skoash.Audio ref="step" type="sfx" src="media/_audio/_Reveals/TI_RV_1.mp3" />
                <skoash.Audio ref="step-7" type="voiceOver" src="media/_audio/S_Step7/VO_Step7.mp3" />
                <skoash.Audio ref="test-it" type="voiceOver" src="media/_audio/S_Step7/VO_YourTag.mp3" />
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

