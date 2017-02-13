import config from './config';

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
import DrainScreen from './components/drain_screen';
import UsingLessScreen from './components/using_less_screen';
import ShowerScreen from './components/shower_screen';
import ConserveScreen from './components/conserve_screen';
import HeroScreen from './components/hero_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

var DroughtOut;

DroughtOut = (
    <skoash.Game
        config={config}
        screens={[
            iOSScreen,
            TitleScreen,
            ThinkScreen,
            InfoNoWaterScreen,
            HumansAnimalsScreen,
            InfoUseWaterScreen,
            BalloonsScreen,
            GreatJobScreen,
            DroughtEffectsScreen,
            EnvironmentEffectsScreen,
            WhatCanWeDoScreen,
            DrainScreen,
            UsingLessScreen,
            ShowerScreen,
            ConserveScreen,
            HeroScreen,
            FlipScreen
        ]}

        menus={{
            quit: QuitScreen,
        }}
        loader={<Loader />}
        getBackgroundIndex={(index, id) => {
            switch (id) {
                case 'title':
                    return 0;
                case 'think':
                    return;
                case 'info-no-water':
                case 'info-impact':
                case 'info-need-water':
                case 'info-use-water':
                    return 1;
                case 'balloons':
                case 'info-great-job':
                    return 2;
                case 'info-environment-effects':
                case 'environment-effects':
                case 'what-can-we-do':
                    return 3;
                case 'conserve':
                case 'hero':
                    return 4;
                case 'info-drain':
                case 'shower':
                    return 5;
                case 'info-using-less':
                    return 6;
                case 'flip':
                    return 7;
            }
        }}
        assets={[
            <skoash.Audio
                ref="bkg-0"
                type="background"
                src={MEDIA.EFFECT + 'Theme.mp3'}
            />,
            <skoash.Audio
                ref="bkg-1"
                type="background"
                src={MEDIA.EFFECT + 'BKG1.mp3'}
                loop
            />,
            <skoash.Audio
                ref="bkg-2"
                type="background"
                src={MEDIA.EFFECT + 'BKG2.mp3'}
                loop
            />,
            <skoash.Audio
                ref="bkg-3"
                type="background"
                src={MEDIA.EFFECT + 'BKG3.mp3'}
                loop
            />,
            <skoash.Audio
                ref="bkg-4"
                type="background"
                src={MEDIA.EFFECT + 'BKG4.mp3'}
            />,
            <skoash.Audio
                ref="bkg-5"
                type="background"
                src={MEDIA.EFFECT + 'BKG5.mp3'}
            />,
            <skoash.Audio
                ref="bkg-6"
                type="background"
                src={MEDIA.EFFECT + 'CashRegister.mp3'}
            />,
            <skoash.Audio
                ref="bkg-7"
                type="background"
                src={MEDIA.EFFECT + 'FlipBKG.mp3'}
                volume={.8}
            />,
            <skoash.Audio
                ref="button"
                type="sfx"
                src={MEDIA.EFFECT + 'Next.mp3'}
            />,
            <skoash.Audio
                ref="screen-complete"
                type="sfx"
                src={MEDIA.EFFECT + 'WhooHoo.mp3'}
            />,
            <div className="background-1" />,
            <div className="background-2" />,
            <div className="background-3" />,
            <div className="background-4" />,
            <div className="background-5" />,
            <skoash.Image
                ref="bkg-image-1"
                className="hidden"
                src={MEDIA.IMAGE + 'BKG_1.jpg'}
            />,
            <skoash.Image
                ref="bkg-image-2"
                className="hidden"
                src={MEDIA.IMAGE + 'BKG_2.jpg'}
            />,
            <skoash.Image
                ref="bkg-image-3"
                className="hidden"
                src={MEDIA.IMAGE + 'BKG_3.jpg'}
            />,
            <skoash.Image
                ref="bkg-image-4"
                className="hidden"
                src={MEDIA.IMAGE + 'BKG_4.jpg'}
            />,
            <skoash.Image
                ref="bkg-image-5"
                className="hidden"
                src={MEDIA.IMAGE + 'BKG_5.jpg'}
            />,
            <skoash.Image
                ref="buttons"
                className="hidden"
                src={MEDIA.SPRITE + 'BU_1.png'}
            />,
        ]}
    />
);

skoash.start(DroughtOut);

if (module.hot) module.hot.accept();
