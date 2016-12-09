var SafetyFirst;

import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import MeetTheTeamScreen from './components/meet_the_team_screen';
import InfoLetsSeeScreen from './components/info_lets_see_screen';
import DingDongScreen from './components/ding_dong_screen';
import WhosAtTheDoorGrandpaScreen from './components/whos_at_the_door_grandpa_screen';
import WhosAtTheDoorDeliveryPersonScreen from './components/whos_at_the_door_delivery_person_screen';
import WhosAtTheDoorSisterScreen from './components/whos_at_the_door_sister_screen';
import WhosAtTheDoorNewNeighborScreen from './components/whos_at_the_door_new_neighbor_screen';
import WhosAtTheDoorMotherScreen from './components/whos_at_the_door_mother_screen';
import WhosAtTheDoorBrotherScreen from './components/whos_at_the_door_brother_screen';
import WhosAtTheDoorGasManScreen from './components/whos_at_the_door_gas_man_screen';
import WhosAtTheDoorCloseFriendScreen from './components/whos_at_the_door_close_friend_screen';
import WhosAtTheDoorPersonWithFlatScreen from './components/whos_at_the_door_person_with_flat_screen';
import WhosAtTheDoorCablePersonScreen from './components/whos_at_the_door_cable_person_screen';
import WhosAtTheDoorCloseRelativeScreen from './components/whos_at_the_door_close_relative_screen';
import InfoGoodJobScreen from './components/info_good_job_screen';
import LabyrinthOutdoorsScreen from './components/labyrinth_outdoors_screen';
import LabyrinthIndoorsScreen from './components/labyrinth_indoors_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

window.MEDIA_SERVER = ENVIRONMENT.MEDIA;
ENVIRONMENT.MEDIA += 'Games/SafetyFirst/';

SafetyFirst = (
    <skoash.Game
        config={config}
        loader={<Loader />}
        screens={{
            0: iOSScreen,
            1: TitleScreen,
            2: MeetTheTeamScreen,
            3: InfoLetsSeeScreen,
            4: DingDongScreen,
            5: WhosAtTheDoorGrandpaScreen,
            6: WhosAtTheDoorDeliveryPersonScreen,
            7: WhosAtTheDoorSisterScreen,
            8: WhosAtTheDoorNewNeighborScreen,
            9: WhosAtTheDoorMotherScreen,
            10: WhosAtTheDoorBrotherScreen,
            11: WhosAtTheDoorGasManScreen,
            12: WhosAtTheDoorCloseFriendScreen,
            13: WhosAtTheDoorPersonWithFlatScreen,
            14: WhosAtTheDoorCablePersonScreen,
            15: WhosAtTheDoorCloseRelativeScreen,
            16: InfoGoodJobScreen,
            17: LabyrinthOutdoorsScreen,
            18: LabyrinthIndoorsScreen,
            19: FlipScreen,
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
