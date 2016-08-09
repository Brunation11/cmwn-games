import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

//import 'shared/js/test-platform-integration';

class TwirlNSwirl extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: TitleScreen,
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

  renderAssets() {
    return (
      <div>
        
        
        <skoash.Audio ref="button" type="sfx" src="media/audio/button.mp3" />
        <skoash.Audio ref="screen-complete" type="sfx" src="media/audio/screen-complete.mp3" />
        <skoash.Audio ref="flush" type="sfx" src="media/S_6/S_6.2.mp3" />
      </div>
    );
  }

}

skoash.start(TwirlNSwirl, config.id);

import 'shared/js/google-analytics';
