import classNames from 'classnames';

import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import LetsCleanUpScreen from './components/lets_clean_up_screen';
import CleanUpGameLvl1Screen from './components/clean_up_game_lvl1_screen';
import CleanUpGameLvl2Screen from './components/clean_up_game_lvl2_screen';
import CleanUpScreen from './components/clean_up_screen';
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
    screens={{
      0: iOSScreen,
      1: TitleScreen,
      2: LetsCleanUpScreen,
      3: CleanUpScreen,
      4: RoomScreen,
      5: SchoolScreen,
      6: GroundScreen,
      7: SingAboutItScreen,
      8: VideoScreen,
      9: CleanUpGameLvl1Screen,
      10: CleanUpGameLvl1Screen,
      11: GoodForYouScreen,
      12: TakePledgeScreen,
      13: CommitScreen,
      14: FlipScreen,
    }}
    menus={{
      quit: QuitScreen,
    }}
    loader={<Loader />}
    assets={[
      <skoash.Audio ref="bkg-1" type="background" src="media/_BKG/S_BKG_1.mp3" loop/>,
      <skoash.Audio ref="button" type="sfx" src="media/_Buttons/S_BU_1.mp3" />,
      <div className="background default" />,
      <div className="background title" />,
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
