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
    setTimeout(() => {
      self.complete();
    }, 3000);
  }

  renderContent() {
    return (
      <div className={'title'}>
        <div className="center">
          <div className="content-group">
            <play.Image ref="title" className="animated" src="media/images/title.png" incomplete={true} />
            <div pl-component="sparkles"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
