import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import LevelOneScreen from './components/level_one_screen';
import LevelTwoScreen from './components/level_two_screen';
import LevelThreeScreen from './components/level_three_screen';
import LevelFourScreen from './components/level_four_screen';
import LevelFiveScreen from './components/level_five_screen';

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
            LevelFourScreen,
            LevelFiveScreen,
        ]}
        menus={{
            quit: QuitScreen,
        }}
        assets={[
            <skoash.Font name="Source Sans Pro" />,
            <skoash.Image
                src={MEDIA.SPRITE + 'game1.timelevelscore.png'}
                className="hidden"
            />,
            <skoash.Image
                src={MEDIA.SPRITE + 'game1.metericons.png'}
                className="hidden"
            />,
            <skoash.Audio
                type="background"
                src={MEDIA.EFFECT + 'OpeningSequence.mp3'}
            />
        ]}
        getBackgroundIndex={(index, id) => {
            switch (id) {
                case 'ios-splash': return;
                case 'title': return 0;
            }
        }}
    />
);
