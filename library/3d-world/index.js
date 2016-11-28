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

var ThreeDWorld;

window.MEDIA_SERVER = ENVIRONMENT.MEDIA;
ENVIRONMENT.MEDIA += 'Games/3DWorld/';

ThreeDWorld = (
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
            <skoash.Font name="Molot" />,
            <skoash.Font name="Source Sans Pro" />,
            <skoash.Audio ref="button" type="sfx" src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/Back.mp3'} />,
            <skoash.Audio ref="next" type="sfx" src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/Next.mp3'} />,
            <skoash.Audio ref="back" type="sfx" src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/Back.mp3'} />,
            <skoash.Audio
                ref="screen-complete"
                type="sfx"
                src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/NextAppear.mp3'}
            />,
            <skoash.Audio
                type="background"
                src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/TitleScreen.mp3'}
                loop
            />,
            <skoash.Audio type="background" src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/BKG1.mp3'} loop />,
            <skoash.Audio type="background" src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/BKG2.mp3'} loop />,
            <skoash.Audio type="background" src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/BKG3.mp3'} loop />,
            <skoash.Audio type="background" src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/BKG4.mp3'} loop />,
            <skoash.Audio type="background" src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/BKG5.mp3'} loop />,
            <skoash.Image className="hidden" src={ENVIRONMENT.MEDIA + 'ImageAssets/bkg.jpg'} />,
            <skoash.Image className="hidden" src={ENVIRONMENT.MEDIA + 'ImageAssets/bk.1.jpg'} />,
            <skoash.Image className="hidden" src={ENVIRONMENT.MEDIA + 'ImageAssets/bkg.2.jpg'} />,
            <skoash.Image className="hidden" src={ENVIRONMENT.MEDIA + 'ImageAssets/bkg.win.jpg'} />,
            <div className="background bkg-imagine" />,
            <div className="background bkg-congratulations" />,
            <div className="background bkg-printer" />,
        ]}
        getBackgroundIndex={(index, id) => {
            switch (id) {
                case 'ios-splash': return;
                case 'title': return 0;
                case 'imageine':
                case 'lets-learn':
                    return 1;
                case 'sort-game-level-one':
                case 'sort-game-level-two':
                case 'sort-game-level-three':
                case 'congratulations':
                    return 3;
                case 'help-the-world':
                case 'bunch-of-problems':
                    return 4;
                case 'printer':
                    return 5;
                default: return 2;
            }
        }}
    />
);

skoash.start(ThreeDWorld);
