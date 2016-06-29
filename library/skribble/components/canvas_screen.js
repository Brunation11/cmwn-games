import Canvas from 'shared/components/canvas/0.1';
import Menu from 'shared/components/menu/0.1';
import Selectable from 'shared/components/selectable/0.1';
import Reveal from 'shared/components/reveal/0.1';

import classNames from 'classnames';

class CanvasScreen extends skoash.Screen {
  constructor() {
    super();

    this.state = {
      id: 'canvas',
      load: true,
      menus: {},
      valid: true,
    };

    this.rightMenuList = [
      <li className="preview" onClick={this.preview.bind(this)}>
        <span />
      </li>,
      <li className="send" onClick={this.send.bind(this)}>
        <span />
      </li>
    ];

    this.setValid = this.setValid.bind(this);
  }

  bootstrap() {
    var menus, state;

    skoash.Screen.prototype.bootstrap.call(this);

    state = skoash.trigger('getState');

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

  reset() {
    this.refs.canvas.reset();
    this.setState({
      background: false,
      hasAssets: false,
    });
  }

  addItem(message) {
    if (message) {
      this.setState({
        hasAssets: true,
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
        hasAssets: true,
        background: !!opts.message.background,
      });

      this.refs.canvas.setItems(opts.message);
    }

    skoash.Screen.prototype.open.call(this);
  }

  setValid(valid) {
    this.setState({
      valid
    });
  }

  send() {
    if (!this.state.valid) return;
    this.goto('send');
  }

  preview() {
    if (!this.state.valid) return;
    this.goto('preview');
  }

  getContainerClasses() {
    return classNames({
      'canvas-container': true,
      BACKGROUND: this.state.background,
    });
  }

  getClassNames() {
    return classNames({
      'HAS-ASSETS': this.state.hasAssets,
      'INVALID': !this.state.valid,
    }, skoash.Screen.prototype.getClassNames.call(this));
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
        <skoash.Image className="hidden" src="media/_Frames/SK_frames_canvas.png" />
        <skoash.Image className="hidden" src="media/_Buttons/SK_btn_friend.png" />
        <Menu ref={'menu'} items={this.state.menus} />
        <div className={this.getContainerClasses()}>
          <Canvas
            ref={'canvas'}
            setValid={this.setValid}
          />
        </div>
        <Selectable className="menu right-menu" list={this.rightMenuList} />
        <Reveal
          ref="reveal"
          openOnStart="0"
          list={[
            <li>
              <skoash.Image className="otter" src={'media/_Otter/Otter_Static_GreetingTwo.png'} />
              <div className="bubble">
                Welcome to your canvas!<br/><br/>
                Would you like me<br/>
                to show you around?
                <div className="buttons">
                </div>
              </div>
            </li>
          ]}
        />
      </div>
    );
  }
}

export default CanvasScreen;
