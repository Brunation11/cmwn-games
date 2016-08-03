import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import InfoNoWaterScreen from './components/info_no_water_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

// import 'shared/js/test-platform-integration';

class DroughtOut extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: TitleScreen,
      2: InfoNoWaterScreen,
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

  getBackgroundIndex(screenIndex) {
    if (screenIndex < 2) return 0;
    if (screenIndex > 1 && screenIndex < 5) return 1;
  }

  renderAssets() {
    return (
      <div>
        <skoash.Audio ref="bkg-0" type="background" src="media/S_1/S_1.1.mp3" />
        <skoash.Audio ref="bkg-1" type="background" src="media/_BKG/S_BKG_1.mp3" />
        <skoash.Audio ref="button" type="sfx" src="media/_Buttons/S_BU_1.mp3" />
        <skoash.Audio ref="screen-complete" type="sfx" src="media/_Buttons/S_BU_2.mp3" />
        <skoash.Image ref="bkg-image-1" className="hidden" src="media/_BKG/BKG_1.png" />
        <skoash.Image ref="bkg-image-2" className="hidden" src="media/_BKG/BKG_2.png" />
        <skoash.Image ref="bkg-image-3" className="hidden" src="media/_BKG/BKG_3.png" />
        <skoash.Image ref="bkg-image-4" className="hidden" src="media/_BKG/BKG_4.png" />
        <skoash.Image ref="bkg-image-5" className="hidden" src="media/_BKG/BKG_5.png" />
        <div className="background sun"></div>
        <div className="background rocks"></div>
        <div className="background cactus"></div>
        <div className="background arch"></div>
        <div className="background mountains"></div>
      </div>
    );
  }

}

skoash.start(DroughtOut, config.id);

import 'shared/js/google-analytics';
