import Canvas from '../../shared/components/canvas/0.1.js';
import Menu from '../../shared/components/menu/0.1.js';

import classNames from 'classnames';

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

  getData() {
    return this.refs.canvas.getItems();
  }

  addItem(message) {
    if (message) {
      this.setState({
        background: this.state.background ||
              message.type === 'background',
      });
      this.refs.canvas.addItem(message);
    }
  }

  open(opts) {
    if (this.refs && this.refs.menu) {
      this.refs.menu.deactivate();
    }

    if (opts.message) {
      this.setState({
        background: !!opts.message.background,
      });

      this.refs.canvas.setItems(opts.message);
    }

    play.Screen.prototype.open.call(this);
  }

  getContainerClasses() {
    return classNames({
      'canvas-container': true,
      BACKGROUND: this.state.background,
    });
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
        <play.Image className="hidden" src="media/_Buttons/SK_btn_friend.png" />
        <Menu ref={'menu'} items={this.state.menus} />
        <div className={this.getContainerClasses()}>
          <Canvas ref={'canvas'} />
        </div>
      </div>
    );
  }
}

export default CanvasScreen;
