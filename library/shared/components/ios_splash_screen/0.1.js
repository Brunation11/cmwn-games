class iOSSplashScreen extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'ios-splash',
    }
  }

  startGame() {
    console.log("startGame");
    if(!this.state.complete || this.state.leaving) return;
    this.setState({
      leaving: true,
    });
    setTimeout(
      this.goto.bind(this,this.props.index+1),
      2500
    );
  }

  renderContent() {
    if (!this.state.load) {
      return null;
    }

    return (
      <div>
        <play.Image className="hidden" src="../shared/images/ios_start_ball.png" />
        <play.Image className="hidden" src="../shared/images/ios_start_ball_anim.gif" />
        <div ref="ball" className="ball" onAnimationEnd={this.complete.bind(this)} onClick={this.startGame.bind(this)}></div>
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
