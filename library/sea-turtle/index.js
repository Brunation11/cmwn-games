import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import VideoScreen from './components/video_screen';
import InfoGlobeScreen from './components/info_globe_screen';
import GlobeScreen from './components/globe_screen';
import InfoTrashScreen from './components/info_trash_screen';
import TrashScreen from './components/trash_screen';
import InfoKeepGoingScreen from './components/info_keep_going_screen';
import InfoJellyScreen from './components/info_jelly_screen';
import JellyfishScreen from './components/jellyfish_screen';
import FlipScreen from './components/flip_screen';
import QuitScreen from 'shared/components/quit_screen/0.1';

var SeaTurtle = (
    <skoash.Game
        config={config}
        screens={{
            0: iOSScreen,
            1: TitleScreen,
            2: VideoScreen,
            3: InfoGlobeScreen,
            4: GlobeScreen,
            5: InfoTrashScreen,
            6: TrashScreen,
            7: InfoKeepGoingScreen,
            8: InfoJellyScreen,
            9: JellyfishScreen,
            10: FlipScreen,
        }}
        menus={{
            quit: QuitScreen,
        }}
        loader={<Loader />}
        getBackgroundIndex={index => {
            if (index < 2) return 0;
            if (index >= 3 && index < 5) return 1;
            if (index >= 5 && index < 7) return 2;
            if (index === 7) return 3;
            if (index >= 8 && index < 10) return 4;
            if (index === 10) return 5;

            return -1;
        }}
        assets={[
            <skoash.Audio ref="bkg-1" type="background" src={`${CMWN.MEDIA.EFFECT}so-1-1.mp3`} />,
            <skoash.Audio ref="bkg-2" type="background" src={`${CMWN.MEDIA.EFFECT}1.mp3`} loop />,
            <skoash.Audio ref="bkg-3" type="background" src={`${CMWN.MEDIA.EFFECT}3.mp3`} loop />,
            <skoash.Audio ref="bkg-4" type="background" src={`${CMWN.MEDIA.EFFECT}so-7-1.mp3`} />,
            <skoash.Audio ref="bkg-5" type="background" src={`${CMWN.MEDIA.EFFECT}3.mp3`} loop />,
            <skoash.Audio ref="bkg-6" type="background" src={`${CMWN.MEDIA.EFFECT}3.mp3`} loop />,
            <skoash.Audio ref="button" type="sfx" src={`${CMWN.MEDIA.EFFECT}button.mp3`} />,
            <skoash.Audio
                ref="screen-complete"
                type="sfx"
                src={`${CMWN.MEDIA.EFFECT}button-next-activated.mp3`}
            />,
        ]}
    />
);

skoash.start(SeaTurtle);

if (module.hot) module.hot.accept();
