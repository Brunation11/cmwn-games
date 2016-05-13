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

import Title from './screens/title-screen.js';
import Info from './screens/info-screen.js';
import Flip from './screens/flip-screen.js';

import '../shared/js/test-platform-integration';

class BeBright extends play.Game {
  constructor(config) {
    super();

    this.screens = [
      Title,
      Info,
      Flip,
    ];
  }

}

play.start(BeBright,config.id);

import '../shared/js/google-analytics';
