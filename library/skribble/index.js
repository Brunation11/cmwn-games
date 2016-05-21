/**
 * Index script
 * @module
 */
import config from './config.game';

import Loader from '../shared/components/loader/0.1.js';

import iOSScreen from '../shared/components/ios_splash_screen/0.1.js';
import SampleScreen from './components/sample_screen.js';
import CanvasScreen from './components/canvas_screen.js';

import QuitScreen from '../shared/components/quit_screen/0.1.js';

// import '../shared/js/test-platform-integration';

class Skribble extends play.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: SampleScreen,
      'canvas': CanvasScreen,
    };

    this.menus = {
      quit: QuitScreen,
    };
  }

  renderLoader() {
    return (
      <Loader />
    );
  }

}

play.start(Skribble,config.id);

import '../shared/js/google-analytics';
