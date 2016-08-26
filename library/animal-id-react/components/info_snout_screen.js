class InfoSnoutScreen extends play.Screen {
  constructor() {
    super();


    this.state = {
      id: 'info-snout'
    };

  }

  renderContent() {
    return (
      <div>
        <play.Audio ref="vo" type="voiceOver" src="media/audio/VO_14-1.mp3" />
        <div className="center">
          <div className="frame">
            <play.Image ref="image-1" src="media/images/img_14.1.png" />
            <h2>That's right</h2>
            <div>
              <play.Image ref="image-2" src="media/images/img_14.3.png" />
              <span className="animated"></span>
              <span className="animated"></span>
              <span className="animated"></span>
              <span className="animated"></span>
              <span className="animated"></span>
              <span className="animated"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoSnoutScreen;
