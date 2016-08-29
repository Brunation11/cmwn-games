import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import InfoWelcomeScreen from './components/info_welcome_screen';
import IDCarnivoreScreen from './components/id_carnivore_screen';
import IDMarsupialScreen from './components/id_marsupial_screen';
import IDRodantScreen from './components/id_rodant_screen';
import IDArachnidScreen from './components/id_arachnid_screen';
import IDMammalScreen from './components/id_mammal_screen';
import IDMolluskScreen from './components/id_mollusk_screen';
import IDReptileScreen from './components/id_reptile_screen';
import IDHerbivoreScreen from './components/id_herbivore_screen';
import InfoGoodJobScreen from './components/info_good_job_screen';
import InfoMatchScreen from './components/info_match_screen';
import MatchScreen from './components/match_screen';
import InfoDetailScreen from './components/info_detail_screen';
import InfoSnoutScreen from './components/info_snout_screen';
import WhatDoesANoseScreen from './components/what_does_a_nose_screen';
import InfoSneezersScreen from './components/info_sneezers_screen';
import DNDLionScreen from './components/dnd_lion_screen';
import DNDSlothScreen from './components/dnd_sloth_screen';
import DNDWolfScreen from './components/dnd_wolf_screen';
import DNDElephantScreen from './components/dnd_elephant_screen';
import DNDDragonScreen from './components/dnd_dragon_screen';
import DNDPigScreen from './components/dnd_pig_screen';
import DNDGorillaScreen from './components/dnd_gorilla_screen';
import DNDMuleScreen from './components/dnd_mule_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

import 'shared/js/test-platform-integration';

class AnimalID extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      1: TitleScreen,
      2: InfoWelcomeScreen,
      3: IDCarnivoreScreen,
      4: IDMarsupialScreen,
      5: IDRodantScreen,
      6: IDArachnidScreen,
      7: IDMammalScreen,
      8: IDMolluskScreen,
      9: IDReptileScreen,
      10: IDHerbivoreScreen,
      11: InfoGoodJobScreen,
      12: InfoMatchScreen,
      13: MatchScreen,
      14: InfoDetailScreen,
      15: InfoSnoutScreen,
      16: WhatDoesANoseScreen,
      17: InfoSneezersScreen,
      18: DNDLionScreen,
      19: DNDSlothScreen,
      20: DNDWolfScreen,
      21: DNDElephantScreen,
      22: DNDDragonScreen,
      23: DNDPigScreen,
      24: DNDGorillaScreen,
      25: DNDMuleScreen,
      26: FlipScreen
    };

    this.menus = {
      quit: QuitScreen,
    };

    this.state.data.screens = _.map(this.screens, () => ({}));
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
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return 2;
    case 11:
      return 5;
    case 12:
    case 13:
    case 14:
      return 3;
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
      return 4;
    default:
      return;
    }
  }

  renderAssets() {
    return (
      <div>
        <skoash.Audio ref="bkg-0" type="background" src="media/audio/title.mp3" />
        <skoash.Audio ref="bkg-1" type="background" src="media/audio/background/BKG_3.mp3" />
        <skoash.Audio ref="bkg-2" type="background" src="media/audio/background/id.mp3" loop />
        <skoash.Audio ref="bkg-3" type="background" src="media/audio/background/match.mp3" />
        <skoash.Audio ref="bkg-4" type="background" src="media/audio/background/nose.mp3" />
        <skoash.Audio ref="bkg-5" type="background" src="media/audio/S_11.1.mp3" />

        <skoash.Audio ref="button" type="sfx" src="media/audio/button.mp3" />
        <skoash.Audio ref="screen-complete" type="sfx" src="media/audio/complete.mp3" />
      </div>
    );
  }

}

skoash.start(AnimalID, config.id);

import 'shared/js/google-analytics';
