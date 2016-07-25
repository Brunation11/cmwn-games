import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import InfoAllAboutYouScreen from './components/info_all_about_you_screen';
import WhatMostPassionateScreen from './components/what_most_passionate_screen';
import WhatWorldIssuesScreen from './components/what_world_issues_screen';
import PickOnePowerfulScreen from './components/pick_one_powerful_screen';
import QualitiesBucketsScreen from './components/qualities_buckets_screen';
import EmojiBullyingScreen from './components/emoji_bullying_screen';
import EmojiCompassionScreen from './components/emoji_compassion_screen';
import EmojiAngryScreen from './components/emoji_angry_screen';
import EmojiFriendlinessScreen from './components/emoji_friendliness_screen';
import PickOneBulliedScreen from './components/pick_one_bullied_screen';
import WhatDidYouDoScreen from './components/what_did_you_do_screen';
import HowMuchEnvScreen from './components/how_much_env_screen';
import HowMuchSpeciesScreen from './components/how_much_species_screen';
import HowMuchWaterScreen from './components/how_much_water_screen';
// import PigScreen from './components/pig_screen';
// import InfoScreen from './components/info_screen';
// import VideoScreen from './components/video_screen';
// import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

// import 'shared/js/test-platform-integration';

class Survey extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: TitleScreen,
      2: InfoAllAboutYouScreen,
      3: WhatMostPassionateScreen,
      4: WhatWorldIssuesScreen,
      5: PickOnePowerfulScreen,
      6: QualitiesBucketsScreen,
      7: EmojiBullyingScreen,
      8: EmojiCompassionScreen,
      8: EmojiAngryScreen,
      9: EmojiFriendlinessScreen,
      10: PickOneBulliedScreen,
      11: WhatDidYouDoScreen,
      12: HowMuchEnvScreen,
      13: HowMuchSpeciesScreen,
      14: HowMuchWaterScreen
      // 2: BulbsScreen,
      // 3: PigScreen,
      // 4: SwitchesScreen,
      // 5: InfoScreen,
      // 6: VideoScreen,
      // 7: FlipScreen,
    };

    this.menus = {
      quit: <QuitScreen />,
    };
  }

  renderLoader() {
    return (
      <Loader />
    );
  }

  getBackgroundIndex(currentScreenIndex) {
    switch (currentScreenIndex) {
      case 1:
        return 0;
      default:
        return;
    }
  }

  renderAssets() {
    return (
      <div>
        <skoash.Audio ref="bkg-1" type="background" src="media/assets/_audio/_BKG/S_BKG_3.mp3" />
        <skoash.Audio ref="button" type="sfx" src="media/assets/_audio/_Buttons/S_BU_1.mp3" />
        <skoash.Audio ref="screen-complete" type="sfx" src="media/assets/_audio/_Buttons/S_BU_4.mp3" />
        <skoash.Audio ref="correct" type="sfx" src="media/_Buttons/S_BU_3.mp3" />
      </div>
    );
  }

}

skoash.start(Survey, config.id);

import 'shared/js/google-analytics';

// unable to reference drag/drop audio?
// fix css for next and previous arrows
//