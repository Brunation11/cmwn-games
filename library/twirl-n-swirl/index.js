import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import InfoQuestionScreen from './components/info_question_screen';
import InfoPlantScreen from './components/info_plant_screen';
import FlushItScreen from './components/flush_it_screen';
import ResponsibleFlusherScreen from './components/responsible_flusher_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

import 'shared/js/test-platform-integration';

class TwirlNSwirl extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: TitleScreen,
      2: InfoQuestionScreen,
      3: InfoPlantScreen,
      4: FlushItScreen,
      5: ResponsibleFlusherScreen,
      6: FlipScreen
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
        <skoash.Audio ref="bkg-1" type="background" src="media/audio/title/background.mp3" />

        <skoash.Audio ref="button" type="sfx" src="media/audio/button.mp3" />
        <skoash.Audio ref="screen-complete" type="sfx" src="media/audio/screen-complete.mp3" />
      </div>
    );
  }

}

skoash.start(TwirlNSwirl, config.id);

import 'shared/js/google-analytics';
