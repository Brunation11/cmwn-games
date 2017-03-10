import classNames from 'classnames';

import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import LetsCleanUpScreen from './components/lets_clean_up_screen';
import CatchGameLevelOne from './components/catch_game_level_one_screen';
import CatchGameLevelTwo from './components/catch_game_level_two_screen';
import CatchGameLevelThree from './components/catch_game_level_three_screen';
import CleanUpGameLvl1Screen from './components/clean_up_game_lvl1_screen';
import CleanUpGameLvl2Screen from './components/clean_up_game_lvl2_screen';
import CleanUpGameLvl3Screen from './components/clean_up_game_lvl3_screen';
import RoomScreen from './components/room_screen';
import SchoolScreen from './components/school_screen';
import GroundScreen from './components/ground_screen';
import SingAboutItScreen from './components/sing_about_it_screen';
import VideoScreen from './components/video_screen';
import GoodForYouScreen from './components/good_for_you_screen';
import TakePledgeScreen from './components/take_pledge_screen';
import CommitScreen from './components/commit_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

var LitterBug = (
    <skoash.Game
        config={config}
        screens={[
            iOSScreen,
            TitleScreen,
            LetsCleanUpScreen,
            CatchGameLevelOne,
            CatchGameLevelTwo,
            CatchGameLevelThree,
            RoomScreen,
            SchoolScreen,
            GroundScreen,
            SingAboutItScreen,
            VideoScreen,
            GoodForYouScreen,
            CleanUpGameLvl1Screen,
            CleanUpGameLvl2Screen,
            CleanUpGameLvl3Screen,
            TakePledgeScreen,
            CommitScreen,
            FlipScreen,
        ]}
        menus={{
            quit: QuitScreen,
        }}
        loader={<Loader />}
        getBackgroundIndex={function (index, id) {
            switch (id) {
                case 'clean-up-game-lvl-1':
                case 'clean-up-game-lvl-2':
                case 'clean-up-game-lvl-3':
                    return 1;
                default:
                    return 0;
            }
        }}
        assets={[
            <skoash.Audio ref="bkg-1" type="background" src={`${CMWN.MEDIA.EFFECT}s-bkg-1.mp3`} loop/>,
            <skoash.Audio
                ref="bkg-2"
                type="background"
                src={`${CMWN.MEDIA.EFFECT}game-theme-music-2.mp3`}
                loop
            />,
            <skoash.Audio ref="button" type="sfx" src={`${CMWN.MEDIA.EFFECT}s-bu-1.mp3`} />,
            <skoash.Image ref="img-bkg-1" className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg-1.png`} />,
            <skoash.Image ref="img-bkg-2" className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg-2.png`} />,
            <skoash.Image ref="img-bkg-3" className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg-3.png`} />,
            <skoash.Image ref="img-bkg-4" className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg-4.jpg`} />,
            <skoash.Image ref="img-bkg-5" className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg-5.png`} />,
            <skoash.Image
                className="hidden"
                src={`${CMWN.MEDIA.IMAGE}bkg-3.png`}
            />,
            <skoash.Image
                className="hidden"
                src={`${CMWN.MEDIA.IMAGE}bkg-5.png`}
            />,
            <skoash.Image
                className="hidden"
                src={`${CMWN.MEDIA.SPRITE}sprites-game2-1-01.png`}
            />,
            <skoash.Image
                className="hidden"
                src={`${CMWN.MEDIA.SPRITE}sprites-game2-2-01.png`}
            />,
            <skoash.Image
                className="hidden"
                src={`${CMWN.MEDIA.SPRITE}sprites-game2-3-01-min.jpg`}
            />,
            <skoash.Image
                className="hidden"
                src={`${CMWN.MEDIA.SPRITE}sprites-game2-4-01.png`}
            />,
            <skoash.Image
                className="hidden"
                src={`${CMWN.MEDIA.SPRITE}sprites-mr-eco-01.png`}
            />,
            <div className="background default" />,
            <div className="background title" />,
            <div className="background catch-game" />,
            <div className="background lets-clean-up" />,
            <div className="background clean-up-game" />,
            <div className="background select" />,
            <div className="background sun" />,
            <div className="background commit" />,
        ]}
        passData={function (opts) {
            this.setState(opts);
        }}
        getClassNames={function () {
            return classNames({'SUN': this.state.sun});
        }}
    />
);

skoash.start(LitterBug);

if (module.hot) module.hot.accept();
