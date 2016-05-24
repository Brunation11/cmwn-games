class FriendScreen extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'friends'
    };

  }

  renderPrevButton() {
    return null;
  }

  renderNextButton() {
    return null;
  }

  renderContent() {
    return (
      <div>
        <h2>select a friend</h2>
        <button onClick={this.goto.bind(this, 'canvas')}>{'Select'}</button>
        <button onClick={this.goto.bind(this, 1)}>{'Cancel'}</button>
      </div>
    );
  }
}

export default FriendScreen;
