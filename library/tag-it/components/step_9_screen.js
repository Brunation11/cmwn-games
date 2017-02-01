import ClasssNames from 'classnames';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            className={ClasssNames({
                STAY: props.gameState.currentScreenIndex === 27
            })}
            id="step-9"
        >
            <skoash.MediaSequence
                ref="audio-sequence"
                checkComplete={true}
             >
                <skoash.Audio type="sfx" src="media/_audio/_Reveals/TI_RV_1.mp3" />
                <skoash.Audio type="voiceOver" src="media/_audio/S_Step9/VO_Step9.mp3" />
                <skoash.Audio ref="go" type="voiceOver" src="media/_audio/S_Step9/VO_GoOver.mp3" />
            </skoash.MediaSequence>
            <div className="step animated" />
            <p className="text">
                Go over your guide<br />
                with nail polish,<br />
                paint or markers.<br /><br />
                Add fun designs!
            </p>
            <div className="lid" />
        </skoash.Screen>
    );
}

