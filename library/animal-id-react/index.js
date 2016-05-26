/**
 * Index script
 * @module
 */
import config from './config.game';

import Loader from '../shared/components/loader/0.1.js';

import iOSScreen from '../shared/components/ios_splash_screen/0.1.js';
import TitleScreen from './components/title_screen.js';
import InfoWelcomeScreen from './components/info_welcome_screen.js';
import IDCarnivoreScreen from './components/id_carnivore_screen.js';
import FlipScreen from './components/flip_screen.js';

import QuitScreen from '../shared/components/quit_screen/0.1.js';

// import '../shared/js/test-platform-integration';

class AnimalID extends play.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: TitleScreen,
      2: InfoWelcomeScreen,
      3: IDCarnivoreScreen,
      // 3: FlipScreen,
    };

    this.menus = {
      quit: QuitScreen,
    };
  }

  componentWillMount() {
    play.Game.prototype.componentWillMount.call(this);


  }

  getBackgroundIndex() {
    return 0;
  }

  renderLoader() {
    return (
      <Loader />
    );
  }

  renderAssets() {
    return (
      <div>
        <play.Audio ref="bkg-1" type="background" src="media/audio/title.mp3" />
        <play.Audio ref="bkg-2" type="background" src="media/audio/background/id.mp3" preload="none" loop />
        <play.Audio ref="screen-complete" type="sfx" src="media/audio/complete.mp3" />
        <play.Audio ref="button" type="sfx" src="media/audio/button.mp3" />
      </div>
    );
  }

}

play.start(AnimalID, config.id);

import '../shared/js/google-analytics';
