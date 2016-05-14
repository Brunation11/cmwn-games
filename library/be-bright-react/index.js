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

import TitleScreen from './screens/title_screen.js';
import BulbsScreen from './screens/bulbs_screen.js';
import AudioScreen from './screens/audio_screen.js';
import InfoScreen from './screens/info_screen.js';
import FlipScreen from './screens/flip_screen.js';

import '../shared/js/test-platform-integration';

class BeBright extends play.Game {
  constructor(config) {
    super(config);

    this.screens = [
      TitleScreen,
      BulbsScreen,
      AudioScreen,
      InfoScreen,
      FlipScreen,
    ];
  }

}

play.start(BeBright.bind(this,config),config.id);

import '../shared/js/google-analytics';
