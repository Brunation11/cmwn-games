import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';

// import TitleScreen from './components/title_screen';
// import RecyclingChampionPreScreen from './components/recycling_champion_pre_screen';
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
import DynamicDiverter1Screen from './components/dynamic_diverter_level_one_screen';
// import DynamicDiverter2InfoScreen from './components/dynamic_diverter_two_info_screen';
// import DynamicDiverter2Screen from './components/dynamic_diverter_level_two_screen';
// import DynamicDiverter3InfoScreen from './components/dynamic_diverter_three_info_screen';
// import DynamicDiverter3Screen from './components/dynamic_diverter_level_three_screen';
// import DynamicDiverter4InfoScreen from './components/dynamic_diverter_four_info_screen';
// import DynamicDiverter4Screen from './components/dynamic_diverter_level_four_screen';
// import DynamicDiverter5InfoScreen from './components/dynamic_diverter_five_info_screen';
// import DynamicDiverter5Screen from './components/dynamic_diverter_level_five_screen';
// import DynamicDiverterPostScreen from './components/dynamic_diverter_post_screen';
import FlipScreen from './components/flip_screen';
import QuitScreen from './components/quit_screen';

skoash.start(
    <skoash.Game
        config={config}
        loader={<Loader />}
        screens={[
            iOSScreen,
            // TitleScreen,
            // RecyclingChampionPreScreen,
            // RecyclingChampion1InfoScreen,
            // RecyclingChampion1Screen,
            // RecyclingChampion2InfoScreen,
            // RecyclingChampion2Screen,
            // RecyclingChampion3InfoScreen,
            // RecyclingChampion3Screen,
            // RecyclingChampion4InfoScreen,
            // RecyclingChampion4Screen,
            // RecyclingChampion5InfoScreen,
            // RecyclingChampion5Screen,
            // RecyclingChampionPostScreen,
            // PricelessPourerPreScreen,
            // PricelessPourer1InfoScreen,
            // PricelessPourer1Screen,
            // PricelessPourer2InfoScreen,
            // PricelessPourer2Screen,
            // PricelessPourer3InfoScreen,
            // PricelessPourer3Screen,
            // PricelessPourer4InfoScreen,
            // PricelessPourer4Screen,
            // PricelessPourer5InfoScreen,
            // PricelessPourer5Screen,
            // PricelessPourerPostScreen,
            // FantasticFoodSharerPreScreen,
            // FantasticFoodSharer1InfoScreen,
            // FantasticFoodSharer1Screen,
            // FantasticFoodSharer2InfoScreen,
            // FantasticFoodSharer2Screen,
            // FantasticFoodSharer3InfoScreen,
            // FantasticFoodSharer3Screen,
            // FantasticFoodSharer4InfoScreen,
            // FantasticFoodSharer4Screen,
            // FantasticFoodSharer5InfoScreen,
            // FantasticFoodSharer5Screen,
            // FantasticFoodSharerPostScreen,
            // DynamicDiverterPreScreen,
            // DynamicDiverter1InfoScreen,
            DynamicDiverter1Screen,
            // DynamicDiverter2InfoScreen,
            // DynamicDiverter2Screen,
            // DynamicDiverter3InfoScreen,
            // DynamicDiverter3Screen,
            // DynamicDiverter4InfoScreen,
            // DynamicDiverter4Screen,
            // DynamicDiverter5InfoScreen,
            // DynamicDiverter5Screen,
            // DynamicDiverterPostScreen,
            FlipScreen,
        ]}
        menus={{
            quit: QuitScreen,
        }}
        assets={[
            <div className="background title" />,
            <div className="background flip" />,
        ]}
        getBackgroundIndex={(index, id) => {
            switch (id) {
                case 'ios-splash': return;
                case 'title':
                case 'flip':
                    return;
            }
        }}
    />
);

if (module.hot) module.hot.accept();
