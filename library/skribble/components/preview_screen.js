import Canvas from 'shared/components/canvas/0.1';
import Selectable from '../../shared/components/selectable/0.1.js';

const classNameText = {
  skribbleBox: 'skribble-box',
  box: 'box',
  leftMenu: 'menu left-menu',
  rightMenu: 'menu right-menu',
  sender: 'menu recipient sender',
};

const refs = {
  box: 'box',
  canvas: 'canvas'
};

class PreviewScreen extends skoash.Screen {
  constructor() {
    super();

    this.state = {
      id: 'preview',
      load: true,
      opts: {},
    };

    this.leftMenuList = [
      <li className="edit" onClick={this.goto.bind(this, 'canvas')}>
        <span />
      </li>,
    ];

    this.rightMenuList = [
      <li className="send" onClick={this.goto.bind(this, 'send')}>
        <span />
      </li>
    ];
  }

  reply() {
    skoash.trigger('passData', {
      name: 'add-recipient',
      message: this.state.message.user,
    });
  }

  renderPrevButton() {
    return null;
  }

  renderNextButton() {
    return null;
  }

  renderSender() {
    var message = this.state.message, content = [];

    if (!message) return;

    if (message.user.name) {
      content.push(<span className="name">{message.user.name}</span>);
    }

    if (message.user.profile_image) {
      content.push(<img className="profile-image" src={message.user.profile_image} />);
    }

    return content;
  }

  open(opts) {
    var rules = skoash.trigger('getRules');
    this.refs[refs.box].refs[refs.canvas].setItems(rules);

    skoash.Screen.prototype.open.call(this, opts);
  }

  renderCanvas() {
    return <div />;
  }

  renderContent() {
    return (
      <div>
        <ul className={classNameText.sender}>
          <li>
            <span>
              {this.renderSender()}
            </span>
          </li>
        </ul>
        <skoash.Component ref={refs.box} className={classNameText.skribbleBox}>
          <Canvas ref={refs.canvas} />
          <div className={classNameText.box} />
        </skoash.Component>
        <Selectable className={classNameText.leftMenu} list={this.leftMenuList} />
        <Selectable className={classNameText.rightMenu} list={this.rightMenuList} />
      </div>
    );
  }
}

export default PreviewScreen;
