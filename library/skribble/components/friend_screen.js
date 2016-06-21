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
        <div className="header" />
        <div className="buttons">
          <button className="select" onClick={this.goto.bind(this, 'canvas')} />
          <button className="cancel" onClick={this.goto.bind(this, 1)} />
        </div>
      </div>
    );
  }
}

export default FriendScreen;
