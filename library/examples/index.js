import config from './config';
import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import SpriteScreen from './components/sprite_screen';
import LabyrinthScreen from './components/labyrinth_screen';
import GameScreen from './components/game_screen';
import SelectableAllScreen from './components/selectable_all_screen';
import RunnerReveal from './components/flyer_screen';
import CatchReveal from './components/catch_reveal_screen';
import CatchScreen from './components/catch_screen';
import CarouselScreen from './components/carousel_screen';
import MatchScreen from './components/match_screen';
import RolesScreen from './components/roles_screen';
import ScoreScreen from './components/score_screen';
import DropzoneScreen from './components/dropzone_screen';
import TimerScreen from './components/timer_screen';
import AudioScreen from './components/audio_screen';
import TitleScreen from './components/title_screen';
import BulbsScreen from './components/bulbs_screen';
import PigScreen from './components/pig_screen';
import SwitchesScreen from './components/switches_screen';
import InfoScreen from './components/info_screen';
import VideoScreen from './components/video_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

var Examples = (
    <skoash.Game
        config={config}
        screens={{
            0: iOSScreen,
            1: GameScreen,
            2: LabyrinthScreen,
            3: SpriteScreen,
            4: SelectableAllScreen,
            5: CarouselScreen,
            6: CatchReveal,
            7: CatchScreen,
            8: CarouselScreen,
            9: RolesScreen,
            10: RunnerReveal,
            11: MatchScreen,
            12: ScoreScreen,
            13: DropzoneScreen,
            14: TimerScreen,
            15: AudioScreen,
            16: TitleScreen,
            17: BulbsScreen,
            18: PigScreen,
            19: SwitchesScreen,
            20: InfoScreen,
            21: VideoScreen,
            22: FlipScreen,
        }}
        menus={{
            quit: QuitScreen,
        }}
        loader={<Loader />}
        assets={[
            <skoash.Audio ref="button" type="sfx" src="media/_Buttons/S_BU_1.mp3" />,
            <skoash.Audio ref="screen-complete" type="sfx" src="media/_Buttons/S_BU_2.mp3" />,
            <skoash.Audio ref="correct" type="sfx" src="media/_Buttons/S_BU_3.mp3" />,
        ]}
    />
);

skoash.start(Examples);

if (module.hot) module.hot.accept();
