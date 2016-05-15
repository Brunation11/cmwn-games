import InfoComponent from './info_component.js';

class AudioScreen extends play.Screen {
  constructor() {
    super();

  }

  renderContent() {
    return (
      <div>
        <div>info screen content</div>
        <InfoComponent trigger={this.props.trigger} />
        <play.Image ref="title" trigger={this.props.trigger} src="media/S_3/img_3.1.png" />
        <play.Audio ref="vo" type='voiceOver' trigger={this.props.trigger} src="media/S_3/VO_3.1.mp3" />
      </div>
    );
  }
}

export default AudioScreen;
