import _ from 'lodash';

import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

// import 'shared/js/test-platform-integration';

class TheeDWorld extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: TitleScreen,
      2: FlipScreen,
    };

    this.state.data.screens = _.map(this.screens, () => ({}));

    this.menus = {
      quit: QuitScreen,
    };
  }

  getBackgroundIndex(index) {
    switch (true) {
    case index === 3: return 1;
    default: return 0;
    }
  }

  renderLoader() {
    return (
      <Loader />
    );
  }

  renderAssets() {
    return (
      <div>
      </div>
    );
        // <skoash.Audio ref="bkg-1" type="background" src="media/_BKG/S_BKG_1.mp3" loop />
        // <skoash.Audio ref="bkg-2" type="background" src="media/_BKG/S_BKG_2.mp3" loop />
        // <skoash.Audio ref="bkg-3" type="background" src="media/_BKG/S_BKG_3.mp3" loop />
        // <skoash.Audio ref="bkg-4" type="background" src="media/_BKG/S_BKG_4.mp3" loop />
        // <skoash.Audio ref="bkg-5" type="background" src="media/S_12/S_12.1.mp3" />
        // <skoash.Audio ref="bkg-6" type="background" src="media/S_22/S_22.1.mp3" />
        // <skoash.Image ref="img-bkg" className="hidden" src="media/_BKG/BKG_1.png" />
        // <skoash.Audio ref="button" type="sfx" src="media/_Button/S_BU_1.mp3" />
        // <skoash.Audio ref="screen-complete" type="sfx" src="media/_Button/S_BU_2.mp3" />
  }

}

skoash.start(TheeDWorld, config.id);

import 'shared/js/google-analytics';
