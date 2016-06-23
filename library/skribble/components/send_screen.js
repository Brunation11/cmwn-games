import Selectable from '../../shared/components/selectable/0.1.js';

const classNameText = {
  yourMessageTo: 'your-message-to',
  isReady: 'is-ready',
  changeFriend: 'change-friend',
  bear: 'bear',
  gift: 'gift',
  header: 'header',
  username: 'username',
};

class InboxScreen extends skoash.Screen {
  constructor() {
    super();

    this.state = {
      id: 'send',
      load: true,
      recipient: {},
    };

    this.rightMenuList = [
      <li className="edit-right" onClick={this.goto.bind(this, 'canvas')}>
        <span />
      </li>,
      <li className="send" onClick={this.goto.bind(this, 'send')}>
        <span />
      </li>
    ];
  }

  updateData() {

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

  renderPrevButton() {
    return null;
  }

  renderNextButton() {
    return null;
  }

  renderContent() {
    var changeFriendClick = this.goto.bind(this, {
      index: 'friend',
      goto: 'send',
    });

    return (
      <div>
        <div className={classNameText.header}>
          <span className={classNameText.yourMessageTo} />
          <span className={classNameText.username}>{this.state.recipient.name}</span>
          <br/>
          <span className={classNameText.isReady} />
          <button className={classNameText.changeFriend} onClick={changeFriendClick} />
        </div>
        <div className={classNameText.bear} />
        <div className={classNameText.gift} />
        <Selectable className="menu right-menu" list={this.rightMenuList} />
      </div>
    );
  }
}

export default InboxScreen;
