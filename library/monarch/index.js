import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import VideoScreen from './components/video_screen';
import LifeStagesScreen from './components/life_stages_screen';
import FirstStageScreen from './components/first_stage_screen';
import InstructionsOneScreen from './components/instructions_1_screen';
import MonarchGenerationOneScreen from './components/monarch_generation_one_screen';
import LevelOneScreen from './components/level_one_screen';
import LevelTwoScreen from './components/level_two_screen';
import LevelThreeScreen from './components/level_three_screen';
// import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

skoash.start(
    <skoash.Game
        config={config}
        loader={<Loader />}
        screens={[
            iOSScreen,
            TitleScreen,
            MonarchGenerationOneScreen,
            LevelOneScreen,
            LevelTwoScreen,
            LevelThreeScreen,
            VideoScreen,
            LifeStagesScreen,
            FirstStageScreen,
            InstructionsOneScreen,
            // FlipScreen,
        ]}
        menus={{
            quit: QuitScreen,
        }}
        assets={[
            <skoash.Font name="Chelsea Market" />,
            <skoash.Font name="Source Sans Pro" />,
            <skoash.Font name="CMWN" />,
            <skoash.Image
                className="hidden"
                src={`${MEDIA.SPRITE}sprite.circles.png`}
            />,
            <skoash.Image
                className="hidden"
                src={`${MEDIA.FRAME}monarch.fact.png`}
            />,
            <skoash.Image
                className="hidden"
                src={`${MEDIA.FRAME}try.again.frame.png`}
            />,
            <div className="background title" />,
            <div className="background bkg-1" />,
            <div className="background bkg-2" />,
            <div className="background bkg-3" />,
            <div className="background bkg-4" />,
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
        ]}
        getBackgroundIndex={(index, id) => {
            switch (id) {
                case 'ios-splash': return;
                case 'title':
                    return 0; //bkg-1
                case 'life-cycle':
                    return 1; //bkg-2
                case 'first-stage':
                case 'instructions-1':
                    return 2; //bkg-3
                case 'phaser-level-1':
                case 'phaser-level-2':
                case 'phaser-level-3':
                    return;
                case 'flip':
                    return;
                case 'video':
                    return; // no bkg audio
            }
        }}
    />
);

if (module.hot) module.hot.accept();
