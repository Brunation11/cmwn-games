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
import SaveMenu from './components/save_menu';

import 'shared/js/test-platform-integration';

const DEFAULT_PROFILE_IMAGE = 'https://changemyworldnow.com/ff50fa329edc8a1d64add63c839fe541.png';

class Skribble extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: TitleScreen,
      'menu': MenuScreen,
      friend: FriendScreen,
      canvas: CanvasScreen,
      'item-drawer': ItemDrawerScreen,
      inbox: InboxScreen,
      preview: PreviewScreen,
      send: SendScreen,
      sent: SentScreen,
      read: ReadScreen,
    };

    this.menus = {
      quit: QuitScreen,
      save: SaveMenu,
    };

    this.state.data.screens = _.map(this.screens, () => ({}));
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
      this.getData({name: 'getFriends'});
    }

    skoash.Game.prototype.ready.call(this);
  }

  getRules() {
    return this.refs['screen-canvas'].getData();
  }

  save(e, skramble) {
    /* eslint-disable camelcase */
    var friend_to, self = this;
    friend_to = self.state.recipient && self.state.recipient.user_id ? self.state.recipient.user_id : null;
    var skribble = {
      'version': config.version,
      ...self.state.skribbleData,
      friend_to,
      skramble,
      rules: self.getRules()
    };

    if (JSON.stringify(skribble) !== JSON.stringify(this.state.skribble)) {
      self.emit({
        name: 'saveSkribble',
        game: self.config.id,
        skribble,
      }).then(skribbleData => {
        self.setState({
          skribbleData,
          skribble
        });
      });
    }
    /* eslint-enable camelcase */
  }

  send() {
    this.save(null, true);

    this.refs['screen-canvas'].reset();
    this.goto({
      index: 'sent',
      recipient: this.state.recipient,
    });

    this.setState({
      recipient: null,
      skribbleData: null,
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
    case 'loadSkribble':
      return this.loadSkribble(opts);
    }

    return super.trigger(event, opts);
  }

  loadSkribble(opts) {
    this.setState({
      skribbleData: opts.message
    });
    this.goto({
      index: 'canvas',
      ...opts
    });
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
      var opts, currentOpts;
      opts = {
        data: {},
        callback: () => {
          this.refs['screen-canvas'].setMenu();
          this.refs['screen-item-drawer'].updateData();
        }
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
      currentOpts[pathArray[pathArray.length - 1]].items = {};

      if (d.items) {
        d.items.forEach(item => {
          if (item.asset_type === 'folder' && item.name) {
            self.getMedia(path + '/' + item.name);
          } else {
            currentOpts[pathArray[pathArray.length - 1]].items[item.name] = item;
          }
        });
      }

      self.updateData(opts);
    });
  }

  getData(opts) {
    var names = [
      'getFriends',
      'getFriend',
      'markAsRead',
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
        if (opts.name === 'getFriend') {
          data = {
            user: [
              data
            ]
          };
        }
        this.updateData({
          data,
          callback: opts.callback,
        });
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
    var src;

    if (recipient.src) {
      recipient.profile_image = recipient.src; // eslint-disable-line camelcase
      delete recipient.src;
    } else if (typeof recipient === 'string') {
      if (this.state.data && this.state.data.user) {
        this.state.data.user.some(friend => {
          if (friend.friend_id === recipient) {
            recipient = friend;
            return true;
          }
          return false;
        });
      }
    }

    if (typeof recipient === 'string') {
      this.getData({
        name: 'getFriend',
        'friend_id': recipient,
        callback: () => {
          this.addRecipient(recipient, cb);
        }
      });
    } else {
      src = recipient && recipient._embedded && recipient._embedded.image && recipient._embedded.image.url ?
        recipient._embedded.image.url :
        DEFAULT_PROFILE_IMAGE;
      this.setState({
        recipient: {
          'user_id': recipient.friend_id,
          name: recipient.username,
          src,
          // I need to get the flips earned back from the backend to do this.
          description: '',
          // description: friend.flips_earned + ' Flips Earned',
          'asset_type': 'friend',
        }
      }, cb);
    }
  }

  clickRecipient() {
    this.goto({
      index: 'friend'
    });
  }

  create() {
    if (this.state.recipient) {
      this.goto({index: 'canvas'});
    } else {
      this.goto({index: 'friend'});
    }
  }

  saveButton() {
    this.save();
    this.openMenu({id: 'save'});
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
          <button className="save" onClick={this.saveButton.bind(this)} />
          <button className="inbox" onClick={this.goto.bind(this, {index: 'inbox'})} />
          <button className="create" onClick={this.create.bind(this)} />
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
