import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';

import TitleScreen from './components/title_screen';
import InfoDefinitionOfADroneScreen from './components/info_definition_of_a_drone_screen';
// import InfoSoWhatDoesItDoScreen from './info_so_what_does_it_so_screen';
// import VideoTheWorldOfDronesScreen from './video_the_world_of_drones_screen';
// import TypesOfDronesScreen from './types_of_drones_screen';
// import HowAreDronesControlledScreen from './how_are_drones_controlled_screen';
// import WhyWouldYouWantADronePrtOneScreen from './components/why_would_you_want_a_drone_prt_one_screen.js';
// import WhyWouldYouWantADronePrtTwoScreen from './components/why_would_you_want_a_drone_prt_two_screen.js';
// import InfoWantedYourOwnDroneScreen from './components/info_wanted_your_own_drone_screen';
// import InfoCustomizeYourOwnDroneScreen from './components/info_wanted_your_own_drone_screen';
// import CustomizeYourDroneScreen from './components/customize_your_drone_screen';
// import PartsOfADroneScreen from './components/parts_of_a_drone_screen';
// import FlipScreen from './components/flip_screen';
import QuitScreen from './components/quit_screen';

skoash.start(
    <skoash.Game
        config={config}
        loader={<Loader />}
        screens={[
            iOSScreen,
            TitleScreen,
            // InfoDefinitionOfADroneScreen,
            // InfoSoWhatDoesItDoScreen,
            // VideoTheWorldOfDronesScreen,
            // TypesOfDronesScreen,
            // HowAreDronesControlledScreen,
            // WhyWouldYouWantADronePrtOneScreen,
            // WhyWouldYouWantADronePrtTwoScreen,
            // InfoWantedYourOwnDroneScreen,
            // InfoCustomizeYourOwnDroneScreen,
            // CustomizeYourDroneScreen,
            // PartsOfADroneScreen,
            // FlipScreen
        ]}
        menus={{
            quit: QuitScreen,
        }}
        assets={[
            // <skoash.Font name="Chelsea Market" />,
            // <skoash.Font name="Source Sans Pro" />,
            // <skoash.Font name="CMWN" />,
            // <skoash.Image
            //     className="hidden"
            //     src={`${MEDIA.FRAME}monarch.fact.png`}
            // />,
            // <skoash.Image
            //     className="hidden"
            //     src={`${MEDIA.FRAME}try.again.frame.png`}
            // />,
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
            // <skoash.Audio
            //     ref="button"
            //     type="sfx"
            //     src={`${MEDIA.EFFECT}Click.mp3`}
            // />,
            // <skoash.Audio
            //     ref="screen-complete"
            //     type="sfx"
            //     src={`${MEDIA.EFFECT}NextAppear.mp3`}
            // />,
            // <skoash.Audio
            //     ref="bkg-1"
            //     type="background"
            //     src={`${MEDIA.EFFECT}BKG_1.mp3`}
            //     loop
            // />,
            // <skoash.Audio
            //     ref="bkg-2"
            //     type="background"
            //     src={`${MEDIA.EFFECT}BKG_2.mp3`}
            //     loop
            // />,
            // <skoash.Audio
            //     ref="bkg-3"
            //     type="background"
            //     src={`${MEDIA.EFFECT}BKG_3.mp3`}
            //     loop
            // />,
            // <skoash.Audio
            //     ref="bkg-4"
            //     type="background"
            //     src={`${MEDIA.EFFECT}BKG_4.mp3`}
            //     loop
            // />,
            // <skoash.Audio
            //     ref="bkg-5"
            //     type="background"
            //     src={`${MEDIA.EFFECT}BKG_5.mp3`}
            //     loop
            // />,
            // <skoash.Audio
            //     ref="bkg-6"
            //     type="background"
            //     src={`${MEDIA.EFFECT}BKG_6.mp3`}
            //     loop
            // />,
            // <skoash.Audio
            //     ref="bkg-bonus"
            //     type="background"
            //     src={`${MEDIA.EFFECT}BonusBKG.mp3`}
            // />,
        ]}
        getBackgroundIndex={(index, id) => {
            switch (id) {
                case 'ios-splash': return;
                // case 'title':
                //     return 'bkg-1';
                // case 'life-stages':
                //     return 'bkg-2';
                // case 'first-stage':
                // case 'instructions-1':
                // case 'video-pupa':
                // case 'video-monarch':
                // case 'info-migrate':
                //     return 'bkg-3';
                // case 'bonus-level-one':
                // case 'bonus-level-two':
                // case 'info-video-two':
                //     return 'bkg-4';
                // case 'monarch-generations-1':
                // case 'phaser-level-1':
                // case 'monarch-generations-2':
                // case 'phaser-level-2':
                // case 'monarch-generations-3':
                // case 'phaser-level-3':
                // case 'monarch-generations-4':
                //     return 'bkg-3';
                // case 'flip':
                //     return;
                // case 'info-video-one':
                //     return; // no bkg audio
            }
        }}
    />
);

if (module.hot) module.hot.accept();
