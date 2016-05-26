class InfoScreen extends play.Screen {
  constructor() {
    super();


    this.state = {
      id: 'info-welcome'
    };

  }

  renderContent() {
    return (
      <div>
        <div pl-component="class-switcher" pl-add="id" pl-remove="title"></div>
        <play.Audio ref="vo" type="voiceOver" src="media/audio/VO_2-1.mp3" />
        <div className="center">
          <div className="frame">
            <play.Image src="media/images/img_2.1.png" draggable={false} />
          </div>
        </div>
      </div>
    );
  }
}

export default InfoScreen;
