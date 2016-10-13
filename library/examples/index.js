import config from './config.game';
import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import LabyrinthScreen from './components/labyrinth_screen';
// import GameScreen from './components/game_screen';
// import SelectableAllScreen from './components/selectable_all_screen';
// import RunnerReveal from './components/flyer_screen';
// import CatchReveal from './components/catch_reveal_screen';
// import CatchScreen from './components/catch_screen';
// import CarouselScreen from './components/carousel_screen';
// import MatchScreen from './components/match_screen';
// import RolesScreen from './components/roles_screen';
// import ScoreScreen from './components/score_screen';
// import DropzoneScreen from './components/dropzone_screen';
// import TimerScreen from './components/timer_screen';
// import AudioScreen from './components/audio_screen';
// import TitleScreen from './components/title_screen';
// import BulbsScreen from './components/bulbs_screen';
// import PigScreen from './components/pig_screen';
// import SwitchesScreen from './components/switches_screen';
// import InfoScreen from './components/info_screen';
// import VideoScreen from './components/video_screen';
// import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

class Examples extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: LabyrinthScreen,
      // 1: GameScreen,
      // 1: SelectableAllScreen,
      // 1: CarouselScreen,
      // 1: CatchReveal
      // 1: CatchScreen,
      // 1: CarouselScreen,
      // 1: RolesScreen,
      // 1: RunnerReveal
      // 1: MatchScreen,
      // 1: ScoreScreen,
      // 1: DropzoneScreen,
      // 1: TimerScreen,
      // 1: AudioScreen,
      // 1: TitleScreen,
      // 2: BulbsScreen,
      // 3: PigScreen,
      // 1: SwitchesScreen,
      // 5: InfoScreen,
      // 6: VideoScreen,
      // 7: FlipScreen,
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
        <skoash.Audio ref="button" type="sfx" src="media/_Buttons/S_BU_1.mp3" />
        <skoash.Audio ref="screen-complete" type="sfx" src="media/_Buttons/S_BU_2.mp3" />
        <skoash.Audio ref="correct" type="sfx" src="media/_Buttons/S_BU_3.mp3" />
      </div>
    );
  }

}

skoash.start(Examples, config.id);
