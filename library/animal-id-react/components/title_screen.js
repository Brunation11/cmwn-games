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

  renderDivs(number) {
    var array = new Array(number).fill(null);
    return array.map((div, index) => {
      return <div key={index}></div>;
    });
  }

  renderContent() {
    return (
      <div className={'title'}>
        <div className="center">
          <div className="content-group">
            <play.Image ref="title" className="animated" src="media/images/title.png" incomplete={true} />
            <div className="sparkles">
              {this.renderDivs(32)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
