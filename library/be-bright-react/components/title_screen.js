class Title extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'title'
    };

  }

  open() {
    this.setState({
      open: true,
      leave: false,
      close: false,
    });
    this.start();
  }

  startMedia() {
    var self = this;
    setTimeout(() => {
      self.complete();
      self.refs['buzz'].play();
    }, 3000);
  }

  renderContent() {
        // <Audio type="background" src="media/_BKG/S_BKG_1.mp3" loop />
    return (
      <div>
        <play.Audio ref="buzz" type="sfx" src="media/S_1/S_1.2.mp3" />
        <play.Image ref="bulb" className="bulb animated" src="media/S_1/img_1.2.png" />
        <play.Image ref="presenets" className="presents animated" src="media/S_1/img_1.1.png" />
        <play.Image ref="title" className="title animated" src="media/S_1/img_1.3.png" />
      </div>
    );
  }
}

export default Title;
