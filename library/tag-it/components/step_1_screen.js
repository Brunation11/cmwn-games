import _ from 'lodash';
import ClassNames from 'classnames';

export default function (props, ref, key) {
    function getClassNames(ref2) {
        return ClassNames(ref2, {animated: _.get(props, `data[${ref2}].playing`)});
    }

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="step-1"
        >
            <skoash.MediaSequence
                 ref="audio-sequence"
                 checkComplete={true}
            >
                <skoash.Audio
                    type="sfx"
                    src="media/_audio/_Reveals/TI_RV_1.mp3"
                    delay={500}
                />
                <skoash.Audio
                    type="voiceOver"
                    src="media/_audio/S_Step1/VO_Step1.mp3"
                />
                <skoash.Audio
                    type="voiceOver"
                    src="media/_audio/S_Step1/VO_CountHow.mp3"
                />
                <skoash.Audio
                    type="sfx"
                    src="media/_audio/_Reveals/TI_RV_2.mp3"
                />
                <skoash.Audio
                    playTarget="start"
                    type="voiceOver"
                    src="media/_audio/S_Step1/VO_YouCan.mp3"
                />
            </skoash.MediaSequence>

            <skoash.Image ref="image" className="animated" src="media/_images/S_Step1/img_6.1.png" />
            <p className="count">
                Count how many faucets you have in your house.<br />
                Remember to include sinks, tubs, showers<br />
                and even outdoor spigots.
            </p>
            <p className={getClassNames('start')}>
                You can make a tag for every<br />
                one of them if you choose, but start<br />
                with the most commonly used faucet.
            </p>
        </skoash.Screen>
    );
}

