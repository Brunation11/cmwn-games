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

import TitleScreen from './components/title_screen.js';
import BulbsScreen from './components/bulbs_screen.js';
import AudioScreen from './components/audio_screen.js';
import InfoScreen from './components/info_screen.js';
import FlipScreen from './components/flip_screen.js';

import '../shared/js/test-platform-integration';

class BeBright extends play.Game {
  constructor() {
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

play.start(BeBright,config.id);

import '../shared/js/google-analytics';
