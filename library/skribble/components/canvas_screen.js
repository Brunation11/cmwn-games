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

    this.refs.canvas.setItems(opts.message);

    play.Screen.prototype.open.call(this);
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
        <Menu ref={'menu'} items={this.state.menus} />
        <Canvas ref={'canvas'} />
      </div>
    );
  }
}

export default CanvasScreen;
