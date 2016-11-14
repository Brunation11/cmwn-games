import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import ImagineScreen from './components/imagine_screen';
import LetsLearnScreen from './components/lets_learn_screen';
import VideoScreen from './components/video_screen';
import ManyMaterialsScreen from './components/many_materials_screen';
import SortGameLevelOneScreen from './components/sort_game_level_one_screen';
import SortGameLevelTwoScreen from './components/sort_game_level_two_screen';
import SortGameLevelThreeScreen from './components/sort_game_level_three_screen';
import CongratulationsScreen from './components/congratulations_screen';
import HelpTheWorldScreen from './components/help_the_world_screen';
import BunchOfProblemsScreen from './components/bunch_of_problems_screen';
import PrinterScreen from './components/printer_screen';
import NowTheYouLearnedScreen from './components/now_that_you_learned_screen';
import ListScreen from './components/list_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

window.MEDIA_SERVER = ENVIRONMENT.MEDIA;
ENVIRONMENT.MEDIA += 'Games/3DWorld/';

var ThreeDWorld = (
  <skoash.Game
    config={config}
    loader={<Loader />}
    screens={{
      0: iOSScreen,
      1: TitleScreen,
      2: ImagineScreen,
      3: LetsLearnScreen,
      4: VideoScreen,
      5: ManyMaterialsScreen,
      6: SortGameLevelOneScreen,
      7: SortGameLevelTwoScreen,
      8: SortGameLevelThreeScreen,
      9: CongratulationsScreen,
      10: HelpTheWorldScreen,
      11: BunchOfProblemsScreen,
      12: PrinterScreen,
      13: NowTheYouLearnedScreen,
      14: ListScreen,
      15: FlipScreen,
    }}
    menus={{
      quit: QuitScreen,
    }}
    assets={[
      <skoash.Audio ref="button" type="sfx" src={ENVIRONMENT.MEDIA + 'ac19578747dc6bfa3c17987119174ad2.mp3'} />,
      <skoash.Audio ref="next" type="sfx" src={ENVIRONMENT.MEDIA + '47c9ce409fbdf96f811b286d21687d10.mp3'} />,
      <skoash.Audio ref="back" type="sfx" src={ENVIRONMENT.MEDIA + 'ac19578747dc6bfa3c17987119174ad2.mp3'} />,
      <skoash.Audio ref="screen-complete" type="sfx" src={ENVIRONMENT.MEDIA + '0429cd3874bc8c57103be9e9bf778d21.mp3'} />,
      <skoash.Audio type="background" src={ENVIRONMENT.MEDIA + 'e5575d4ba4f554fdf4766d9407661343.mp3'} loop />,
      <skoash.Audio type="background" src={ENVIRONMENT.MEDIA + '5601630b0aa9fd96e77a5b4f95bd6b68.mp3'} loop />,
      <skoash.Audio type="background" src={ENVIRONMENT.MEDIA + 'ce54e87d81c29921ab4e8c74b4ec71f7.mp3'} loop />,
      <skoash.Audio type="background" src={ENVIRONMENT.MEDIA + '6682dfd1c93c73bfeb23e12023aba66b.mp3'} loop />,
      <skoash.Audio type="background" src={ENVIRONMENT.MEDIA + 'c46b1e6e36c0f3d2114c48bf75f8f25b.mp3'} loop />,
      <skoash.Audio type="background" src={ENVIRONMENT.MEDIA + 'bb980bb844b8a774ec7042b5e7e2f588.mp3'} loop />,
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
    getBackgroundIndex={index => {
      switch (true) {
      case index === 0: return;
      case index === 1: return 0;
      case index <= 3: return 1;
      case index <= 6: return 2;
      case index === 7: return 3;
      case index <= 9: return 4;
      case index === 10: return 5;
      default: return 2;
      }
    }}
  />
);

skoash.start(ThreeDWorld);
