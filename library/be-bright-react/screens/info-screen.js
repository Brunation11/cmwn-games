import InfoComponent from './info-component.js';

class Info extends play.Screen {
  constructor() {
    super();

  }

  renderContent() {
    return (
      <div>
        <div>info screen content</div>
        <InfoComponent emit={this.props.emit.bind(this)} />
        <play.Image ref="title" emit={this.props.emit.bind(this)} src="media/S_3/img_3.1.png" />
        <play.Audio ref="vo" emit={this.props.emit.bind(this)} src="media/S_3/VO_3.1.mp3" />
      </div>
    );
  }
}

export default Info;
