import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import YouFeelScreen from './components/you_feel_screen';
import WaterPollutionScreen from './components/water_pollution_screen';
import HealthyWaterScreen from './components/healthy_water_screen';

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
    };

    this.menus = {
      quit: QuitScreen,
    };
  }

  getClassNames() {
    var classNames = super.getClassNames();
    var index = this.state.currentScreenIndex;
    if (index > 1 && index < 5) {
      classNames = classNames + ' garbage';
    }
    return classNames;
  }

  renderBackgrounds() {
    return (
      <div className="background garbage"></div>
    );
  }

  renderLoader() {
    return (
      <Loader />
    );
  }

  renderAssets() {
    return (
      <div>
        <skoash.Audio ref="bkg-1" type="background" src="media/_audio/_BKG/HFF_SX_BKG_1.mp3" loop />
      </div>
    );
  }

  render() {
    return (
      <div className={'pl-game ' + this.getClassNames()} style={this.getStyles()}>
        {this.renderBackgrounds()}
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
