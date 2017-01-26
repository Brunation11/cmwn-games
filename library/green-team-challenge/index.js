import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';

// import TitleScreen from './components/title_screen';
// import HiThereScreen from './components/hi_there_screen';
// import KeyIsSortingScreen from './components/key_is_sorting_screen';
// import LightsScreen from './components/lights_screen';
// import FiveWaysScreen from './components/five_ways_screen';
import LevelScreen from './components/level_screen_component';
// import RecyclingChampion1InfoScreen from './components/recycling_champion_one_info_screen';
// import RecyclingChampion1Screen from './components/recycling_champion_level_one_screen';
// import RecyclingChampion2InfoScreen from './components/recycling_champion_two_info_screen';
// import RecyclingChampion2Screen from './components/recycling_champion_level_two_screen';
// import RecyclingChampion3InfoScreen from './components/recycling_champion_three_info_screen';
// import RecyclingChampion3Screen from './components/recycling_champion_level_three_screen';
// import RecyclingChampion4InfoScreen from './components/recycling_champion_four_info_screen';
// import RecyclingChampion4Screen from './components/recycling_champion_level_four_screen';
// import RecyclingChampion5InfoScreen from './components/recycling_champion_five_info_screen';
// import RecyclingChampion5Screen from './components/recycling_champion_level_five_screen';
// import RecyclingChampionPostScreen from './components/recycling_champion_post_screen';
// import PricelessPourerPreScreen from './components/priceless_pourer_pre_screen';
// import PricelessPourer1InfoScreen from './components/priceless_pourer_one_info_screen';
// import PricelessPourer1Screen from './components/priceless_pourer_level_one_screen';
// import PricelessPourer2InfoScreen from './components/priceless_pourer_two_info_screen';
// import PricelessPourer2Screen from './components/priceless_pourer_level_two_screen';
// import PricelessPourer3InfoScreen from './components/priceless_pourer_three_info_screen';
// import PricelessPourer3Screen from './components/priceless_pourer_level_three_screen';
// import PricelessPourer4InfoScreen from './components/priceless_pourer_four_info_screen';
// import PricelessPourer4Screen from './components/priceless_pourer_level_four_screen';
// import PricelessPourer5InfoScreen from './components/priceless_pourer_five_info_screen';
// import PricelessPourer5Screen from './components/priceless_pourer_level_five_screen';
// import PricelessPourerPostScreen from './components/priceless_pourer_post_screen';
// import FantasticFoodSharerPreScreen from './components/fantastic_food_sharer_pre_screen';
// import FantasticFoodSharer1InfoScreen from './components/fantastic_food_sharer_one_info_screen';
// import FantasticFoodSharer1Screen from './components/fantastic_food_sharer_level_one_screen';
// import FantasticFoodSharer2InfoScreen from './components/fantastic_food_sharer_two_info_screen';
// import FantasticFoodSharer2Screen from './components/fantastic_food_sharer_level_two_screen';
// import FantasticFoodSharer3InfoScreen from './components/fantastic_food_sharer_three_info_screen';
// import FantasticFoodSharer3Screen from './components/fantastic_food_sharer_level_three_screen';
// import FantasticFoodSharer4InfoScreen from './components/fantastic_food_sharer_four_info_screen';
// import FantasticFoodSharer4Screen from './components/fantastic_food_sharer_level_four_screen';
// import FantasticFoodSharer5InfoScreen from './components/fantastic_food_sharer_five_info_screen';
// import FantasticFoodSharer5Screen from './components/fantastic_food_sharer_level_five_screen';
// import FantasticFoodSharerPostScreen from './components/fantastic_food_sharer_post_screen';
// import DynamicDiverterPreScreen from './components/dynamic_diverter_pre_screen';
// import DynamicDiverter1InfoScreen from './components/dynamic_diverter_one_info_screen';
// import DynamicDiverter1Screen from './components/dynamic_diverter_level_one_screen';
// import DynamicDiverter2InfoScreen from './components/dynamic_diverter_two_info_screen';
// import DynamicDiverter2Screen from './components/dynamic_diverter_level_two_screen';
// import DynamicDiverter3InfoScreen from './components/dynamic_diverter_three_info_screen';
// import DynamicDiverter3Screen from './components/dynamic_diverter_level_three_screen';
// import DynamicDiverter4InfoScreen from './components/dynamic_diverter_four_info_screen';
// import DynamicDiverter4Screen from './components/dynamic_diverter_level_four_screen';
// import DynamicDiverter5InfoScreen from './components/dynamic_diverter_five_info_screen';
// import DynamicDiverter5Screen from './components/dynamic_diverter_level_five_screen';
// import DynamicDiverterPostScreen from './components/dynamic_diverter_post_screen';
// import WantToStackScreen from './components/want_to_stack_screen';
// import MasterSorterPreScreen from './components/master_sorter_pre_screen';
// import MasterSorter1InfoScreen from './components/master_sorter_one_info_screen';
// import MasterSorter1Screen from './components/master_sorter_level_one_screen';
// import MasterSorter2InfoScreen from './components/master_sorter_two_info_screen';
// import MasterSorter2Screen from './components/master_sorter_level_two_screen';
// import MasterSorter3InfoScreen from './components/master_sorter_three_info_screen';
// import MasterSorter3Screen from './components/master_sorter_level_three_screen';
// import MasterSorter4InfoScreen from './components/master_sorter_four_info_screen';
// import MasterSorter4Screen from './components/master_sorter_level_four_screen';
// import MasterSorter5InfoScreen from './components/master_sorter_five_info_screen';
// import MasterSorter5Screen from './components/master_sorter_level_five_screen';
// import MasterSorterPostScreen from './components/master_sorter_post_screen';
import NowAMemberScreen from './components/now_a_member_screen';
import FlipScreen from './components/flip_screen';
import QuitScreen from './components/quit_screen';

