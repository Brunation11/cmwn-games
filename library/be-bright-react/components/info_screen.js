import InfoComponent from './info_component.js';

class Info extends play.Screen {
  constructor() {
    super();

  }

  renderContent() {
    return (
      <div>
        <div>info screen content</div>
        <InfoComponent />
        <play.Image ref="title" src="media/S_3/img_3.1.png" />
        <play.Video ref="video" src="https://res.cloudinary.com/changemyworldnow/video/upload/v1455037011/Be_Bright_112015_DM_480p_ghb6vh_summbp.mp4" />
      </div>
    );
  }
}

export default Info;
