class MenuScreen extends skoash.Screen {
  renderContent() {
    return (
      <div>
        <skoash.Image className="hidden" src="media/_Background/SK_BKG_1.png" />
        <skoash.Image className="otter" src="media/_Otter/Otter_Static_GreetingOne.png" />
        <div className="bubble">
          Hi there!<br/>
          What would you<br/>
          like to do today?
        </div>
        <div className="buttons">
          <button className="make" onClick={this.goto.bind(this, 'friend')} />
          <button className="read" onClick={this.goto.bind(this, 'inbox')} />
        </div>
      </div>
    );
  }
}

export default (
  <MenuScreen
    id="menu"
    hidePrev
    hideNext
  />
);
