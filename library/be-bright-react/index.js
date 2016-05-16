/**
 * Index script
 * @module
 */
import config from './config.game';

// import '../../..//shared/js/screen-ios-splash';
// import './components/multiple-choice/behavior';
// import './components/reveal/behavior';
// import './components/screen-basic/behavior';
// import './components/screen-quit/behavior';
// import './components/selectable-reveal/behavior';
// import './components/selectable/behavior';
// import './components/title/behavior';
// import './components/video/behavior';

import Loader from '../shared/components/loader/0.1.js';

import iOSScreen from '../shared/components/ios_splash_screen/0.1.js';
import TitleScreen from './components/title_screen.js';
import BulbsScreen from './components/bulbs_screen.js';
import InfoScreen from './components/info_screen.js';
import FlipScreen from './components/flip_screen.js';

// import '../shared/js/test-platform-integration';

class BeBright extends play.Game {
  constructor() {
    super(config);

    this.screens = [
      iOSScreen,
      TitleScreen,
      BulbsScreen,
      InfoScreen,
      FlipScreen,
    ];
  }

  componentWillMount() {
    play.Game.prototype.componentWillMount.call(this);


  }

  renderLoader() {
    return (
      <Loader />
    );
  }

  renderAssets() {
    return (
      <div>
        <play.Audio ref='bkg-1' type="background" src="media/_BKG/_S_BKG_1.mp3" loop />
      </div>
    );
  }

}

play.start(BeBright,config.id);

import '../shared/js/google-analytics';
