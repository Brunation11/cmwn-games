import _ from 'lodash';

import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import InfoTinyPatternsScreen from './components/info_tiny_patterns_screen';
import InfoDiscoverScreen from './components/info_discover_screen';
import InfoArchScreen from './components/info_arch_screen';
import InfoLoopsScreen from './components/info_loops_screen';
import InfoWhorlScreen from './components/info_whorl_screen';
import InfoDoubleLoopScreen from './components/info_double_loop_screen';
import InfoIdScreen from './components/info_id_screen';
import IdentifyScreen from './components/identify_screen';
import CarouselScreen from './components/carousel_screen';
import InfoLetsDustScreen from './components/info_lets_dust_screen';
import InfoNeedScreen from './components/info_need_screen';
import InfoStep1Screen from './components/info_step_1_screen';
import InfoStep2Screen from './components/info_step_2_screen';
import InfoStep3Screen from './components/info_step_3_screen';
import InfoStep4Screen from './components/info_step_4_screen';
import InfoStep5Screen from './components/info_step_5_screen';
import InfoStep6Screen from './components/info_step_6_screen';
import InfoStep7Screen from './components/info_step_7_screen';
import InfoEverybodyScreen from './components/info_everybody_screen';
import InfoFurtherScreen from './components/info_further_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

import 'shared/js/test-platform-integration';

class Printmaster extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: TitleScreen,
      2: InfoTinyPatternsScreen,
      3: InfoDiscoverScreen,
      4: InfoArchScreen,
      5: InfoLoopsScreen,
      6: InfoWhorlScreen,
      7: InfoDoubleLoopScreen,
      8: InfoIdScreen,
      9: IdentifyScreen,
      10: CarouselScreen,
      11: InfoLetsDustScreen,
      12: InfoNeedScreen,
      13: InfoStep1Screen,
      14: InfoStep2Screen,
      15: InfoStep3Screen,
      16: InfoStep4Screen,
      17: InfoStep5Screen,
      18: InfoStep6Screen,
      19: InfoStep7Screen,
      20: InfoEverybodyScreen,
      21: InfoFurtherScreen,
      22: FlipScreen,
    };

    this.state.data.screens = _.map(this.screens, () => ({}));

    this.menus = {
      quit: QuitScreen,
    };

    window.g = this;
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

  passData(opts) {
    if (opts.name === 'typing') {
      this.media.typing.play();
      setTimeout(() => {
        this.media.typing.stop();
      }, opts.duration || 500);
    }
  }

  renderAssets() {
    return (
      <div>
        <skoash.Audio ref="bkg-1" type="background" src="media/_BKG/S_BKG_1.mp3" loop />
        <skoash.Audio ref="bkg-2" type="background" src="media/_BKG/S_BKG_2.mp3" loop />
        <skoash.Audio ref="bkg-3" type="background" src="media/_BKG/S_BKG_3.mp3" loop />
        <skoash.Audio ref="bkg-4" type="background" src="media/_BKG/S_BKG_4.mp3" loop />
        <skoash.Audio ref="bkg-5" type="background" src="media/S_12/S_12.1.mp3" />
        <skoash.Audio ref="bkg-6" type="background" src="media/S_22/S_22.1.mp3" />
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
