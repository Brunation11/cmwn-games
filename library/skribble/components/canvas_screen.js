import Canvas from '../../shared/components/canvas/0.1.js';
import Menu from '../../shared/components/menu/0.1.js';

class CanvasScreen extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'canvas',
      load: true,
      menus: {},
    };

  }

  bootstrap() {
    var menus, state;

    play.Screen.prototype.bootstrap.call(this);

    state = play.trigger('getState');

    if (state && state.data && state.data.menus) {
      menus = state.data.menus;
      this.setState({
        menus,
      });
    }
  }

  addItem(message) {
    this.refs.canvas.addItem(message);
  }

  open(opts) {
    if (this.refs && this.refs.menu) {
      this.refs.menu.deactivate();
    }

    if (opts.message) {
      this.refs.canvas.setItems(opts.message);
    }

    play.Screen.prototype.open.call(this);
  }

  renderPrevButton() {
    // <button className={'prev-screen'} onClick={this.goto.bind(this, 1)}>{'<'}</button>
    return null;
  }

  renderNextButton() {
    return null;
  }

  renderContent() {
    return (
      <div>
        <play.Image className="hidden" src="media/_Frames/SK_frames_canvas.png" />
        <Menu ref={'menu'} items={this.state.menus} />
        <div className="canvas-container">
          <Canvas ref={'canvas'} />
        </div>
      </div>
    );
  }
}

export default CanvasScreen;
