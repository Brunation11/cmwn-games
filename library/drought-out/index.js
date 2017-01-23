import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import ThinkScreen from './components/think_screen';
import InfoNoWaterScreen from './components/info_no_water_screen';
import HumansAnimalsScreen from './components/humans_animals_screen';
import InfoUseWaterScreen from './components/info_use_water_screen';
import BalloonsScreen from './components/balloons_screen';
import GreatJobScreen from './components/great_job_screen';
import DroughtEffectsScreen from './components/drought_effects_screen';
import EnvironmentEffectsScreen from './components/environment_effects_screen';
import WhatCanWeDoScreen from './components/what_can_we_do_screen';
import InfoDrainScreen from './components/info_drain_screen';
import InfoUsingLessScreen from './components/info_using_less_screen';
import ShowerScreen from './components/shower_screen';
import ConserveScreen from './components/conserve_screen';
import HeroScreen from './components/hero_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

ENVIRONMENT.MEDIA_GAME = ENVIRONMENT.MEDIA + 'Games/DroughtOut/';

var DroughtOut = (
    <skoash.Game
        config={config}
        screens={{
            0: iOSScreen,
            1: TitleScreen,
            //2: ThinkScreen,
            //3: InfoNoWaterScreen,
            //4: HumansAnimalsScreen,
            //5: InfoUseWaterScreen,
            //6: BalloonsScreen,
            //7: GreatJobScreen,
            //8: DroughtEffectsScreen,
            //9: EnvironmentEffectsScreen,
            //10: WhatCanWeDoScreen,
            //11: InfoDrainScreen,
            2: InfoUsingLessScreen,
            //15: ShowerScreen,
            //16: ConserveScreen,
            //17: HeroScreen,
            //18: FlipScreen
        }}
        menus={{
            quit: QuitScreen,
        }}
        loader={<Loader />}
        getBackgroundIndex={screenIndex => {
            if (screenIndex < 2) return 0;
            if (screenIndex === 2) return;
            if (screenIndex < 5) return 1;
            if (screenIndex < 8) return 2;
            if (screenIndex < 13) return 3;
            if (screenIndex === 13) return 4;
            if (screenIndex === 14) return 5;
            if (screenIndex === 15) return 6;
            if (screenIndex < 18) return 7;
            if (screenIndex === 18) return 8;
        }}
        assets={[
            <skoash.Audio ref="bkg-0" type="background" src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/effects/Theme.mp3`} />,
            <skoash.Audio ref="bkg-1" type="background" src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/effects/BKG1.mp3`} loop />,
            <skoash.Audio ref="bkg-2" type="background" src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/effects/BKG2.mp3`} loop />,
            <skoash.Audio ref="bkg-3" type="background" src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/effects/BKG3.mp3`} loop />,
            <skoash.Audio ref="bkg-4" type="background" src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/effects/BKG4.mp3`} />,
            <skoash.Audio ref="bkg-5" type="background" src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/effects/BKG5.mp3`} />,
            <skoash.Audio ref="bkg-6" type="background" src="media/S_16/S_16.1.mp3" />,
            <skoash.Audio ref="bkg-7" type="background" src="media/_BKG/S_BKG_4.mp3" loop />,
            <skoash.Audio ref="bkg-8" type="background" src="media/S_19/S_19.1.mp3" />,
            <skoash.Audio ref="button" type="sfx" src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/effects/Next.mp3`} />,
            <skoash.Audio ref="screen-complete" type="sfx" src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/effects/WhooHoo.mp3`} />,
            <div className="background-1" />,
            <div className="background-2" />,
            <div className="background-3" />,
            <div className="background-4" />,
            <div className="background-5" />,
            <skoash.Image ref="bkg-image-1" className="hidden" src="media/_BKG/BKG_1.png" />,
            <skoash.Image ref="bkg-image-2" className="hidden" src="media/_BKG/BKG_2.png" />,
            <skoash.Image ref="bkg-image-3" className="hidden" src="media/_BKG/BKG_3.png" />,
            <skoash.Image ref="bkg-image-4" className="hidden" src="media/_BKG/BKG_4.png" />,
            <skoash.Image ref="bkg-image-5" className="hidden" src="media/_BKG/BKG_5.png" />,
        ]}
    />
);

skoash.start(DroughtOut);
