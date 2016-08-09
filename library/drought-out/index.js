import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import ThinkScreen from './components/think_screen';
import InfoNoWaterScreen from './components/info_no_water_screen';
import InfoImpactScreen from './components/info_impact_screen';
import InfoNeedWaterScreen from './components/info_need_water_screen';
import InfoUseWaterScreen from './components/info_use_water_screen';
import BalloonsScreen from './components/balloons_screen';
import InfoEnvironmentScreen from './components/info_environment_screen';
import InfoEnvironmentEffectsScreen from './components/info_environment_effects_screen';
import EnvironmentEffectsScreen from './components/environment_effects_screen';
import InfoHumanEffectsScreen from './components/info_human_effects_screen';
import HumanEffectsScreen from './components/human_effects_screen';
import WhatCanWeDoScreen from './components/what_can_we_do_screen';
import InfoDrainScreen from './components/info_drain_screen';
import InfoUsingLessScreen from './components/info_using_less_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

// import 'shared/js/test-platform-integration';

class DroughtOut extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: TitleScreen,
      2: ThinkScreen,
      3: InfoNoWaterScreen,
      4: InfoImpactScreen,
      5: InfoNeedWaterScreen,
      6: InfoUseWaterScreen,
      7: BalloonsScreen,
      8: InfoEnvironmentScreen,
      9: InfoEnvironmentEffectsScreen,
      10: EnvironmentEffectsScreen,
      11: InfoHumanEffectsScreen,
      12: HumanEffectsScreen,
      13: WhatCanWeDoScreen,
      14: InfoDrainScreen,
      15: InfoUsingLessScreen,
      /*16: ShowerScreen,
      17: ConserveScreen,
      18: HeroScreen,
      19: FlipScreen*/
    };

    this.state.data.screens = _.map(this.screens, () => ({}));
    window.g = this;

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
