class MenuScreen extends skoash.Screen {
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
        <skoash.Image className="hidden" src="media/_Background/SK_BKG_1.png" />
        <div className="buttons">
          <button className="make" onClick={this.goto.bind(this, 'friend')} />
          <button className="read" onClick={this.goto.bind(this, 'inbox')} />
        </div>
      </div>
    );
  }
}

export default MenuScreen;
