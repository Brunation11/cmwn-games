var SafetyFirst;

import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import MeetTheTeamScreen from './components/meet_the_team_screen';
import InfoLetsSeeScreen from './components/info_lets_see_screen';
import DingDongScreen from './components/ding_dong_screen';
import WhosAtTheDoorGrandpa from './components/whos_at_the_door_grandpa_screen';
import WhosAtTheDoorDeliveryPerson from './components/whos_at_the_door_delivery_person_screen';
import WhosAtTheDoorSister from './components/whos_at_the_door_sister_screen';
// import BulbsScreen from './components/bulbs_screen';
// import PigScreen from './components/pig_screen';
// import InfoScreen from './components/info_screen';
// import VideoScreen from './components/video_screen';
// import SpecialAnnouncementScreen from './components/special_announcement_screen';
// import LevelOneScreen from './components/level_one_screen';
// import LevelTwoScreen from './components/level_two_screen';
// import LevelThreeScreen from './components/level_three_screen';
// import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

window.MEDIA_SERVER = ENVIRONMENT.MEDIA;
ENVIRONMENT.MEDIA += 'Games/SafetyFirst/';

SafetyFirst = (
    <skoash.Game
        config={config}
        loader={<Loader />}
        screens={{
            0: iOSScreen,
            // 1: TitleScreen,
            // 2: MeetTheTeamScreen,
            // 3: InfoLetsSeeScreen,
            // 4: DingDongScreen
            // 1: WhosAtTheDoorGrandpa,
            // 1: WhosAtTheDoorDeliveryPerson
            1: WhosAtTheDoorSister
            // 2: BulbsScreen,
            // 3: PigScreen,
            // 4: InfoScreen,
            // 5: VideoScreen,
            // 6: SpecialAnnouncementScreen,
            // 7: LevelOneScreen,
            // 8: LevelTwoScreen,
            // 9: LevelThreeScreen,
            // 10: FlipScreen,
        }}
        menus={{
            quit: QuitScreen,
        }}
        assets={[
            <skoash.Font name="Source Sans Pro" />,
            <skoash.Audio
                type="background"
                src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/BKG1.mp3'}
                loop
            />,
            <skoash.Audio
                ref="button"
                type="sfx"
                src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/ButtonClick.mp3'}
            />,
            <skoash.Audio
                ref="back"
                type="sfx"
                src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/ButtonClick.mp3'}
            />,
            <skoash.Image
                className="background bkg2"
                src={ENVIRONMENT.MEDIA + 'ImageAssets/bkg.2.jpg'}
            />,
            <skoash.Image
                className="background bkg3"
                src={ENVIRONMENT.MEDIA + 'ImageAssets/bkg.3.jpg'}
            />,
            <skoash.Image
                className="background bkghome"
                src={ENVIRONMENT.MEDIA + 'ImageAssets/bkg.home.jpg'}
            />,
            <skoash.Image
                className="background dooropened"
                src={ENVIRONMENT.MEDIA + 'ImageAssets/bkg.dooropened.jpg'}
            />,
            <skoash.Image
                className="background doorclosed"
                src={ENVIRONMENT.MEDIA + 'ImageAssets/bkg.doorclosed.jpg'}
            />,
        ]}
    />
);

skoash.start(SafetyFirst);
