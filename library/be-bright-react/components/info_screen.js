import InfoComponent from './info_component.js';

class Info extends play.Screen {
  constructor() {
    super();


    this.state = {
      id: 'info-lets-learn'
    };

  }

  renderContent() {
    return (
      <div>
        <play.Audio ref="vo" type="voiceOver" src="media/S_6/VO_6.1.mp3" />
        <play.Image ref="info" className="animated" src="media/S_6/img_6.png" />
      </div>
    );
  }
}

export default Info;
