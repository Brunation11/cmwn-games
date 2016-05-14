import BulbsSelectableReveal from './bulbs_selectable_reveal';

class BulbScreen extends play.Screen {
  constructor() {
    super();

  }

  renderContent() {
    return (
      <div>
        <play.Audio ref="vo" type="voiceOver" trigger={this.props.trigger} src="media/S_3/VO_3.1.mp3" />
        <play.Image ref="title" className="title animated" trigger={this.props.trigger} src="media/S_3/img_3.1.png" />
        <BulbsSelectableReveal ref="selectable-reveal" />
      </div>
    );
  }
}

export default BulbScreen;
