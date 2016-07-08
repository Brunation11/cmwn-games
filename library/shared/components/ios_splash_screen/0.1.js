class iOSSplashScreen extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'ios-splash',
    }
  }

  startGame() {
    var self = this;

    if(!this.state.complete || this.state.leaving) return;

    setTimeout(() => {
      self.goto(this.props.index+1);
    }, 2500);

    this.setState({
      leaving: true,
    });
  }

  open() {
    var self = this;

    this.setState({
      open: true,
      leave: false,
      close: false,
    });

    setTimeout(() => {
      self.start();
    }, 250);

    setTimeout(() => {
      self.complete();
    }, 6250);
  }

  renderContent() {
    var self = this;

    if (!this.state.load) {
      return null;
    }

    return (
      <div>
        <play.Image className="hidden" src="../shared/images/ios_start_ball.png" />
        <play.Image className="hidden" src="../shared/images/ios_start_ball_anim.gif" />
        <div ref="ball" className="ball" onAnimationEnd={() => {console.log('onAnimationEnd'); self.complete()}} onClick={this.startGame.bind(this)}></div>
      </div>
    );
  }

  renderPrevButton() {
    return null;
  }

  renderNextButton() {
    return null;
  }
}

export default iOSSplashScreen;
