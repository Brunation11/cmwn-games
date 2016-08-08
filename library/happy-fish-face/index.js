import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import YouFeelScreen from './components/you_feel_screen';
import WaterPollutionScreen from './components/water_pollution_screen';
import HealthyWaterScreen from './components/healthy_water_screen';
import CleanWaterScreen from './components/clean_water_screen';
import BubbleUpScreen from './components/bubble_up_screen';
import MultiBubblesScreen from './components/multi_bubbles_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

//import 'shared/js/test-platform-integration';

class HappyFishFace extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: TitleScreen,
      2: YouFeelScreen,
      3: WaterPollutionScreen,
      4: HealthyWaterScreen,
      5: CleanWaterScreen,
      6: BubbleUpScreen,
      7: MultiBubblesScreen,
    };

    this.menus = {
      quit: QuitScreen,
    };
  }

  getClassNames() {
    var classNames = super.getClassNames();
    var index = this.state.currentScreenIndex;
    if (index > 1 && index < 6) {
      classNames = classNames + ' garbage';
    }
    return classNames;
  }

  renderLoader() {
    return (
      <Loader />
    );
  }

  renderAssets() {
    return (
      <div>
        <skoash.Audio ref="bkg-1" type="background" src="media/_audio/_BKG/HFF_SX_BKG_1.mp3" />
        <skoash.Audio ref="bkg-2" type="background" src="media/_audio/_BKG/HFF_SX_BKG_1.mp3" />
        <div className="background garbage"></div>
      </div>
    );
  }

  render() {
    return (
      <div className={'pl-game ' + this.getClassNames()} style={this.getStyles()}>
        {this.renderLoader()}
        {this.renderAssets()}
        {this.renderMenu()}
        {this.renderScreens()}
        {this.renderMenuScreens()}
      </div>
    );
  }

}

skoash.start(HappyFishFace, config.id);

import 'shared/js/google-analytics';
