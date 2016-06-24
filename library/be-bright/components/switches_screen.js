import SwitchesSelectableReveal from './switches_selectable_reveal';

class SwitchesScreen extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'switches'
    };
  }

  renderContent() {
    return (
      <div>
        <play.Audio ref="vo" type="voiceOver" src="media/S_5/VO_5.1.mp3" />
        <play.Image ref="title" className="title animated" src="media/S_5/img_5.1.png" />
        <SwitchesSelectableReveal ref="selectable-reveal" />
      </div>
    );
  }
}

export default SwitchesScreen;
