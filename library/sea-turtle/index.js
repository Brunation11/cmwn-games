
import _ from 'lodash';

import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import VideoScreen from './components/video_screen';
import InfoGlobeScreen from './components/info_globe_screen';
import QuitScreen from 'shared/components/quit_screen/0.1';

//import 'shared/js/test-platform-integration';

class SeaTurtle extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: TitleScreen,
      //2: VideoScreen,
      2: InfoGlobeScreen,
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

  getBackgroundIndex(index) {
    if (index < 2) return 0;
    if (index > 2) return 1;
    return -1;
  }

  renderAssets() {
    return (
      <div>
        <skoash.Audio ref="bkg-1" type="background" src="media/audio/SO_1.1.mp3" />
        <skoash.Audio ref="bkg-2" type="background" src="media/audio/background/1.mp3" loop />
        <skoash.Audio ref="button" type="sfx" src="media/audio/button.mp3" />
        <skoash.Audio ref="screen-complete" type="sfx" src="media/audio/button-next-activated.mp3" />
      </div>
    );
  }

}

skoash.start(SeaTurtle, config.id);

import 'shared/js/google-analytics';
