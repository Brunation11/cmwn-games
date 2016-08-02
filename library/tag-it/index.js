import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import PreciousScreen from './components/precious_screen';
import NotToWasteScreen from './components/not_to_waste_screen';
import RecyclingArtsScreen from './components/recycling_arts_screen';
import ReminderScreen from './components/reminder_screen';
import Step1Screen from './components/step_1_screen';
import Step2Screen from './components/step_2_screen';
import Tip1Screen from './components/tip_1_screen';
import Tip2Screen from './components/tip_2_screen';
import WhatNeedScreen from './components/what_need_screen';
import NoteScreen from './components/note_screen';
import ScissorsAndPaintScreen from './components/scissors_and_paint_screen';
import Step3Screen from './components/step_3_screen';
import Step4Screen from './components/step_4_screen';
import Step5Screen from './components/step_5_screen';
import Hint1Screen from './components/hint_1_screen';
import Step6Screen from './components/step_6_screen';
import Step7Screen from './components/step_7_screen';
import Hint2Screen from './components/hint_2_screen';
import DecorateTagScreen from './components/decorate_tag_screen';
import Step8Screen from './components/step_8_screen';
import Hint3Screen from './components/hint_3_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

//import 'shared/js/test-platform-integration';

class TagIt extends skoash.Game {
  constructor() {
    super(config);

    this.screens = {
      0: iOSScreen,
      //1: TitleScreen,
      //1: PreciousScreen,
      //2: NotToWasteScreen,
      //3: RecyclingArtsScreen,
      //4: ReminderScreen,
      //5: Step1Screen,
      //6: WhatFaucetScreen,
      //7: Step2Screen,
       // 8: Tip1Screen,
        //9: Tip2Screen,
      //10: WhatNeedScreen,
        //11: NoteScreen,
        //12: ScissorsAndPaintScreen,
        //13: Step3Screen,
        //14: Step4Screen,
        //15: Step5Screen,
        //16: Hint1Screen,
        //17: Step6Screen,
        //18: Step7Screen,
        //19: Hint2Screen,
        //20: DecorateTagScreen,
        1: Step8Screen,
        2: Hint3Screen,
    };

    this.menus = {
      quit: QuitScreen,
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
        return 3;
     case 5:
        return;
     default:
       return 2;
     }
  }

  renderAssets() {
    return (
      <div>
        <skoash.Audio ref="bkg-1" type="background" src="media/_audio/_BKG/TI_BKG_1.mp3" />
        <skoash.Audio ref="bkg-2" type="background" src="media/_audio/_BKG/TI_BKG_2.mp3" />
        <skoash.Audio ref="bkg-3" type="background" src="media/_audio/_BKG/TI_BKG_3.mp3" />
        
        <skoash.Audio ref="sfx-1" type="background" src="media/_audio/S_Precious/TI_Water.mp3" />
        
        <skoash.Audio ref="btn-1" type="sfx" src="media/_audio/_Buttons/TI_BU_1.mp3" />
        <skoash.Audio ref="btn-2" type="sfx" src="media/_audio/_Buttons/TI_BU_2.mp3" />
        <skoash.Audio ref="screen-complete" type="sfx" src="media/_audio/_Buttons/TI_BU_3.mp3"/>
      </div>
    );
  }

}

skoash.start(TagIt, config.id);

import 'shared/js/google-analytics';
