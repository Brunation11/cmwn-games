import classNames from 'classnames';

import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import LetsCleanUpScreen from './components/lets_clean_up_screen';
import CleanUpScreen from './components/clean_up_screen';
import RoomScreen from './components/room_screen';
import SchoolScreen from './components/school_screen';
import GroundScreen from './components/ground_screen';
import SingAboutItScreen from './components/sing_about_it_screen';
import VideoScreen from './components/video_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

// import 'shared/js/test-platform-integration';

class LitterBug extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: TitleScreen,
      2: LetsCleanUpScreen,
      3: CleanUpScreen,
      4: RoomScreen,
      5: SchoolScreen,
      6: GroundScreen,
      7: SingAboutItScreen,
      8: VideoScreen,
    };

    this.menus = {
      quit: <QuitScreen />,
    };
  }

  passData(opts) {
    this.setState(opts);
  }

  renderLoader() {
    return (
      <Loader />
    );
  }

  getClassNames() {
    return classNames({
      'SUN': this.state.sun
    }, skoash.Game.prototype.getClassNames.call(this));
  }

  renderAssets() {
    return (
      <div>
        <skoash.Audio ref="bkg-1" type="background" src="media/_BKG/S_BKG_1.mp3" loop/>
        <skoash.Audio ref="button" type="sfx" src="media/_Buttons/S_BU_1.mp3" />
        <skoash.Image ref="img-bkg-1" className="hidden" src="media/_BKG/BKG_1.png" />
        <skoash.Image ref="img-bkg-2" className="hidden" src="media/_BKG/BKG_2.png" />
        <skoash.Image ref="img-bkg-3" className="hidden" src="media/_BKG/BKG_3.png" />
        <skoash.Image ref="img-bkg-4" className="hidden" src="media/_BKG/BKG_4.png" />
        <skoash.Image ref="img-bkg-5" className="hidden" src="media/_BKG/BKG_5.png" />
        <div className="background lets-clean-up" />
        <div className="background select" />
        <div className="background sun" />
        <div className="background commit" />
      </div>
    );
  }

}

skoash.start(LitterBug, config.id);

import 'shared/js/google-analytics';
