import SelectableAudio from 'shared/components/selectable_audio/0.1';
import Score from 'shared/components/score/0.1';

const INCREMENT = 10;
const DECREMENT = 20;

class MultiBubblesScreenComponent extends skoash.Screen {
  constructor() {
    super();
  }

  changeScore(message) {
    if (message === 'false') {
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
          <li id="swim" data-ref="swim" className="correct"></li>,
          <li id="runFactories" data-ref="runFactories" className="correct"></li>,
          <li id="washFace" data-ref="washFace" className="correct"></li>,
          <li id="drinkIt" data-ref="drinkIt" className="correct"></li>,
          <li id="playBasketball" data-ref="false"></li>,
          <li id="brushTeeth" data-ref="brushTeeth" className="correct"></li>,
          <li id="tellTime" data-ref="false"></li>,
          <li id="takeShowers" data-ref="takeShowers" className="correct"></li>,
          <li id="cleanHouse" data-ref="cleanHouse" className="correct"></li>,
          <li id="cook" data-ref="cook" className="correct"></li>,
          <li id="crochet" data-ref="false"></li>,
          <li id="growCrops" data-ref="growCrops" className="correct"></li>,
          <li id="zipline" data-ref="false"></li>,
          <li id="read" data-ref="false"></li>,
          <li id="laundry" data-ref="laundry" className="correct"></li>,
          <li id="drive" data-ref="false"></li>,
          <li id="washDishes" data-ref="washDishes" className="correct"></li>,
          <li id="sleep" data-ref="false"></li>,
          <li id="tapDance" data-ref="false"></li>,
          <li id="flyAKite" data-ref="false"></li>,
          <li id="talk" data-ref="false"></li>,
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
          <skoash.Audio data-ref="false" type="sfx" src="media/_audio/_S_MultiBubbles/HFF_SX_Wrong.mp3" />,
        ]}
        selectRespond={this.changeScore.bind(this)}
        selectClass="HIGHLIGHTED"
        requireAll={true}
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

var MultiBubblesScreen = (
  <MultiBubblesScreenComponent
    ref="multi-bubbles"
    id="multi-bubbles"
  >
    <skoash.Audio type="voiceOver" src="media/_audio/_S_MultiBubbles/HFF_VO_WhatCan.mp3" />
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
    <skoash.Image className="hidden" src="media/_images/_S_MultiBubbles/img_7.3.png" />
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

export default MultiBubblesScreen;
