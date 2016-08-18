import _ from 'lodash';

import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import ExcelScreen from './components/excel_screen';
import RolesScreen from './components/roles_screen';
import LookOutScreen from './components/look_out_screen';
import VideoScreen from './components/video_screen';
import FeelScreen from './components/feel_screen';
import MoveScreen from './components/move_screen';
import Video2Screen from './components/video_2_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

import 'shared/js/test-platform-integration';

class MeerkatMania extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: TitleScreen,
      2: ExcelScreen,
      3: RolesScreen,
      4: LookOutScreen,
      5: VideoScreen,
      6: FeelScreen,
      7: MoveScreen,
      8: Video2Screen,
      9: FlipScreen,
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
        <skoash.Audio ref="bkg-1" type="background" src="media/_BKG/S_BKG_1.mp3" loop />
        <skoash.Audio ref="bkg-2" type="background" src="media/_BKG/S_BKG_2.mp3" loop />
        <skoash.Audio ref="bkg-3" type="background" src="media/S_13/S_13.1.mp3" />
        <skoash.Audio ref="button" type="sfx" src="media/_Buttons/S_BU_1.mp3" />
        <skoash.Audio ref="close" type="sfx" src="media/_Buttons/S_Close_1.mp3" />
        <skoash.Image className="hidden" src="media/_BKG/BKG_1.png" />
        <skoash.Image className="hidden" src="media/_BKG/BKG_2.png" />
        <skoash.Image className="hidden" src="media/_BKG/BKG_4.png" />
        <skoash.Image className="hidden" src="media/_BKG/BKG_5.png" />
        <skoash.Image className="hidden" src="media/_BKG/BKG_6.png" />
        <skoash.Image className="hidden" src="media/_BKG/BKG_7.png" />
        <skoash.Image className="hidden" src="media/_BKG/BKG_8.png" />
        <div className="background default" />
        <div className="background excel" />
        <div className="background look-out" />
        <div className="background feel" />
        <div className="background movie" />
        <div className="background upload" />
        <div className="background flip" />
      </div>
    );
  }

}

skoash.start(MeerkatMania, config.id);

import 'shared/js/google-analytics';
