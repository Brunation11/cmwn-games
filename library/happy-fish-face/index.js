import _ from 'lodash';

import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import YouFeelScreen from './components/you_feel_screen';
import WaterPollutionScreen from './components/water_pollution_screen';
import HealthyWaterScreen from './components/healthy_water_screen';
import CleanWaterScreen from './components/clean_water_screen';
import BubbleUpScreen from './components/bubble_up_screen';
import MultiBubblesScreen from './components/multi_bubbles_screen';
import PollutesWaterScreen from './components/pollutes_water_screen';
import TrashScreen from './components/trash_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

//import 'shared/js/test-platform-integration';

class HappyFishFace extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: TitleScreen,
      //2: YouFeelScreen,
      //3: WaterPollutionScreen,
      //4: HealthyWaterScreen,
      //5: CleanWaterScreen,
      //6: BubbleUpScreen,
      //7: MultiBubblesScreen,
      //8: PollutesWaterScreen,
      2: TrashScreen,
      //10: FlipScreen,
    };

    this.menus = {
      quit: QuitScreen,
    };

    this.state.data.screens = _.map(this.screens, () => ({}));
  }

  getBackgroundIndex(index) {
    if (index < 6) return 0;
    if (index < 9) return 1;
    return 2;
  }

  getClassNames() {
    var classNames = super.getClassNames();
    var index = this.state.currentScreenIndex;
    if (index > 1 && index < 6) {
      return classNames + ' garbage';
    }
    return classNames;
  }

  renderLoader() {
    return (
      <Loader />
    );
  }

  renderAssets() {
    return (
      <div>
        <skoash.Audio ref="bkg-1" type="background" src="media/_audio/_BKG/HFF_SX_BKG_1.mp3" loop />
        <skoash.Audio ref="bkg-2" type="background" src="media/_audio/_BKG/HFF_SX_BKG_2.mp3" />
        <skoash.Audio ref="bkg-3" type="background" src="media/_audio/_BKG/HFF_SX_BKG_3.mp3" loop />
        <skoash.Audio ref="button" type="sfx" src="media/_audio/_buttons/HFF_SX_BU1.mp3" />
        <skoash.Audio ref="screen-complete" type="sfx" src="media/_audio/_buttons/HFF_SX_BU2.mp3" />
        <skoash.Image ref="multibubbles-hidden" className="hidden" src="media/_images/_S_MultiBubbles/img_7.3.png" />
        <skoash.Image ref="trash-hidden" className="hidden" src="media/_images/_S_Trash/img_9.2.png" />
        <div className="background garbage"></div>
      </div>
    );
  }
}

skoash.start(HappyFishFace, config.id);

import 'shared/js/google-analytics';