skoash.start(
    <skoash.Game
        config={config}
        loader={<Loader />}
        screens={[
            iOSScreen,
            // TitleScreen,
            // HiThereScreen,
            // KeyIsSortingScreen,
            // LightsScreen,
            // FiveWaysScreen,
            LevelScreen(1.0),
            // RecyclingChampion1InfoScreen,
            // RecyclingChampion1Screen,
            LevelScreen(1.1),
            // RecyclingChampion2InfoScreen,
            // RecyclingChampion2Screen,
            LevelScreen(1.2),
            // RecyclingChampion3InfoScreen,
            // RecyclingChampion3Screen,
            LevelScreen(1.3),
            // RecyclingChampion4InfoScreen,
            // RecyclingChampion4Screen,
            LevelScreen(1.4),
            // RecyclingChampion5InfoScreen,
            // RecyclingChampion5Screen,
            LevelScreen(1.5),
            LevelScreen(2.0),
            // PricelessPourer1InfoScreen,
            // PricelessPourer1Screen,
            LevelScreen(2.1),
            // PricelessPourer2InfoScreen,
            // PricelessPourer2Screen,
            LevelScreen(2.2),
            // PricelessPourer3InfoScreen,
            // PricelessPourer3Screen,
            LevelScreen(2.3),
            // PricelessPourer4InfoScreen,
            // PricelessPourer4Screen,
            LevelScreen(2.4),
            // PricelessPourer5InfoScreen,
            // PricelessPourer5Screen,
            LevelScreen(2.5),
            LevelScreen(3.0),
            // FantasticFoodSharer1InfoScreen,
            // FantasticFoodSharer1Screen,
            LevelScreen(3.1),
            // FantasticFoodSharer2InfoScreen,
            // FantasticFoodSharer2Screen,
            LevelScreen(3.2),
            // FantasticFoodSharer3InfoScreen,
            // FantasticFoodSharer3Screen,
            LevelScreen(3.3),
            // FantasticFoodSharer4InfoScreen,
            // FantasticFoodSharer4Screen,
            LevelScreen(3.4),
            // FantasticFoodSharer5InfoScreen,
            // FantasticFoodSharer5Screen,
            LevelScreen(3.5),
            LevelScreen(4.0),
            // DynamicDiverter1InfoScreen,
            // DynamicDiverter1Screen,
            LevelScreen(4.1),
            // DynamicDiverter2InfoScreen,
            // DynamicDiverter2Screen,
            LevelScreen(4.2),
            // DynamicDiverter3InfoScreen,
            // DynamicDiverter3Screen,
            LevelScreen(4.3),
            // DynamicDiverter4InfoScreen,
            // DynamicDiverter4Screen,
            LevelScreen(4.4),
            // DynamicDiverter5InfoScreen,
            // DynamicDiverter5Screen,
            LevelScreen(4.5),
            // WantToStackScreen,
            LevelScreen(5.0),
            // MasterSorter1InfoScreen,
            // MasterSorter1Screen,
            LevelScreen(5.1),
            // MasterSorter2InfoScreen,
            // MasterSorter2Screen,
            LevelScreen(5.2),
            // MasterSorter3InfoScreen,
            // MasterSorter3Screen,
            LevelScreen(5.3),
            // MasterSorter4InfoScreen,
            // MasterSorter4Screen,
            LevelScreen(5.4),
            // MasterSorter5InfoScreen,
            // MasterSorter5Screen,
            LevelScreen(5.5),
            NowAMemberScreen,
            FlipScreen,
        ]}
        menus={{
            quit: QuitScreen,
        }}
        assets={[
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprite.mainnav.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}titlescrnbg.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.01.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.02.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.03.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.04.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.transition.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}quit.background.jpg`} />,
            <div className="background title" />,
            <div className="background bkg1" />,
            <div className="background bkg2" />,
            <div className="background bkg3" />,
            <div className="background bkg4" />,
            <div className="background transition" />,
            <div className="background quit" />,
        ]}
        getBackgroundIndex={(index, id) => {
            switch (id) {
                case 'ios-splash': return;
                case 'title':
                case 'hi-there-info':
                case 'flip':
                    return;
            }
        }}
    />
);

if (module.hot) module.hot.accept();
