import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import InfoScreen from './components/info_screen';
import DragNDropPassionateScreen from './components/drag_n_drop_passionate_screen';
import DragNDropIssuesScreen from './components/drag_n_drop_issues_screen';
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
import DragNDropInterestsScreen from './components/drag_n_drop_interests_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from './components/quit_screen';

class AllAboutYou extends skoash.Game {
    constructor() {
        super(config);

        this.screens = {
            0: iOSScreen,
            1: TitleScreen,
            2: InfoScreen,
            3: DragNDropPassionateScreen,
            4: DragNDropIssuesScreen,
            5: PickOnePowerfulScreen,
            6: EmojiBullyingScreen,
            7: EmojiCompassionScreen,
            8: EmojiAngryScreen,
            9: EmojiFriendlinessScreen,
            10: PickOneBulliedScreen,
            11: WhatDidYouDoScreen,
            12: HowMuchEnvScreen,
            13: HowMuchSpeciesScreen,
            14: HowMuchWaterScreen,
            15: DragNDropInterestsScreen,
            16: QualitiesBucketsScreen,
            17: FlipScreen
        };

        this.menus = {
            quit: QuitScreen
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
            case 17:
                return 1;
            default:
                return;
        }
    }

    emitSave(highestScreenIndex, currentScreenIndex) {
        var data = {};
        if (currentScreenIndex !== 17) return;
        if (this && this.refs) {
            _.forEach(this.refs, (screen, key) => {
                if (key.indexOf('screen-') === -1) return;
                if (screen.metaData) {
                    data[key] = screen.metaData;
                } else {
                    if (typeof screen.collectData === 'function') {
                        data[key] = screen.collectData();
                    }
                }
            });
        }

        this.emit({
            name: 'save',
            game: this.config.id,
            version: this.config.version,
            highestScreenIndex,
            currentScreenIndex,
            data
        });
    }

    load(opts) {
        if (this && this.refs && opts.data) {
            _.forEach(this.refs, (screen, key) => {
                if (key.indexOf('screen-') === -1) return;
                if (typeof screen.loadData === 'function') {
                    if (opts.data[key] && !_.isEmpty(opts.data[key])) {
                        screen.metaData = opts.data[key];
                    }
                }
            });
        }
    }

    renderAssets() {
        return (
            <div>
                <skoash.Audio
                    ref="bkg-1"
                    type="background"
                    src="media/assets/_audio/_BKG/S_BKG_3.mp3"
                />
                <skoash.Audio
                    ref="bkg-2"
                    type="background"
                    src="media/assets/_audio/_BKG/S_BKG_2.mp3"
                />
                <skoash.Audio
                    ref="button"
                    type="sfx"
                    src="media/assets/_audio/_Buttons/S_BU_1.mp3"
                />
                <skoash.Audio
                    ref="screen-complete"
                    type="sfx"
                    src="media/assets/_audio/_Buttons/S_BU_4.mp3"
                />
            </div>
        );
    }

}

skoash.start(AllAboutYou, config.id);

if (module.hot) module.hot.accept();
