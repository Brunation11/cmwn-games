import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import EatAndDrinkScreen from './components/eat_and_drink_screen';
import LearnAndCreateScreen from './components/learn_and_create_screen';
import WhatHappensScreen from './components/what_happens_screen';
import VideoScreen from './components/video_screen';
import BetterWaysScreen from './components/better_ways_screen';
import ClickCardsScreen from './components/click_cards_screen';
import CardsScreen from './components/cards_screen';
import TimeToCollectScreen from './components/time_to_collect_screen';
import LetsPlayScreen from './components/lets_play_screen';
import RememberScreen from './components/remember_screen';
import LevelOneScreen from './components/level_one_screen';
import LevelTwoScreen from './components/level_two_screen';
import LevelThreeScreen from './components/level_three_screen';
import LevelFourScreen from './components/level_four_screen';
import LevelFiveScreen from './components/level_five_screen';
// import BonusRoundScreen from './components/bonus_round_screen';
import NeighborhoodWasteScreen from './components/neighborhood_waste_screen';
import TypesOfWasteScreen from './components/types_of_waste_screen';
import WasteSortCenterScreen from './components/waste_sort_center_screen';
import SortingLevelOneScreen from './components/sorting_level_one_screen';
import SortingLevelTwoScreen from './components/sorting_level_two_screen';
import SortingLevelThreeScreen from './components/sorting_level_three_screen';
import TakeActionScreen from './components/take_action_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

skoash.start(
    <skoash.Game
        config={config}
        loader={<Loader />}
        screens={[
            iOSScreen,
            TitleScreen,
            EatAndDrinkScreen,
            LearnAndCreateScreen,
            WhatHappensScreen,
            VideoScreen,
            BetterWaysScreen,
            ClickCardsScreen,
            CardsScreen,
            TimeToCollectScreen,
            LetsPlayScreen,
            RememberScreen,
            LevelOneScreen,
            LevelTwoScreen,
            LevelThreeScreen,
            LevelFourScreen,
            LevelFiveScreen,
            // BonusRoundScreen,
            NeighborhoodWasteScreen,
            TypesOfWasteScreen,
            WasteSortCenterScreen,
            SortingLevelOneScreen,
            SortingLevelTwoScreen,
            SortingLevelThreeScreen,
            TakeActionScreen,
            FlipScreen,
        ]}
        menus={{
            quit: QuitScreen,
        }}
        assets={[
            <skoash.Font name="Source Sans Pro" />,
            <skoash.Image
                src={MEDIA.SPRITE + 'game1.timelevelscore.png'}
                className="hidden"
            />,
            <skoash.Image
                src={MEDIA.SPRITE + 'game1.metericons.png'}
                className="hidden"
            />,
            <skoash.Image
                src={MEDIA.SPRITE + 'frames.intro-01.png'}
                className="hidden"
            />,
            <skoash.Image
                src={MEDIA.SPRITE + 'nav.png'}
                className="hidden"
            />,
            <skoash.Image
                src={MEDIA.SPRITE + 'BKG.1.jpg'}
                className="hidden"
            />,
            <skoash.Image
                src={MEDIA.IMAGE + 'BKG.1.jpg'}
                className="hidden"
            />,
            <skoash.Image
                src={MEDIA.IMAGE + 'BKG.2.jpg'}
                className="hidden"
            />,
            <skoash.Image
                src={MEDIA.IMAGE + 'BKG.3.jpg'}
                className="hidden"
            />,
            <skoash.Audio
                type="background"
                src={MEDIA.EFFECT + 'OpeningSequence.mp3'}
                loop
            />,
            <skoash.Audio
                type="background"
                src={MEDIA.EFFECT + 'CardSection.mp3'}
                loop
            />,
            <skoash.Audio
                type="background"
                src={MEDIA.EFFECT + 'BKG.mp3'}
                loop
            />,
            <skoash.Audio
                type="background"
                src={MEDIA.EFFECT + 'BonusRoundBKG.mp3'}
                loop
            />,
            <skoash.Audio
                type="background"
                src={MEDIA.EFFECT + 'BKGWasteSortingGame.mp3'}
                loop
            />,
            <skoash.Audio
                type="background"
                src={MEDIA.EFFECT + 'NextLevel.mp3'}
                loop
            />,
            <skoash.Audio
                type="background"
                src={MEDIA.EFFECT + 'FlipScreen.mp3'}
            />,
            <skoash.Audio
                type="sfx"
                ref="button"
                src={MEDIA.EFFECT + 'AllClick.mp3'}
            />,
            <skoash.Audio
                type="sfx"
                ref="screen-complete"
                src={MEDIA.EFFECT + 'NextAppear.mp3'}
            />,
            <div className="background title" />,
            <div className="background everyday" />,
            <div className="background cards" />,
            <div className="background bkg-1" />,
            <div className="background bkg-2" />,
            <div className="background bkg-3" />,
        ]}
        getBackgroundIndex={(index, id) => {
            switch (id) {
                case 'ios-splash': return;
                case 'title':
                case 'eat-and-drink':
                case 'learn-and-create':
                case 'what-happens':
                case 'better-ways':
                    return 0;
                case 'click-cards':
                case 'cards':
                case 'time-to-collect':
                case 'lets-play':
                case 'remember':
                    return 1;
                case 'phaser-level-1':
                case 'phaser-level-2':
                case 'phaser-level-3':
                case 'phaser-level-4':
                case 'phaser-level-5':
                    return 2;
                case 'bonus-round':
                    return 3;
                case 'neighborhood-waste':
                case 'types-of-waste':
                    return 1;
                case 'sorting-level-1':
                case 'sorting-level-2':
                case 'sorting-level-3':
                    return 4;
                case 'take-action':
                    return 5;
                case 'flip':
                    return 6;
            }
        }}
        renderMenu={function () {
            return (
                <div className="menu">
                    <button ref="pause" className="pause" onClick={() => {
                        if (this.state.paused) {
                            this.resume();
                        } else {
                            this.pause();
                        }
                    }} />
                    <button className="close" onClick={this.navigator.openMenu.bind(this, {id: 'quit'})} />
                </div>
            );
        }}
    />
);

if (module.hot) module.hot.accept();
