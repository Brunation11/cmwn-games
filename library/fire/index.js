import config from './config.game';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import InfoChemicalScreen from './components/info_chemical_screen';
import InfoFuelOxygenScreen from './components/info_fuel_oxygen_screen';
import InfoForrestScreen from './components/info_forrest_screen';
import AlarmScreen from './components/alarm_screen';
import WhoScreen from './components/who_screen';
import MenAndWomenScreen from './components/men_and_women_screen';
import TriangleScreen from './components/triangle_screen';
import BreakTriangleScreen from './components/break_triangle_screen';
import LadderScreen from './components/ladder_screen';
import ChooseScreen from './components/choose_screen';
import NeedScreen from './components/need_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

import 'shared/js/test-platform-integration';

class Fire extends skoash.Game {
    constructor() {
        super(config);

        this.screens = {
            0: iOSScreen,
            1: TitleScreen,
            2: InfoChemicalScreen,
            3: InfoFuelOxygenScreen,
            4: InfoForrestScreen,
            5: AlarmScreen,
            6: WhoScreen,
            7: MenAndWomenScreen,
            8: TriangleScreen,
            9: BreakTriangleScreen,
            10: LadderScreen,
            11: ChooseScreen,
            12: NeedScreen,
            13: FlipScreen,
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

    getClassNames() {
        var classNames = super.getClassNames();
        var index = this.state.currentScreenIndex;
        if (index >= 4 && index < 5) return classNames + ' BKG-2';
        if (index >= 5) return classNames + ' BKG-3';
        return classNames;
    }

    renderAssets() {
        return (
      <div>
        <skoash.Audio ref="bkg-1" type="background" src="media/_BKG/S_BKG_1.mp3" loop />
        <skoash.Audio ref="button" type="sfx" src="media/_Buttons/S_BU_1.mp3" />
        <skoash.Audio ref="screen-complete" type="sfx" src="media/_Buttons/S_BU_2.mp3" />
        <div className="background BKG-2" />
        <div className="background BKG-3" />
      </div>
    );
    }

}

skoash.start(Fire, config.id);

import 'shared/js/google-analytics';
