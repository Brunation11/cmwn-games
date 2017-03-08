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
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-1.mp3`}
                    delay={500}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-step-1.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-count-how.mp3`}
                />
                <skoash.Audio
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-2.mp3`}
                />
                <skoash.Audio
                    playTarget="start"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-you-can.mp3`}
                />
            </skoash.MediaSequence>

            <skoash.Image ref="image" className="animated" src={`${CMWN.MEDIA.IMAGE}img-6-1.png`} />
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

