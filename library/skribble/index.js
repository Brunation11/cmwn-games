/**
 * Index script
 * @module
 */
import config from './config.game';

import Loader from '../shared/components/loader/0.1.js';

import iOSScreen from '../shared/components/ios_splash_screen/0.1.js';
// import SampleScreen from './components/sample_screen.js';
import MenuScreen from './components/menu_screen.js';
import FriendScreen from './components/friend_screen.js';
import CanvasScreen from './components/canvas_screen.js';
import ItemDrawerScreen from './components/item_drawer_screen.js';
import InboxScreen from './components/inbox_screen.js';

import QuitScreen from '../shared/components/quit_screen/0.1.js';

import '../shared/js/test-platform-integration';

class Skribble extends play.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      // 1: SampleScreen,
      1: MenuScreen,
      friend: FriendScreen,
      canvas: CanvasScreen,
      'item-drawer': ItemDrawerScreen,
      inbox: InboxScreen,
    };

    this.menus = {
      quit: QuitScreen,
    };
  }

  save() {
    var skribble = this.refs['screen-canvas'].refs.getData();
    skribble.recipient = this.state.recipient;

    this.emit({
      name: 'save-skribble',
      game: this.config.id,
      skribble,
    });
  }

  passData(opts) {
    if (opts.name === 'add-item') {
      this.refs['screen-canvas'].addItem(opts.message);
      this.goto({ index: 'canvas' });
    } else if (opts.name === 'add-recipient') {
      this.addRecipient(opts.message);
      this.goto({ index: 'canvas' });
    }
  }

  addRecipient(recipient) {
    this.setState({
      recipient
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
      </div>
    );
  }

  renderRecipient() {
    var recipient = this.state.recipient, content = [];

    if (!recipient) return;

    if (recipient.name) {
      content.push(<span className="name">{recipient.name}</span>);
    }

    if (recipient.src) {
      content.push(<img className="profile-image" src={recipient.src} />);
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
          <li>
            <span>
              {this.renderRecipient()}
            </span>
          </li>
        </ul>
      </div>
    );
  }

}

play.start(Skribble, config.id);

import '../shared/js/google-analytics';
