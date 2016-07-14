/**
 * Index script
 * @module
 */

import _ from 'lodash';

import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import MenuScreen from './components/menu_screen';
import FriendScreen from './components/friend_screen';
import CanvasScreen from './components/canvas_screen';
import ItemDrawerScreen from './components/item_drawer_screen';
import InboxScreen from './components/inbox_screen';
import PreviewScreen from './components/preview_screen';
import SendScreen from './components/send_screen';
import SentScreen from './components/sent_screen';
import ReadScreen from './components/read_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

import 'shared/js/test-platform-integration';

class Skribble extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: TitleScreen,
      'menu': <MenuScreen />,
      friend: <FriendScreen />,
      canvas: <CanvasScreen />,
      'item-drawer': <ItemDrawerScreen />,
      inbox: <InboxScreen />,
      preview: <PreviewScreen />,
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

  ready() {
    if (!this.state.ready) {
      this.getMedia();
    }

    skoash.Game.prototype.ready.call(this);
  }

  getRules() {
    return this.refs['screen-canvas'].getData();
  }

  save(skramble) {
    var self = this;
    var skribble = {
      'version': config.version,
      'friend_to': self.state.recipient.user_id,
      ...self.state.skribbleData,
      skramble,
      rules: self.getRules()
    };

    self.emit({
      name: 'saveSkribble',
      game: self.config.id,
      skribble,
    }).then(skribbleData => {
      self.setState({skribbleData});
    });
  }

  send() {
    this.save(true);

    this.refs['screen-canvas'].reset();
    this.goto({
      index: 'sent',
      recipient: this.state.recipient,
    });

    this.setState({
      recipient: {}
    });
  }

  trigger(event, opts) {
    switch (event) {
    case 'save':
      return this.save();
    case 'getMedia':
      return this.getMedia(opts.path);
    case 'getRules':
      return this.getRules();
    }

    return skoash.Game.prototype.trigger.call(this, event, opts);
  }

  getMedia(path) {
    var pathArray, self = this;

    path = path || 'skribble/menu';
    pathArray = path.split('/');
    pathArray.shift();

    return self.emit({
      name: 'getMedia',
      path
    }).then(d => {
      var opts, currentOpts, hasFolders;
      opts = {
        data: {}
      };
      currentOpts = opts.data;

      pathArray.forEach((key, index) => {
        currentOpts[key] = {
          items: {}
        };
        if (index !== pathArray.length - 1) {
          currentOpts = currentOpts[key].items;
        }
      });

      currentOpts[pathArray[pathArray.length - 1]] = _.clone(d);
      hasFolders = currentOpts[pathArray[pathArray.length - 1]].items &&
        currentOpts[pathArray[pathArray.length - 1]].items[0] &&
        currentOpts[pathArray[pathArray.length - 1]].items[0].asset_type === 'folder';

      if (hasFolders) {
        currentOpts[pathArray[pathArray.length - 1]].items = {};

        if (d.items) {
          d.items.forEach(item => {
            if (item.asset_type === 'folder' && item.name) {
              self.getMedia(path + '/' + item.name);
            }
          });
        }
      }

      self.updateData(opts);
    });
  }

  getData(opts) {
    var names = [
      'getFriends',
    ];

    if (names.indexOf(opts.name) === -1) {
      opts.name = 'getData';
    }

    return this.emit(opts).then(data => {
      if (opts.status) {
        data[opts.status] = data.skribble;
        delete data.skribble;
        this.updateData({
          data
        });
      } else {
        this.updateData({data});
      }
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
          <button className="help" onClick={this.openMenu.bind(this, {id: 'help'})} />
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
