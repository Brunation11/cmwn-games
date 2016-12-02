import Score from 'shared/components/score/0.1';
import Repeater from 'shared/components/repeater/0.1';
import Selectable from 'shared/components/selectable/0.1';
import MediaCollection from 'shared/components/media_collection/0.1';

const INCREMENT = 10;
const DECREMENT = 10;

var selectRespond = function (ref, isCorrect, correct, incorrect) {
    if (isCorrect) {
        correct++;
    } else {
        ref = 'incorrect';
        incorrect++;
    }

    playAudio.call(this, ref, playAudio.bind(this, 'dummy', _.noop));
    changeScore.call(this, correct, incorrect);
};

var playAudio = function (ref, cb) {
    this.updateGameState({
        path: 'media',
        data: {
            play: ref
        },
        callback: cb,
    });
};

var changeScore = function (correct, incorrect) {
    debugger;
    this.updateGameState({
        path: 'score',
        data: {
            correct,
            incorrect,
        },
    });
};


export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="multi-bubbles"
        >
            <skoash.Audio
                ref="vo"
                type="voiceOver"
                src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/WhatCan.mp3`}
            />
            <MediaCollection
                ref="media-collection"
                play={_.get(props, 'data.media.play', null)}
            >
                <skoash.Audio
                    data-ref="swim"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/Swim.mp3`}
                />
                <skoash.Audio
                    data-ref="washFace"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/WashFace.mp3`}
                />
                <skoash.Audio
                    data-ref="drinkIt"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/DrinkIt.mp3`}
                />
                <skoash.Audio
                    data-ref="brushTeeth"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/BrushTeeth.mp3`}
                />
                <skoash.Audio
                    data-ref="takeShowers"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/TakeShowers.mp3`}
                />
                <skoash.Audio
                    data-ref="cleanHouse"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/CleanHouse.mp3`}
                />
                <skoash.Audio
                    data-ref="cook"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/Cook.mp3`}
                />
                <skoash.Audio
                    data-ref="growCrops"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/GrowCrops.mp3`}
                />
                <skoash.Audio
                    data-ref="laundry"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/Laundry.mp3`}
                />
                <skoash.Audio
                    data-ref="washDishes"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/WashDishes.mp3`}
                />
                <skoash.Audio
                    data-ref="incorrect"
                    type="sfx"
                    src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/effects/Wrong.mp3`}
                    complete
                />
                <skoash.Audio
                    data-ref="slide-up"
                    type="sfx"
                    src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/effects/SwervySlideUp.mp3`}
                />
            </MediaCollection>
            <Repeater className="bubbles" ammount={14} />
            <skoash.Image src={`${ENVIRONMENT.MEDIA_GAME}ImageAssets/IMG_7.1.png`} className="clean-water"/>
            <Selectable
                ref="selectable"
                selectRespond={function (ref, isCorrect) {
                    var correct = _.get(props, 'data.score.correct', 0);
                    var incorrect = _.get(props, 'data.score.incorrect', 0);
                    selectRespond.call(this, ref, isCorrect, correct, incorrect);
                }}
                selectClass="HIGHLIGHTED"
                list={[
                    <skoash.ListItem correct data-ref="swim" />,
                    <skoash.ListItem correct data-ref="washFace" />,
                    <skoash.ListItem correct data-ref="drinkIt" />,
                    <skoash.ListItem select data-ref="playBasketball" />,
                    <skoash.ListItem correct data-ref="brushTeeth" />,
                    <skoash.ListItem select data-ref="tellTime" />,
                    <skoash.ListItem correct data-ref="takeShowers" />,
                    <skoash.ListItem correct data-ref="cleanHouse" />,
                    <skoash.ListItem correct data-ref="cook" />,
                    <skoash.ListItem select data-ref="crochet" />,
                    <skoash.ListItem correct data-ref="growCrops" />,
                    <skoash.ListItem select data-ref="zipline" />,
                    <skoash.ListItem select data-ref="read" />,
                    <skoash.ListItem correct data-ref="laundry" />,
                    <skoash.ListItem select data-ref="drive" />,
                    <skoash.ListItem correct data-ref="washDishes" />,
                    <skoash.ListItem select data-ref="sleep" />,
                    <skoash.ListItem select data-ref="tapDance" />,
                    <skoash.ListItem select data-ref="flyAKite" />,
                    <skoash.ListItem select data-ref="talk" />,
                ]}
            />
            <Score
                ref="score"
                correct={_.get(props, 'data.score.correct', 0)}
                incorrect={_.get(props, 'data.score.incorrect', 0)}
                leadingContent={
                    <skoash.Image src={`${ENVIRONMENT.MEDIA_GAME}ImageAssets/IMG_7.2.png`} />
                }
                checkComplete={false}
                complete
                increment={INCREMENT}
                downIncrement={DECREMENT}
            />
        </skoash.Screen>
    );
}

