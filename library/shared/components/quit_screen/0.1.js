class QuitScreen extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'quit'
    };

  }

  okay() {
    play.trigger('quit');
  }

  cancel() {
    this.close();
    play.trigger('menuClose', {
      id: this.state.id,
    });
  }

  render() {
    return (
      <div id={this.state.id} className={'screen'+this.getClassNames()}>
        <div className="center">
          <div className="frame">
            <h2>Are you sure you<br/>want to quit?</h2>
            <h3>Your game progress will be saved</h3>
            <button className="quit-yes" onClick={this.okay.bind(this)}></button>
            <button className="quit-no" onClick={this.cancel.bind(this)}></button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuitScreen;
