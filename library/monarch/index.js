import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
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
            LevelOneScreen,
            LevelTwoScreen,
            LevelThreeScreen,
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
                src={`${MEDIA.FRAME}monarch.fact.png`}
            />,
            <skoash.Image
                className="hidden"
                src={`${MEDIA.FRAME}try.again.frame.png`}
            />,
            <div className="background title" />,
        ]}
        getBackgroundIndex={(index, id) => {
            switch (id) {
                case 'ios-splash': return;
                case 'title':
                    return;
                case 'phaser-level-1':
                case 'phaser-level-2':
                case 'phaser-level-3':
                    return;
                case 'flip':
                    return;
            }
        }}
    />
);

if (module.hot) module.hot.accept();
