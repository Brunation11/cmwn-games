import SelectableAudio from 'shared/components/selectable_audio/0.1';
import Score from 'shared/components/score/0.1';
import Repeater from 'shared/components/repeater/0.1';

const INCREMENT = 10;
const DECREMENT = 20;

class MultiBubblesScreenComponent extends skoash.Screen {

    start() {
        super.start();

        if (this.state.replay) this.refs.score.setScore(0);

        this.changeScore = this.changeScore.bind(this);
    }

    changeScore(message) {
        var component = this.refs['selectable-audio'].refs.selectable.refs[message];
        if (component && component.props.correct) {
            this.refs.score.up();
        } else {
            this.refs.score.down();
        }
    }

    renderSelectableAudio() {
        return (
              <SelectableAudio
                    ref="selectable-audio"
                    selectableList={[
                        <skoash.ListItem correct data-ref="swim" />,
                        <skoash.ListItem correct data-ref="runFactories" />,
                        <skoash.ListItem correct data-ref="washFace" />,
                        <skoash.ListItem correct data-ref="drinkIt" />,
                        <skoash.ListItem data-ref="playBasketball" />,
                        <skoash.ListItem correct data-ref="brushTeeth" />,
                        <skoash.ListItem data-ref="tellTime" />,
                        <skoash.ListItem correct data-ref="takeShowers" />,
                        <skoash.ListItem correct data-ref="cleanHouse" />,
                        <skoash.ListItem correct data-ref="cook" />,
                        <skoash.ListItem data-ref="crochet" />,
                        <skoash.ListItem correct data-ref="growCrops" />,
                        <skoash.ListItem data-ref="zipline" />,
                        <skoash.ListItem data-ref="read" />,
                        <skoash.ListItem correct data-ref="laundry" />,
                        <skoash.ListItem data-ref="drive" />,
                        <skoash.ListItem correct data-ref="washDishes" />,
                        <skoash.ListItem data-ref="sleep" />,
                        <skoash.ListItem data-ref="tapDance" />,
                        <skoash.ListItem data-ref="flyAKite" />,
                        <skoash.ListItem data-ref="talk" />,
                    ]}
                    audioAssets={[
                        <skoash.Audio
                            data-ref="swim"
                            type="voiceOver"
                            src="media/_audio/_S_MultiBubbles/HFF_VO_Swim.mp3"
                        />,
                        <skoash.Audio
                            data-ref="runFactories"
                            type="voiceOver"
                            src="media/_audio/_S_MultiBubbles/HFF_VO_RunFactories.mp3"
                        />,
                        <skoash.Audio
                            data-ref="washFace"
                            type="voiceOver"
                            src="media/_audio/_S_MultiBubbles/HFF_VO_WashFace.mp3"
                        />,
                        <skoash.Audio
                            data-ref="drinkIt"
                            type="voiceOver"
                            src="media/_audio/_S_MultiBubbles/HFF_VO_DrinkIt.mp3"
                        />,
                        <skoash.Audio
                            data-ref="brushTeeth"
                            type="voiceOver"
                            src="media/_audio/_S_MultiBubbles/HFF_VO_BrushTeeth.mp3"
                        />,
                        <skoash.Audio
                            data-ref="takeShowers"
                            type="voiceOver"
                            src="media/_audio/_S_MultiBubbles/HFF_VO_TakeShowers.mp3"
                        />,
                        <skoash.Audio
                            data-ref="cleanHouse"
                            type="voiceOver"
                            src="media/_audio/_S_MultiBubbles/HFF_VO_CleanHouse.mp3"
                        />,
                        <skoash.Audio
                            data-ref="cook"
                            type="voiceOver"
                            src="media/_audio/_S_MultiBubbles/HFF_VO_Cook.mp3"
                        />,
                        <skoash.Audio
                            data-ref="growCrops"
                            type="voiceOver"
                            src="media/_audio/_S_MultiBubbles/HFF_VO_GrowCrops.mp3"
                        />,
                        <skoash.Audio
                            data-ref="laundry"
                            type="voiceOver"
                            src="media/_audio/_S_MultiBubbles/HFF_VO_Laundry.mp3"
                        />,
                        <skoash.Audio
                            data-ref="washDishes"
                            type="voiceOver"
                            src="media/_audio/_S_MultiBubbles/HFF_VO_WashDishes.mp3"
                        />,
                        <skoash.Audio
                            data-ref="incorrect"
                            type="sfx"
                            src="media/_audio/_S_MultiBubbles/HFF_SX_Wrong.mp3"
                            complete
                        />,
                    ]}
                    selectRespond={this.changeScore}
                    selectClass="HIGHLIGHTED"
              />
        );
    }

    renderContent() {
        return (
            <div className={this.getClassNames()}>
                {this.renderContentList()}
                {this.renderSelectableAudio()}
            </div>
        );
    }
}

export default function (props, ref, key) {
    return (
        <MultiBubblesScreenComponent
            {...props}
            ref={ref}
            key={key}
            id="multi-bubbles"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/_audio/_S_MultiBubbles/HFF_VO_WhatCan.mp3" />
            <Repeater className="bubbles" ammount={14} />
            <skoash.Image src="media/_images/_S_MultiBubbles/img_7.1.png" />
            <Score
                ref="score"
                leadingContent={
                    <skoash.Image src="media/_images/_S_MultiBubbles/img_7.2.png" />
                }
                checkComplete={false}
                complete
                increment={INCREMENT}
                downIncrement={DECREMENT}
            />
        </MultiBubblesScreenComponent>
    );
}

