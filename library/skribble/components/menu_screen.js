class MenuScreen extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'menu'
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
        <button onClick={alert.bind(null, 'This will be developed later.')}>{'Read'}</button>
        <button onClick={this.goto.bind(this, 'friend')}>{'Create'}</button>
      </div>
    );
  }
}

export default MenuScreen;
