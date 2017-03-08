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
            id="tips"
        >
            <skoash.MediaSequence
                ref="audio-sequence"
                checkComplete={true}
            >
                <skoash.Audio
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-1.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-tips.mp3`}
                />
                <skoash.Audio
                    playTarget="use-your"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-use-your.mp3`}
                />
                <skoash.Audio
                    playTarget="try-glow"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-try-glow.mp3`}
                />
                <skoash.Audio
                    playTarget="use-multiple"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-use-multiple.mp3`}
                />
                <skoash.Audio
                    playTarget="create"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-create.mp3`}
                />
                <skoash.Audio
                    playTarget="personalize"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-personalize.mp3`}
                />
            </skoash.MediaSequence>
            <div className="tips" />
            <div className="lid-1" />
            <div className="lid-2" />
            <div className="lid-3" />
            <ul>
                <li className={getClassNames('use-your')}>
                    <span>Use your creativity!</span>
                </li>
                <li className={getClassNames('try-glow')}>
                    <span>Try glow in the dark paint.</span>
                </li>
                <li className={getClassNames('use-multiple')}>
                    <span>Use multiple colors to catch attention.</span>
                </li>
                <li className={getClassNames('create')}>
                    <span>Create a theme, like flowers or superheroes.</span>
                </li>
                <li className={getClassNames('personalize')}>
                    <span>Personalize for family members or rooms.</span>
                </li>
            </ul>
        </skoash.Screen>
    );
}

