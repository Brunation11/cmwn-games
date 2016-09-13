import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import ImagineScreen from './components/imagine_screen';
import AlreadyExistsScreen from './components/already_exists_screen';
import LetsLearnScreen from './components/lets_learn_screen';
import VideoScreen from './components/video_screen';
import ManyMaterialsScreen from './components/many_materials_screen';
import SortGameScreen from './components/sort_game_screen';
import HelpTheWorldScreen from './components/help_the_world_screen';
import BunchOfProblemsScreen from './components/bunch_of_problems_screen';
import PrinterScreen from './components/printer_screen';
import NowTheYouLearnedScreen from './components/now_that_you_learned_screen';
import ListScreen from './components/list_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

// import 'shared/js/test-platform-integration';

class ThreeDWorldGame extends skoash.Game {
  // AW - I'm leaving this here for now in case there are any necessary game extensions
}

var ThreeDWorld = (
  <ThreeDWorldGame
    config={config}
    loader={<Loader />}
    screens={{
      0: iOSScreen,
      1: TitleScreen,
      2: ImagineScreen,
      3: AlreadyExistsScreen,
      4: LetsLearnScreen,
      5: VideoScreen,
      6: ManyMaterialsScreen,
      7: SortGameScreen,
      8: HelpTheWorldScreen,
      9: BunchOfProblemsScreen,
      10: PrinterScreen,
      11: NowTheYouLearnedScreen,
      12: ListScreen,
      13: FlipScreen,
    }}
    menus={{
      quit: QuitScreen,
    }}
    assets={[
      <skoash.Audio ref="button" type="sfx" src="media/_sounds/Back.mp3" />,
      <skoash.Audio ref="next" type="sfx" src="media/_sounds/Next.mp3" />,
      <skoash.Audio ref="back" type="sfx" src="media/_sounds/Back.mp3" />,
      <skoash.Audio ref="screen-complete" type="sfx" src="media/_sounds/NextAppear.mp3" />,
      <skoash.Audio type="background" src="media/_sounds/TitleScreen.mp3" loop />,
      <skoash.Audio type="background" src="media/_sounds/BKG1.mp3" loop />,
      <skoash.Audio type="background" src="media/_sounds/BKG2.mp3" loop />,
      <skoash.Audio type="background" src="media/_sounds/BKG3.mp3" loop />,
      <skoash.Audio type="background" src="media/_sounds/BKG4.mp3" loop />,
      <skoash.Audio type="background" src="media/_sounds/BKG5.mp3" loop />,
      <skoash.Image className="hidden" src="media/_backgrounds/bg-02.jpg" />,
      <skoash.Image className="hidden" src="media/_backgrounds/bg-03-game1-congratulations.jpg" />,
      <skoash.Image className="hidden" src="media/_backgrounds/bg-04-game2-.jpg" />,
      <skoash.Image className="hidden" src="media/_backgrounds/title-.jpg" />,
      <div className="game-background bkg-02" />,
      <div className="game-background bkg-03" />,
      <div className="game-background bkg-04" />,
    ]}
    getBackgroundIndex={(index) => {
      switch (true) {
      case index === 3: return 1;
      default: return 0;
      }
    }}
  />
);

skoash.start(ThreeDWorld);

import 'shared/js/google-analytics';
