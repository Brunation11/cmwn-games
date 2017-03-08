import _ from 'lodash';
import ClassNames from 'classnames';

import MediaCollection from 'shared/components/media_collection/0.1';
import Selectable from 'shared/components/selectable/0.1';

export default function (props, ref, key) {
    function getClassNames(ref2) {
        return ClassNames(ref2, {
            animated: _.get(props, `data[${ref2}].playing`),
            selectable: _.get(props, 'data[\'media-sequence\'].complete'),
        });
    }

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="what-faucet"
        >
            <div className="question" />
            <skoash.MediaSequence
                ref="audio-sequence"
                checkComplete={true}
                onComplete={() => {
                    skoash.trigger('updateState', {
                        path: 'media-sequence',
                        data: {
                            complete: true
                        }
                    });
                }}
            >
                <skoash.Audio
                    ref="what-faucet"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-what-faucet.mp3`}
                />
                <skoash.Audio
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-3.mp3`}
                />
                <skoash.Audio
                    playTarget="kitchen"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-kitchen.mp3`}
                />
                <skoash.Audio
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-3.mp3`}
                />
                <skoash.Audio
                    playTarget="shower"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-shower.mp3`}
                />
                <skoash.Audio
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-3.mp3`}
                />
                <skoash.Audio
                    playTarget="bathroom"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-bathroom.mp3`}
                />
                <skoash.Audio
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-3.mp3`}
                />
                <skoash.Audio
                    playTarget="bathtub"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-bathtub.mp3`}
                />
                <skoash.Audio
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-3.mp3`}
                />
                <skoash.Audio
                    playTarget="classroom"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-classroom.mp3`}
                />
                <skoash.Audio
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-3.mp3`}
                />
                <skoash.Audio
                    playTarget="outdoor"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-outdoor.mp3`}
                />
            </skoash.MediaSequence>

            <MediaCollection
                play={_.get(props, 'data.selection.target', null)}
                onPlay={function () {
                    this.media.correct.play();

                    this.updateGameState({
                        path: 'selection',
                        data: {
                            target: null
                        }
                    });
                }}
            >
                <skoash.Audio ref="correct" type="sfx" src={`${CMWN.MEDIA.EFFECT}ti-rv-4.mp3`} />
            </MediaCollection>

            <Selectable
                chooseOne
                selectRespond={function (target) {
                    this.updateGameState({
                        path: 'selection',
                        data: {
                            target
                        }
                    });
                }}
                list={[
                    <skoash.ListItem className={getClassNames('kitchen')} correct />,
                    <skoash.ListItem className={getClassNames('shower')} correct />,
                    <skoash.ListItem className={getClassNames('bathroom')} correct />,
                    <skoash.ListItem className={getClassNames('bathtub')} correct />,
                    <skoash.ListItem className={getClassNames('classroom')} correct />,
                    <skoash.ListItem className={getClassNames('outdoor')} correct/>
                ]}
            />
        </skoash.Screen>
    );
}

