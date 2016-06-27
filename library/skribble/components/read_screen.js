import Selectable from '../../shared/components/selectable/0.1.js';

const classNameText = {
  skribbleBox: 'skribble-box',
  box: 'box',
  leftMenu: 'menu left-menu',
  rightMenu: 'menu right-menu',
};

const refs = {
  box: 'box',
};

class ReadScreen extends skoash.Screen {
  constructor() {
    super();

    this.state = {
      id: 'read',
      load: true,
      recipient: {},
    };

    this.leftMenuList = [
      <li className="inbox" onClick={this.goto.bind(this, 'inbox')}>
        <span />
      </li>
    ];

    this.rightMenuList = [
      <li className="reply" onClick={this.goto.bind(this, 'canvas')}>
        <span />
      </li>
    ];
  }

  open() {
    var recipient = skoash.trigger('getState').recipient || {};

    this.setState({
      load: true,
      open: true,
      leave: false,
      close: false,
      recipient
    });

    this.start();
  }

  send() {
    skoash.trigger('pass-data', {
      name: 'send',
    });
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
        <skoash.Component ref={refs.box} className={classNameText.skribbleBox}>
          <skoash.Image src="media/tempthumb.png" />
          <div className={classNameText.box} />
        </skoash.Component>
        <Selectable className={classNameText.leftMenu} list={this.leftMenuList} />
        <Selectable className={classNameText.rightMenu} list={this.rightMenuList} />
      </div>
    );
  }
}

export default ReadScreen;
