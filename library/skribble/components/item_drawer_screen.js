import ItemDrawerCanvas from '../../shared/components/item_drawer_canvas/0.1.js';

class ItemDrawerScreen extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'item-drawer',
    };

  }

  bootstrap() {
    play.Screen.prototype.bootstrap.call(this);
  }

  renderPrevButton() {
    return (
      <button className={'prev-screen'} onClick={this.goto.bind(this, 1)}>{'<'}</button>
    );
  }

  renderNextButton() {
    return null;
  }

  renderContent() {
    return (
      <div>
        <ItemDrawerCanvas />
      </div>
    );
  }
}

export default ItemDrawerScreen;
