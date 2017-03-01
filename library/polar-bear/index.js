import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import InfoMajesticScreen from './components/info_majestic_screen';
import QuestionWhatColorScreen from './components/question_what_color_screen';
import ChooseWhatColorScreen from './components/choose_what_color_screen';
import AnswerWhatColorScreen from './components/answer_what_color_screen';
import QuestionWhereScreen from './components/question_where_screen';
import ChooseWhereScreen from './components/choose_where_screen';
import InfoCarouselScreen from './components/info_carousel_screen';
import ChooseCarouselScreen from './components/choose_carousel_screen';
import InfoExperimentScreen from './components/info_experiment_screen';
import InfoTemperatureScreen from './components/info_temperature_screen';
import InfoLayerScreen from './components/info_layer_screen';
import ExperimentNeededScreen from './components/experiment_needed_screen';
import ExperimentStepOneScreen from './components/experiment_step_one_screen';
import ExperimentStepTwoScreen from './components/experiment_step_two_screen';
import ExperimentStepThreeScreen from './components/experiment_step_three_screen';
import ExperimentStepFourScreen from './components/experiment_step_four_screen';
import ExperimentWhichHandScreen from './components/experiment_which_hand_screen';
import ExperimentWhyWarmerScreen from './components/experiment_why_warmer_screen';
import ExperimentHowWarmerScreen from './components/experiment_how_warmer_screen';
import ExperimentDiscoverScreen from './components/experiment_discover_screen';
import FlipScreen from './components/flip_screen';
import QuitScreen from 'shared/components/quit_screen/0.1';

class PolarBear extends skoash.Game {
    constructor() {
        super(config);

        this.screens = {
            0: iOSScreen,
            1: TitleScreen,
            2: InfoMajesticScreen,
            3: QuestionWhatColorScreen,
            4: ChooseWhatColorScreen,
            5: AnswerWhatColorScreen,
            6: QuestionWhereScreen,
            7: ChooseWhereScreen,
            8: InfoCarouselScreen,
            9: ChooseCarouselScreen,
            10: InfoExperimentScreen,
            11: InfoTemperatureScreen,
            12: InfoLayerScreen,
            13: ExperimentNeededScreen,
            14: ExperimentStepOneScreen,
            15: ExperimentStepTwoScreen,
            16: ExperimentStepThreeScreen,
            17: ExperimentStepFourScreen,
            18: ExperimentWhichHandScreen,
            19: ExperimentWhyWarmerScreen,
            20: ExperimentHowWarmerScreen,
            21: ExperimentDiscoverScreen,
            22: FlipScreen
        };

        this.menus = {
            quit: QuitScreen
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
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
                return 3;
            case 8:
            case 10:
            case 22:
                return 4;
            case 2:
                return 0;
            case 9:
                return 1;
            default:
                return;
        }
    }

    renderAssets() {
        return (
            <div>
                <skoash.Audio ref="bkg-1" type="background" src="media/audio/SO_BKG_1.mp3" />
                <skoash.Audio ref="bkg-2" type="background" src="media/audio/SO_BKG_2.mp3" />
                <skoash.Audio ref="bkg-3" type="background" src="media/audio/SO_BKG_3.wav" />
                <skoash.Audio ref="bkg-4" type="background" src="media/audio/SO_BKG_4.mp3" />
                <skoash.Audio ref="bkg-5" type="background" src="media/audio/SO_5.1.mp3" />
                <skoash.Audio ref="button" type="sfx" src="media/audio/button.mp3" />
                <skoash.Audio ref="screen-complete" type="sfx" src="media/audio/screen-complete.mp3" />
            </div>
        );
    }

}

skoash.start(PolarBear, config.id);

if (module.hot) module.hot.accept();
