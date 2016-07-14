import Selectable from '../../shared/components/selectable/0.1.js';

const classNameText = {
  yourMessageTo: 'your-message-to',
  isReady: 'is-ready',
  changeFriend: 'change-friend',
  character: 'character',
  gift: 'gift',
  header: 'header',
  username: 'username',
};

class SendScreen extends skoash.Screen {
  constructor() {
    super();

    this.state = {
      load: true,
      recipient: {},
    };

    this.rightMenuList = [
      <li className="edit-right" onClick={this.goto.bind(this, 'canvas')}>
        <span />
      </li>,
      <li className="send" onClick={this.send}>
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
        <div className={classNameText.character}>
          <skoash.Image className="otter" src="media/_Otter/Otter_Static_GreetingTwo.png" />
          <div className="bubble">
            Are you sure<br/>
            you are ready to<br/>
            send your message?
          </div>
        </div>
        <div className={classNameText.gift} />
        <Selectable className="menu right-menu" list={this.rightMenuList} />
      </div>
    );
  }
}

export default (
  <SendScreen
    id="send"
    showNext={false}
    showPrev={false}
  />
);
