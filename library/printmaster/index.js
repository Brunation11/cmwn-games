import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

// import 'shared/js/test-platform-integration';

class Printmaster extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: TitleScreen,
    };

    this.menus = {
      quit: QuitScreen,
    };

    window.game = this;
  }

  renderLoader() {
    return (
      <Loader />
    );
  }

  renderAssets() {
    return (
      <div>
        <skoash.Audio ref="bkg-0" type="background" src="media/_BKG/S_BKG_1.mp3" loop />
        <skoash.Image ref="img-bkg" className="hidden" src="media/_BKG/BKG_1.png" />
        <skoash.Audio ref="button" type="sfx" src="media/_Button/S_BU_1.mp3" />
        <skoash.Audio ref="screen-complete" type="sfx" src="media/_Button/S_BU_2.mp3" />
        <skoash.Audio ref="typing" type="sfx" src="media/S_3/S_3.1.mp3" />
      </div>
    );
  }

}

skoash.start(Printmaster, config.id);

import 'shared/js/google-analytics';
