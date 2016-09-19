import SelectableReveal from '../../shared/components/selectable_reveal/0.1.js';

class WhatDoesANoseDoScreen extends play.Screen {
  constructor() {
    super();


    this.state = {
      id: 'what-does-a-nose-do'
    };

    this.selectableList = [
      <li data-ref="human" pl-correct>
        <div className="side b center inline">
          <play.Image ref="image-1" src="media/images/img_15.2.png" />
        </div>
        <div className="side a center inline">
          <play.Image ref="image-2" src="media/images/img_15.2.png" />
        </div>
      </li>,
      <li data-ref="rabbit" pl-correct>
        <div className="side b center inline">
          <play.Image ref="image-3" src="media/images/img_15.3.png" />
        </div>
        <div className="side a center inline">
          <play.Image ref="image-4" src="media/images/img_15.3.png" />
        </div>
      </li>,
      <li data-ref="rhino" pl-correct>
        <div className="side b center inline">
          <play.Image ref="image-5" src="media/images/img_15.4.png" />
        </div>
        <div className="side a center inline">
          <play.Image ref="image-6" src="media/images/img_15.4.png" />
        </div>
      </li>,
    ];

    this.revealList = [
      <li></li>,
      <li></li>,
      <li></li>,
    ];

    this.revealAssets = [
      <play.Audio data-ref="human" type="voiceOver" src="media/audio/VO_15-2.mp3" />,
      <play.Audio data-ref="rabbit" type="voiceOver" src="media/audio/VO_15-3.mp3" />,
      <play.Audio data-ref="rhino" type="voiceOver" src="media/audio/VO_15-4.mp3" />,
    ];

    this.assets = [
      <play.Audio
        data-ref="correct"
        type="sfx"
        src="media/audio/S_15.1.mp3"
      />
    ];

  }

  renderContent() {
    return (
      <div>
        <play.Audio ref="vo" type="voiceOver" src="media/audio/VO_15-1.mp3" />
        <div className="center">
          <div className="frame">
            <play.Image ref="image-0" src="media/images/img_15.1.png" />
            <h3>Touch each nose.</h3>
            <SelectableReveal
              ref={'selectableReveal'}
              answers={['human', 'rabbit', 'rhino']}
              assets={this.assets}
              selectableList={this.selectableList}
              selectableSelectClass="HIGHLIGHTED"
              revealList={this.revealList}
              revealAssets={this.revealAssets}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default WhatDoesANoseDoScreen;
