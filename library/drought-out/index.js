import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import ThinkScreen from './components/think_screen';
import InfoNoWaterScreen from './components/info_no_water_screen';
import InfoImpactScreen from './components/info_impact_screen';
import InfoNeedWaterScreen from './components/info_need_water_screen';
import InfoUseWaterScreen from './components/info_use_water_screen';
import BalloonsScreen from './components/balloons_screen';
import InfoEnvironmentScreen from './components/info_environment_screen';
import InfoEnvironmentEffectsScreen from './components/info_environment_effects_screen';
import EnvironmentEffectsScreen from './components/environment_effects_screen';
import InfoHumanEffectsScreen from './components/info_human_effects_screen';
import HumanEffectsScreen from './components/human_effects_screen';
import WhatCanWeDoScreen from './components/what_can_we_do_screen';
import InfoDrainScreen from './components/info_drain_screen';
import InfoUsingLessScreen from './components/info_using_less_screen';
import ShowerScreen from './components/shower_screen';
import ConserveScreen from './components/conserve_screen';
import HeroScreen from './components/hero_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

var DroughtOut = (
    <skoash.Game
        config={config}
        screens={{
            0: iOSScreen,
            1: TitleScreen,
            2: ThinkScreen,
            3: InfoNoWaterScreen,
            4: InfoImpactScreen,
            5: InfoNeedWaterScreen,
            6: InfoUseWaterScreen,
            7: BalloonsScreen,
            8: InfoEnvironmentScreen,
            9: InfoEnvironmentEffectsScreen,
            10: EnvironmentEffectsScreen,
            11: InfoHumanEffectsScreen,
            12: HumanEffectsScreen,
            13: WhatCanWeDoScreen,
            14: InfoDrainScreen,
            15: InfoUsingLessScreen,
            16: ShowerScreen,
            17: ConserveScreen,
            18: HeroScreen,
            19: FlipScreen
        }}
        menus={{
            quit: QuitScreen,
        }}
        loader={<Loader />}
        getBackgroundIndex={screenIndex => {
            if (screenIndex < 2) return 0;
            if (screenIndex === 2) return;
            if (screenIndex < 6) return 1;
            if (screenIndex < 9) return 2;
            if (screenIndex < 14) return 3;
            if (screenIndex === 14) return 4;
            if (screenIndex === 15) return 5;
            if (screenIndex === 16) return 6;
            if (screenIndex < 19) return 7;
            if (screenIndex === 19) return 8;
        }}
        assets={[
            <skoash.Audio ref="bkg-0" type="background" src="media/S_1/S_1.1.mp3" />,
            <skoash.Audio ref="bkg-1" type="background" src="media/_BKG/S_BKG_1.mp3" loop />,
            <skoash.Audio ref="bkg-2" type="background" src="media/_BKG/S_BKG_2.mp3" loop />,
            <skoash.Audio ref="bkg-3" type="background" src="media/_BKG/S_BKG_3.mp3" loop />,
            <skoash.Audio ref="bkg-4" type="background" src="media/S_14/S_14.1.mp3" />,
            <skoash.Audio ref="bkg-5" type="background" src="media/S_15/S_15.1.mp3" />,
            <skoash.Audio ref="bkg-6" type="background" src="media/S_16/S_16.1.mp3" />,
            <skoash.Audio ref="bkg-7" type="background" src="media/_BKG/S_BKG_4.mp3" loop />,
            <skoash.Audio ref="bkg-8" type="background" src="media/S_19/S_19.1.mp3" />,
            <skoash.Audio ref="button" type="sfx" src="media/_Buttons/S_BU_1.mp3" />,
            <skoash.Audio ref="screen-complete" type="sfx" src="media/_Buttons/S_BU_2.mp3" />,
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
