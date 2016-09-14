
import _ from 'lodash';

import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import QuitScreen from 'shared/components/quit_screen/0.1';

//import 'shared/js/test-platform-integration';

class SeaTurtle extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: TitleScreen,
    };

    this.menus = {
      quit: QuitScreen,
    };

    this.state.data.screens = _.map(this.screens, () => ({}));
  }

  renderLoader() {
    return (
      <Loader />
    );
  }

  renderAssets() {
    return (
      <div>
        <skoash.Audio ref="bkg-1" type="background" src="media/audio/SO_1.1.mp3" />
      </div>
    );
  }

}

skoash.start(SeaTurtle, config.id);

import 'shared/js/google-analytics';
