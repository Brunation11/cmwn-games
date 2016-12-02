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
                <skoash.Audio type="sfx" src="media/_audio/_Reveals/TI_RV_1.mp3" />
                <skoash.Audio type="voiceOver" src="media/_audio/S_Step8/VO_Step8.mp3" />
                <skoash.Audio ref="first" type="voiceOver" src="media/_audio/S_Step8/VO_First.mp3" />
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

