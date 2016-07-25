import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import MatchScreen from './components/match_screen';
// import AudioScreen from './components/audio_screen';
// import TitleScreen from './components/title_screen';
// import BulbsScreen from './components/bulbs_screen';
// import PigScreen from './components/pig_screen';
// import SwitchesScreen from './components/switches_screen';
// import InfoScreen from './components/info_screen';
// import VideoScreen from './components/video_screen';
// import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

// import 'shared/js/test-platform-integration';

class Examples extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: MatchScreen,
      // 1: AudioScreen,
      // 1: TitleScreen,
      // 2: BulbsScreen,
      // 3: PigScreen,
      // 4: SwitchesScreen,
      // 5: InfoScreen,
      // 6: VideoScreen,
      // 7: FlipScreen,
    };

    this.menus = {
      quit: <QuitScreen />,
    };
  }

  renderLoader() {
    return (
      <Loader />
    );
  }

  renderAssets() {
        // <skoash.Audio ref="bkg-1" type="background" src="media/_BKG/S_BKG_1.mp3" loop />
    return (
      <div>
        <skoash.Audio ref="button" type="sfx" src="media/_Buttons/S_BU_1.mp3" />
        <skoash.Audio ref="screen-complete" type="sfx" src="media/_Buttons/S_BU_2.mp3" />
        <skoash.Audio ref="correct" type="sfx" src="media/_Buttons/S_BU_3.mp3" />
      </div>
    );
  }

}

skoash.start(Examples, config.id);

import 'shared/js/google-analytics';
