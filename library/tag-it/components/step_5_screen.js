import ClasssNames from 'classnames';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            className={ClasssNames({
                STAY: props.gameState.currentScreenIndex === 17
            })}
            id="step-5"
        >
            <skoash.MediaSequence
                ref="audio-sequence"
                checkComplete={true}
            >
                <skoash.Audio ref="step" type="sfx" src="media/_audio/_Reveals/TI_RV_1.mp3" />
                <skoash.Audio ref="step-5" type="voiceOver" src="media/_audio/S_Step5/VO_Step5.mp3" />
                <skoash.Audio ref="you-may" type="voiceOver" src="media/_audio/S_Step5/VO_YouMay.mp3" />
            </skoash.MediaSequence>
            <div className="step" />
                <p className="text">
                    You may want to use a sharpie<br />
                    and trace a cup to create a guide<br />
                    to cut out the center.<br /><br />
                    Cut a straight line from anywhere<br />
                    on the perimeter to the edge<br />
                    where your circle will begin.<br /><br />
                    Then cut around the circle until you<br />
                    have the center of the plastic cut out.
                </p>
                <div className="lid">
            </div>
        </skoash.Screen>
    );
}

