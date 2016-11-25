import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import BulbsScreen from './components/bulbs_screen';
import PigScreen from './components/pig_screen';
import InfoScreen from './components/info_screen';
import VideoScreen from './components/video_screen';
import SpecialAnnouncementScreen from './components/special_announcement_screen';
import LevelOneScreen from './components/level_one_screen';
import LevelTwoScreen from './components/level_two_screen';
import LevelThreeScreen from './components/level_three_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

var BeBright = (
    <skoash.Game
        config={config}
        screens={{
            0: iOSScreen,
            1: TitleScreen,
            2: BulbsScreen,
            3: PigScreen,
            4: InfoScreen,
            5: VideoScreen,
            6: SpecialAnnouncementScreen,
            7: LevelOneScreen,
            8: LevelTwoScreen,
            9: LevelThreeScreen,
            10: FlipScreen,
        }}
        menus={{
            quit: QuitScreen,
        }}
        loader={<Loader />}
        assets={[
            <skoash.Image className="background bkg-1" src="media/_BKG/BKG_1.png" />,
            <skoash.Image className="background bkg-2" src="media/_images/bkg02.png" />,
            <skoash.Audio ref="bkg-1" type="background" src="media/_BKG/S_BKG_1.mp3" loop />,
            <skoash.Audio ref="button" type="sfx" src="media/_Buttons/S_BU_1.mp3" />,
            <skoash.Audio ref="screen-complete" type="sfx" src="media/_Buttons/S_BU_2.mp3" />,
            <skoash.Audio ref="correct" type="sfx" src="media/_Buttons/S_BU_3.mp3" />,
        ]}
    />
);

skoash.start(BeBright);
