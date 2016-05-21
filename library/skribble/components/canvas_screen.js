import ItemDrawerCanvas from '../../shared/components/item_drawer_canvas/0.1.js';

class CanvasScreen extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'canvas'
    };

  }

  renderPrevButton() {
    return (
      <button className='prev-screen' onClick={this.goto.bind(this,1)}>{'<'}</button>
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

export default CanvasScreen;
