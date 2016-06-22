import Selectable from '../../shared/components/selectable/0.1.js';

const classNameText = {
  yourMessageTo: 'your-message-to',
  isReady: 'is-ready',
  changeFriend: 'change-friend',
  bear: 'bear',
  gift: 'gift',
};

class InboxScreen extends skoash.Screen {
  constructor() {
    super();

    this.state = {
      id: 'send',
      load: true,
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
    var self = this;

    skoash.trigger('getData', {
      categories: 'inbox',
    }).then(data => {
      self.updateData.call(self, data);
    });

    this.setState({
      load: true,
      open: true,
      leave: false,
      close: false,
    });

    setTimeout(() => {
      if (!self.state.started) {
        self.start();
      }
    }, 250);
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
        <span className={classNameText.yourMessageTo} />
        <span></span>
        <span className={classNameText.isReady} />
        <button className={classNameText.changeFriend} />
        <div className={classNameText.bear} />
        <div className={classNameText.gift} />
        <Selectable className="menu right-menu" list={this.rightMenuList} />
      </div>
    );
  }
}

export default InboxScreen;
