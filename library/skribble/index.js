/**
 * Index script
 * @module
 */
import config from './config.game';

import Loader from '../shared/components/loader/0.1.js';

import iOSScreen from '../shared/components/ios_splash_screen/0.1.js';
import MenuScreen from './components/menu_screen.js';
import FriendScreen from './components/friend_screen.js';
import CanvasScreen from './components/canvas_screen.js';
import ItemDrawerScreen from './components/item_drawer_screen.js';

import QuitScreen from '../shared/components/quit_screen/0.1.js';

// import '../shared/js/test-platform-integration';

class Skribble extends play.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: MenuScreen,
      friend: FriendScreen,
      canvas: CanvasScreen,
      'item-drawer': ItemDrawerScreen,
    };

    this.menus = {
      quit: QuitScreen,
    };
  }

  save() {
    this.emit({
      name: 'save-skribble',
      game: this.config.id,
      skribble: {
        background: this.refs['screen-canvas'].refs.canvas.state.background,
        items: this.refs['screen-canvas'].refs.canvas.state.items,
        messages: this.refs['screen-canvas'].refs.canvas.state.messages,
      }
    });
  }

  passData(opts) {
    if (opts.name === 'add-item') {
      this.refs['screen-canvas'].addItem(opts.message);
      this.goto({ index: 'canvas' });
    }
  }

  renderLoader() {
    return (
      <Loader />
    );
  }

  renderMenu() {
    return (
      <div className="game-menu">
        <button className="save" onClick={this.save.bind(this)}>{'+'}</button>
        <button className="inbox" onClick={this.openMenu.bind(this, {id: 'quit'})}>{'#'}</button>
        <button className="help" onClick={this.openMenu.bind(this, {id: 'quit'})}>{'?'}</button>
        <button className="close" onClick={this.openMenu.bind(this, {id: 'quit'})}>{'X'}</button>
      </div>
    );
  }

}

play.start(Skribble, config.id);

import '../shared/js/google-analytics';
