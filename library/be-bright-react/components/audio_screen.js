import InfoComponent from './info_component.js';

class AudioScreen extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'audio-screen'
    };

  }

  renderContent() {
    return (
      <div>
        <div>info screen content</div>
        <InfoComponent trigger={this.props.trigger} />
        <play.Image ref="title" src="media/S_3/img_3.1.png" />
        <play.Audio ref="vo" type='voiceOver' src="media/S_3/VO_3.1.mp3" />
      </div>
    );
  }
}

export default AudioScreen;
