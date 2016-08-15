import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import InfoQuestionScreen from './components/info_question_screen';
import PlantScreen from './components/plant_screen';
import FlushItScreen from './components/flush_it_screen';
import OwnershipScreen from './components/ownership_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

//import 'shared/js/test-platform-integration';

class TwirlNSwirl extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      /*1: TitleScreen,
      2: InfoQuestionScreen,
      3: PlantScreen,
      4: OwnershipScreen,
      5: FlipScreen,*/
        1: FlushItScreen,
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

  renderAssets() {
    return (
      <div>
        <skoash.Audio ref="bkg" type="background" src="media/audio/title/background.mp3" />
        
        <skoash.Audio ref="button" type="sfx" src="media/audio/button.mp3" />
        <skoash.Audio ref="screen-complete" type="sfx" src="media/audio/screen-complete.mp3" />
      </div>
    );
  }

}

skoash.start(TwirlNSwirl, config.id);

import 'shared/js/google-analytics';
