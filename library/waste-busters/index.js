import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

var wasteBusters;

window.MEDIA_SERVER = ENVIRONMENT.MEDIA;
ENVIRONMENT.MEDIA += 'Games/WasteBusters/';

wasteBusters = (
    <skoash.Game
        config={config}
        loader={<Loader />}
        screens={[
            iOSScreen,
            TitleScreen,
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
