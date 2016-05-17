class Title extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'title'
    };

  }

  start() {
    this.bootstrap();

    this.setState({
      started: true,
    });

    Object.keys(this.refs).map(key => {
      if (typeof this.refs[key].start === 'function') {
        this.refs[key].start();
      }
    });

    this.startMedia();
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
    this.refs['buzz'].play();
    setTimeout(() => {
      self.complete();
    }, 3000);
  }

  renderContent() {
    return (
      <div>
        <play.Image ref="background" className="hidden" src="media/_BKG/BKG_1.png" />
        <play.Audio ref="buzz" type="sfx" src="media/S_1/S_1.2.mp3" delay={3000} />
        <play.Image ref="bulb" className="bulb animated" src="media/S_1/img_1.2.png" />
        <play.Image ref="presenets" className="presents animated" src="media/S_1/img_1.1.png" />
        <play.Image ref="title" className="title animated" src="media/S_1/img_1.3.png" />
      </div>
    );
  }
}

export default Title;
