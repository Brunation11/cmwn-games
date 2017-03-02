import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import ExcelScreen from './components/excel_screen';
import RolesScreen from './components/roles_screen';
import LookOutScreen from './components/look_out_screen';
import VideoScreen from './components/video_screen';
import FeelScreen from './components/feel_screen';
import MoveScreen from './components/move_screen';
import Video2Screen from './components/video_2_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from './components/quit_screen';

skoash.start(
    <skoash.Game
        config={config}
        screens={{
            0: iOSScreen,
            1: TitleScreen,
            2: ExcelScreen,
            3: RolesScreen,
            4: LookOutScreen,
            5: VideoScreen,
            6: FeelScreen,
            7: MoveScreen,
            8: Video2Screen,
            9: FlipScreen,
        }}
        menus={{
            quit: QuitScreen,
        }}
        loader={<Loader />}
        assets={[
            <skoash.Audio ref="bkg-1" type="background" src={`${CMWN.MEDIA.EFFECT}s-bkg-1.mp3`} loop />,
            <skoash.Audio ref="bkg-2" type="background" src={`${CMWN.MEDIA.EFFECT}s-bkg-2.mp3`} loop />,
            <skoash.Audio ref="bkg-3" type="background" src={`${CMWN.MEDIA.EFFECT}s-13-1.mp3`} />,
            <skoash.Audio ref="button" type="sfx" src={`${CMWN.MEDIA.EFFECT}s-bu-1.mp3`} />,
            <skoash.Audio ref="close" type="sfx" src={`${CMWN.MEDIA.EFFECT}s-close-1.mp3`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg-1.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg-2.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg-4.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg-5.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg-6.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg-7.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg-8.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.FRAME}fr-10.png`} />,
            <div className="background default" />,
            <div className="background excel" />,
            <div className="background look-out" />,
            <div className="background feel" />,
            <div className="background movie" />,
            <div className="background upload" />,
            <div className="background flip" />,
        ]}
    />
);

if (module.hot) module.hot.accept();
