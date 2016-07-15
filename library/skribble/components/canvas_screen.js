import Canvas from 'shared/components/canvas/0.1';
import Menu from 'shared/components/menu/0.1';
import Selectable from 'shared/components/selectable/0.1';
// import Reveal from 'shared/components/reveal/0.1';

import classNames from 'classnames';

class CanvasScreen extends skoash.Screen {
  constructor() {
    super();

    this.state = {
      load: true,
      menu: {},
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
    this.closeReveal = this.closeReveal.bind(this);
    this.setHasAssets = this.setHasAssets.bind(this);
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
              message.asset_type === 'background',
      });
      this.refs.canvas.addItem(message, () => {
        skoash.trigger('save');
      });
    }
  }

  setMenu() {
    var menu, state;
    state = skoash.trigger('getState');

    if (state && state.data && state.data.menu) {
      menu = state.data.menu;
      this.setState({
        menu,
      });
    }
  }

  open(opts) {
    var hasAssets, background;

    this.setMenu();

    if (this.refs && this.refs.menu) {
      this.refs.menu.deactivate();
    }

    if (opts.message) {
      hasAssets = true,
      background = !!opts.message.rules.background,

      this.refs.canvas.setItems(opts.message.rules);

      this.setState({
        hasAssets,
        background,
      });

      console.log(opts.message.friend_to);

      if (opts.message.friend_to) {
        skoash.trigger('passData', {
          name: 'add-recipient',
          message: {
            'friend_id': opts.message.friend_to
          }
        });
      }
    }

    skoash.Screen.prototype.open.call(this);
  }

  setValid(valid) {
    this.setState({
      valid
    });
  }

  setHasAssets(hasAssets) {
    this.setState({
      hasAssets
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

  closeReveal() {
    if (this.refs && this.refs.reveal) {
      this.refs.reveal.close();
    }
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

  renderContent() {
    return (
      <div>
        <skoash.Image className="hidden" src="media/_Frames/SK_frames_canvas.png" />
        <skoash.Image className="hidden" src="media/_Buttons/SK_btn_friend.png" />
        <Menu
          ref={'menu'}
          items={this.state.menu.items}
          level={0}
          lastLevel={1}
        />
        <div className={this.getContainerClasses()}>
          <Canvas
            ref={'canvas'}
            setValid={this.setValid}
            setHasAssets={this.setHasAssets}
          />
        </div>
        <Selectable className="menu right-menu" list={this.rightMenuList} />
      </div>
    );
    // move this back up below the Selectable when there is an instructional help video
    /*
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
                  <button
                    className="yes"
                    onClick={skoash.trigger.bind(null, 'openMenu', {id: 'help'})}
                  />
                  <button
                    className="no"
                    onClick={this.closeReveal}
                  />
                </div>
              </div>
            </li>
          ]}
        />
    */
  }
}

export default (
  <CanvasScreen
    id="canvas"
    hideNext
    hidePrev
  />
);
