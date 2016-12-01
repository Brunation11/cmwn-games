import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import LevelOneScreen from './components/level_one_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

ENVIRONMENT.MEDIA_GAME = ENVIRONMENT.MEDIA + 'Games/WasteBusters/';

let wasteBusters = (
    <skoash.Game
        config={config}
        loader={<Loader />}
        screens={[
            iOSScreen,
            LevelOneScreen,
        ]}
        menus={{
            quit: QuitScreen,
        }}
        assets={[
            <skoash.Font name="Source Sans Pro" />,
        ]}
    />
);

skoash.start(wasteBusters);
