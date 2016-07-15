/**
 * Index script
 * @module
 */
import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import MenuScreen from './components/menu_screen';
import FriendScreen from './components/friend_screen';
import CanvasScreen from './components/canvas_screen';
import ItemDrawerScreen from './components/item_drawer_screen';
import InboxScreen from './components/inbox_screen';
import SendScreen from './components/send_screen';
import SentScreen from './components/sent_screen';
import ReadScreen from './components/read_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

// import 'shared/js/test-platform-integration';

class Skribble extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: <iOSScreen />,
      1: TitleScreen,
      'menu': <MenuScreen />,
      friend: <FriendScreen />,
      canvas: <CanvasScreen />,
      'item-drawer': <ItemDrawerScreen />,
      inbox: <InboxScreen />,
      send: <SendScreen />,
      sent: <SentScreen />,
      read: <ReadScreen />,
    };

    this.menus = {
      quit: QuitScreen,
    };
  }

  goto(opts) {
    if (opts.index === 'send') {
      if (!this.state.recipient || !this.state.recipient.name) {
        opts.index = 'friend';
        opts.goto = 'send';
      }
    }

    skoash.Game.prototype.goto.call(this, opts);
  }

  save() {
    var skribble = this.refs['screen-canvas'].getData();
    skribble.recipient = this.state.recipient;

    this.emit({
      name: 'save-skribble',
      game: this.config.id,
      skribble,
    });
  }

  send() {
    var skribble, self = this;

    skribble = self.refs['screen-canvas'].getData();
    skribble.recipient = self.state.recipient;

    self.emit({
      name: 'send-skribble',
      game: self.config.id,
      skribble,
    }).then(response => {
      if (response.success) {
        self.refs['screen-canvas'].reset();
        self.setState({
          recipient: {}
        });
      }

      self.goto({
        index: 'sent',
        success: response.success,
        recipient: response.recipient,
      });
    });

  }

  passData(opts) {
    if (opts.name === 'add-item') {
      this.refs['screen-canvas'].addItem(opts.message);
      this.goto({ index: 'canvas' });
    } else if (opts.name === 'add-recipient') {
      this.addRecipient(opts.message, this.goto.bind(this, { index: opts.goto || 'canvas' }));
    } else if (opts.name === 'send') {
      this.send();
    }
  }

  addRecipient(recipient, cb) {
    if (recipient.src) {
      recipient.profile_image = recipient.src; // eslint-disable-line camelcase
      delete recipient.src;
    }
    this.setState({
      recipient
    }, cb);
  }

  clickRecipient() {
    this.goto({
      index: 'friend'
    });
  }

  renderLoader() {
    return (
      <Loader />
    );
  }

  renderAssets() {
    return (
      <div>
        <div className="background-1" />
        <div className="background-2" />
        <div className="background-3" />
        <div className="background-4" />
        <div className="background-5" />
        <div className="background-6" />
      </div>
    );
  }

  renderRecipient() {
    var recipient = this.state.recipient, content = [];

    if (!recipient) return;

    if (recipient.name) {
      content.push(<span className="name">{recipient.name}</span>);
    }

    if (recipient.profile_image) {
      content.push(<img className="profile-image" src={recipient.profile_image} />);
    }

    return content;
  }

  renderMenu() {
    return (
      <div>
        <div className="game-menu">
          <button className="save" onClick={this.save.bind(this)} />
          <button className="inbox" onClick={this.goto.bind(this, {index: 'inbox'})} />
          <button className="create" onClick={this.goto.bind(this, {index: 'friend'})} />
          <button className="help" onClick={this.openMenu.bind(this, {id: 'quit'})} />
          <button className="close" onClick={this.openMenu.bind(this, {id: 'quit'})} />
        </div>
        <ul className="menu recipient">
          <li onClick={this.clickRecipient.bind(this)}>
            <span>
              {this.renderRecipient()}
            </span>
          </li>
        </ul>
      </div>
    );
  }

}

skoash.start(Skribble, config.id);

import 'shared/js/google-analytics';
