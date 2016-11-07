import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
// import InfoQuestionScreen from './components/info_question_screen';
// import InfoPlantScreen from './components/info_plant_screen';
// import FlushItScreen from './components/flush_it_screen';
// import ResponsibleFlusherScreen from './components/responsible_flusher_screen';
// import FlipScreen from './components/flip_screen';
import InfoCatchGame from './components/info_catch_game';
import CatchGameLvlOneScreen from './components/catch_game_lvl_one_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

var TwirlNSwirl = (
  <skoash.Game
    config={config}
    screens={{
      0: iOSScreen,
      // 1: InfoCatchGame,
      1: CatchGameLvlOneScreen,
      // 2: TitleScreen,
      // 2: InfoQuestionScreen,
      // 3: InfoPlantScreen,
      // 4: FlushItScreen,
      // 5: ResponsibleFlusherScreen,
      // 6: FlipScreen
    }}
    menus={{
      quit: QuitScreen,
    }}
    loader={<Loader />}
    assets={[
      <skoash.Audio ref="bkg-1" type="background" src="media/audio/title/background.mp3" />,
      <skoash.Audio ref="button" type="sfx" src="media/audio/button.mp3" />,
      <skoash.Audio ref="screen-complete" type="sfx" src="media/audio/screen-complete.mp3" />,
    ]}
  />
);

skoash.start(TwirlNSwirl);

// update backgrounds in this file
