import SelectableAudio from 'shared/components/selectable_audio/0.1';
import Score from 'shared/components/score/0.1';

const INCREMENT = 10;
const DECREMENT = 20;

class MultiBubblesScreenComponent extends skoash.Screen {

  start() {
    super.start();

    if (this.state.return) this.refs.score.setScore(0);
  }

  changeScore(message) {
    if (message === 'incorrect') {
      this.refs.score.down();
    } else {
      this.refs.score.up();
    }
  }

  renderSelectableAudio() {
    return (
      <SelectableAudio
        ref="selectable-audio"
        selectableList={[
          <skoash.ListItem correct id="swim" data-ref="swim" />,
          <skoash.ListItem correct id="runFactories" data-ref="runFactories" />,
          <skoash.ListItem correct id="washFace" data-ref="washFace" />,
          <skoash.ListItem correct id="drinkIt" data-ref="drinkIt" />,
          <skoash.ListItem id="playBasketball" data-ref="incorrect" />,
          <skoash.ListItem correct id="brushTeeth" data-ref="brushTeeth" />,
          <skoash.ListItem id="tellTime" data-ref="incorrect" />,
          <skoash.ListItem correct id="takeShowers" data-ref="takeShowers" />,
          <skoash.ListItem correct id="cleanHouse" data-ref="cleanHouse" />,
          <skoash.ListItem correct id="cook" data-ref="cook" />,
          <skoash.ListItem id="crochet" data-ref="incorrect" />,
          <skoash.ListItem correct id="growCrops" data-ref="growCrops" />,
          <skoash.ListItem id="zipline" data-ref="incorrect" />,
          <skoash.ListItem id="read" data-ref="incorrect" />,
          <skoash.ListItem correct id="laundry" data-ref="laundry" />,
          <skoash.ListItem id="drive" data-ref="incorrect" />,
          <skoash.ListItem correct id="washDishes" data-ref="washDishes" />,
          <skoash.ListItem id="sleep" data-ref="incorrect" />,
          <skoash.ListItem id="tapDance" data-ref="incorrect" />,
          <skoash.ListItem id="flyAKite" data-ref="incorrect" />,
          <skoash.ListItem id="talk" data-ref="incorrect" />,
        ]}
        audioAssets={[
          <skoash.Audio data-ref="swim" type="voiceOver" src="media/_audio/_S_MultiBubbles/HFF_VO_Swim.mp3" />,
          <skoash.Audio data-ref="runFactories" type="voiceOver" src="media/_audio/_S_MultiBubbles/HFF_VO_RunFactories.mp3" />,
          <skoash.Audio data-ref="washFace" type="voiceOver" src="media/_audio/_S_MultiBubbles/HFF_VO_WashFace.mp3" />,
          <skoash.Audio data-ref="drinkIt" type="voiceOver" src="media/_audio/_S_MultiBubbles/HFF_VO_DrinkIt.mp3" />,
          <skoash.Audio data-ref="brushTeeth" type="voiceOver" src="media/_audio/_S_MultiBubbles/HFF_VO_BrushTeeth.mp3" />,
          <skoash.Audio data-ref="takeShowers" type="voiceOver" src="media/_audio/_S_MultiBubbles/HFF_VO_TakeShowers.mp3" />,
          <skoash.Audio data-ref="cleanHouse" type="voiceOver" src="media/_audio/_S_MultiBubbles/HFF_VO_CleanHouse.mp3" />,
          <skoash.Audio data-ref="cook" type="voiceOver" src="media/_audio/_S_MultiBubbles/HFF_VO_Cook.mp3" />,
          <skoash.Audio data-ref="growCrops" type="voiceOver" src="media/_audio/_S_MultiBubbles/HFF_VO_GrowCrops.mp3" />,
          <skoash.Audio data-ref="laundry" type="voiceOver" src="media/_audio/_S_MultiBubbles/HFF_VO_Laundry.mp3" />,
          <skoash.Audio data-ref="washDishes" type="voiceOver" src="media/_audio/_S_MultiBubbles/HFF_VO_WashDishes.mp3" />,
          <skoash.Audio data-ref="incorrect" type="sfx" src="media/_audio/_S_MultiBubbles/HFF_SX_Wrong.mp3" complete />,
        ]}
        selectRespond={this.changeScore.bind(this)}
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
      <div className="bubbles">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <skoash.Image src="media/_images/_S_MultiBubbles/img_7.1.png" />
      <Score
        ref="score"
        leadingContent={
          <skoash.Image src="media/_images/_S_MultiBubbles/img_7.2.png" />
        }
        checkComplete={false}
        increment={INCREMENT}
        downIncrement={DECREMENT}
      />
    </MultiBubblesScreenComponent>
  );
}

