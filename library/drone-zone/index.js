import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';

import TitleScreen from './components/title_screen';
import InfoDefinitionOfADroneScreen from './components/info_definition_of_a_drone_screen';
import InfoSoWhatDoesItDoScreen from './components/info_so_what_does_it_do_screen';
import VideoTheWorldOfDronesScreen from './components/video_the_world_of_drones_screen';
import TypesOfDronesScreen from './components/types_of_drones_screen';
import HowAreDronesControlledScreen from './components/how_are_drones_controlled_screen';
import WhyWouldYouWantADronePrtOneScreen from './components/why_would_you_want_a_drone_prt_one_screen.js';
import WhyWouldYouWantADronePrtTwoScreen from './components/why_would_you_want_a_drone_prt_two_screen.js';
// import InfoWantedYourOwnDroneScreen from './components/info_wanted_your_own_drone_screen';
// import InfoCustomizeYourOwnDroneScreen from './components/info_customize_your_own_drone_screen';
// import CustomizeYourDroneScreen from './components/customize_your_drone_screen';
import PartsOfADroneScreen from './components/parts_of_a_drone_screen';
import InfoLetsPlayScreen from './components/info_lets_play_screen';
import InfoHelpTheDroneScreen from './components/info_help_the_drone_screen';
import DroneLevelOneScreen from './components/drone_level_one_screen';
import LevelOneScreen from './components/level_one_screen';
import DroneLevelTwoScreen from './components/drone_level_two_screen';
import LevelTwoScreen from './components/level_two_screen';
import DroneLevelThreeScreen from './components/drone_level_three_screen';
import LevelThreeScreen from './components/level_three_screen';
import InfoGameCompleteScreen from './components/info_game_complete_screen';
import FlipScreen from './components/flip_screen';
import QuitScreen from './components/quit_screen';

skoash.start(
    <skoash.Game
        config={config}
        loader={<Loader />}
        screens={[
            iOSScreen,
            TitleScreen,
            InfoDefinitionOfADroneScreen,
            InfoSoWhatDoesItDoScreen,
            VideoTheWorldOfDronesScreen,
            TypesOfDronesScreen,
            HowAreDronesControlledScreen,
            WhyWouldYouWantADronePrtOneScreen,
            WhyWouldYouWantADronePrtTwoScreen,
            // InfoWantedYourOwnDroneScreen, //temp removed from spec
            // InfoCustomizeYourOwnDroneScreen, //temp removed from spec
            // CustomizeYourDroneScreen, //temp removed from spec
            PartsOfADroneScreen,
            InfoLetsPlayScreen,
            InfoHelpTheDroneScreen,
            DroneLevelOneScreen,
            LevelOneScreen,
            DroneLevelTwoScreen,
            LevelTwoScreen,
            DroneLevelThreeScreen,
            LevelThreeScreen,
            InfoGameCompleteScreen,
            FlipScreen
        ]}
        menus={{
            quit: QuitScreen,
        }}
        assets={[
            <skoash.Font name="Lilita One" />,
            <skoash.Font name="Luckiest Guy" />,
            <skoash.Font name="Source Sans Pro" />,
            <skoash.Font name="CMWN" />,
            <div className="background title" />,
            <div className="background bkg-1" />,
            <div className="background bkg-2" />,
            <div className="background bkg-3" />,
            <div className="background bkg-4" />,
            <div className="background bkg-5" />,
            <div className="background bkg-6" />,
            <div className="background bkg-7" />,
            <div className="background bkg-8" />,
            <div className="background bkg-9" />,
            <div className="background bkg-10" />,
            <skoash.Audio
                ref="button"
                type="sfx"
                src={`${MEDIA.EFFECT}click1.mp3`}
            />,
            <skoash.Audio
                ref="screen-complete"
                type="sfx"
                src={`${MEDIA.EFFECT}nextappear.mp3`}
            />,
            <skoash.Audio
                ref="title"
                type="background"
                src={`${MEDIA.EFFECT}Title.mp3`}
                loop
            />,
            <skoash.Audio
                ref="bkg-1"
                type="background"
                src={`${MEDIA.EFFECT}BKG1.mp3`}
                loop
            />,
            <skoash.Audio
                ref="bkg-2"
                type="background"
                src={`${MEDIA.EFFECT}BKG2.mp3`}
                loop
            />,
            <skoash.Audio
                ref="bkg-3"
                type="background"
                src={`${MEDIA.EFFECT}BKG3.mp3`}
                loop
            />,
            <skoash.Audio
                ref="bkg-4"
                type="background"
                src={`${MEDIA.EFFECT}BKG4.mp3`}
                loop
            />,
            <skoash.Audio
                ref="bkg-5"
                type="background"
                src={`${MEDIA.EFFECT}BKG_5.mp3`}
                loop
            />,
            <skoash.Audio
                ref="bkg-6"
                type="background"
                src={`${MEDIA.EFFECT}BKG_6.mp3`}
                loop
            />
        ]}
        getBackgroundIndex={(index, id) => {
            switch (id) {
                case 'ios-splash': return;
                case 'title':
                case 'flip':
                    return 0;
                case 'info-definition-of-a-drone':
                case 'info-what-does-it-do':
                case 'video-the-world-of-drones':
                case 'types-of-drones':
                    return 1;
                case 'how-are-drones-controlled':
                case 'why-would-you-want-a-drone-prt-one':
                case 'why-would-you-want-a-drone-prt-two':
                    return 2;
                case 'info-wanted-your-own-drone':
                case 'info-customize-your-own-drone':
                case 'customize-your-drone':
                    return 3;
                case 'parts-of-a-drone':
                    return 4;
                case 'drone-level-1':
                case 'phaser-level-1':
                    return 5;
                case 'drone-level-2':
                case 'phaser-level-2':
                case 'drone-level-3':
                case 'phaser-level-3':
                    return 6;
            }
        }}
    />
);

if (module.hot) module.hot.accept();
