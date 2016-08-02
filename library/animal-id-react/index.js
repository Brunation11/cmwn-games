import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import InfoWelcomeScreen from './components/info_welcome_screen';
import IDCarnivoreScreen from './components/id_carnivore_screen';
import IDMarsupialScreen from './components/id_marsupial_screen';
import IDRodantScreen from './components/id_rodant_screen';
// import DragNDropPassionateScreen from './components/drag_n_drop_passionate_screen';
// import DragNDropIssuesScreen from './components/drag_n_drop_issues_screen';
// import PickOnePowerfulScreen from './components/pick_one_powerful_screen';
// import QualitiesBucketsScreen from './components/qualities_buckets_screen';
// import EmojiBullyingScreen from './components/emoji_bullying_screen';
// import EmojiCompassionScreen from './components/emoji_compassion_screen';
// import EmojiAngryScreen from './components/emoji_angry_screen';
// import EmojiFriendlinessScreen from './components/emoji_friendliness_screen';
// import PickOneBulliedScreen from './components/pick_one_bullied_screen';
// import WhatDidYouDoScreen from './components/what_did_you_do_screen';
// import HowMuchEnvScreen from './components/how_much_env_screen';
// import HowMuchSpeciesScreen from './components/how_much_species_screen';
// import HowMuchWaterScreen from './components/how_much_water_screen';
// import DragNDropInterestsScreen from './components/drag_n_drop_interests_screen';
// import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

// import 'shared/js/test-platform-integration';

class AnimalIDReact extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: TitleScreen,
      2: InfoWelcomeScreen,
      3: IDCarnivoreScreen,
      4: IDMarsupialScreen,
      5: IDRodantScreen
      // 3: DragNDropPassionateScreen,
      // 4: DragNDropIssuesScreen,
      // 5: PickOnePowerfulScreen,
      // 6: QualitiesBucketsScreen,
      // 7: EmojiBullyingScreen,
      // 8: EmojiCompassionScreen,
      // 9: EmojiAngryScreen,
      // 10: EmojiFriendlinessScreen,
      // 11: PickOneBulliedScreen,
      // 12: WhatDidYouDoScreen,
      // 13: HowMuchEnvScreen,
      // 14: HowMuchSpeciesScreen,
      // 15: HowMuchWaterScreen,
      // 16: DragNDropInterestsScreen,
      // 17: FlipScreen
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
    case 2:
    case 3:
    case 4:
    case 5:
      return 2;
    default:
      return 0;
    }
  }

  renderAssets() {
    return (
      <div>
        <skoash.Audio ref="bkg-1" type="background" src="media/audio/title.mp3" />
        <skoash.Audio ref="bkg-2" type="background" src="media/audio/background/BKG_3.mp3" />
        <skoash.Audio ref="bkg-3" type="background" src="media/audio/background/id.mp3" />
        <skoash.Audio ref="bkg-4" type="background" src="media/audio/background/match.mp3" />
        <skoash.Audio ref="bkg-5" type="background" src="media/audio/background/nose.mp3" />
        <skoash.Audio ref="button" type="sfx" src="media/audio/button.mp3" />
        <skoash.Audio ref="screen-complete" type="sfx" src="media/audio/complete.mp3" />
      </div>
    );
  }

}

skoash.start(AnimalIDReact, config.id);

import 'shared/js/google-analytics';
