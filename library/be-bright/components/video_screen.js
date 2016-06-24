import InfoComponent from './info_component.js';

class VideoScreen extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'video-screen'
    };

  }

  renderContent() {
    return (
      <div className="center">
        <div className="frame video">
          <play.Video ref="video" src="https://res.cloudinary.com/changemyworldnow/video/upload/v1455037011/Be_Bright_112015_DM_480p_ghb6vh_summbp.mp4" />
        </div>
      </div>
    );
  }
}

export default VideoScreen;
