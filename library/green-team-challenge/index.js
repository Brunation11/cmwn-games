import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';

import TitleScreen from './components/title_screen';
import RecyclingChampionPreScreen from './components/recycling_champion_pre_screen';
import RecyclingChampion1InfoScreen from './components/recycling_champion_one_info_screen';
import RecyclingChampion1Screen from './components/recycling_champion_level_one_screen';
import RecyclingChampion2InfoScreen from './components/recycling_champion_two_info_screen';
import RecyclingChampion2Screen from './components/recycling_champion_level_two_screen';
import RecyclingChampion3InfoScreen from './components/recycling_champion_three_info_screen';
import RecyclingChampion3Screen from './components/recycling_champion_level_three_screen';
import RecyclingChampion4InfoScreen from './components/recycling_champion_four_info_screen';
import RecyclingChampion4Screen from './components/recycling_champion_level_four_screen';
import RecyclingChampion5InfoScreen from './components/recycling_champion_five_info_screen';
import RecyclingChampion5Screen from './components/recycling_champion_level_five_screen';
import RecyclingChampionPostScreen from './components/recycling_champion_post_screen';
import FlipScreen from './components/flip_screen';
import QuitScreen from './components/quit_screen';

skoash.start(
    <skoash.Game
        config={config}
        loader={<Loader />}
        screens={[
            iOSScreen,
            TitleScreen,
            RecyclingChampionPreScreen,
            RecyclingChampion1InfoScreen,
            RecyclingChampion1Screen,
            RecyclingChampion2InfoScreen,
            RecyclingChampion2Screen,
            RecyclingChampion3InfoScreen,
            RecyclingChampion3Screen,
            RecyclingChampion4InfoScreen,
            RecyclingChampion4Screen,
            RecyclingChampion5InfoScreen,
            RecyclingChampion5Screen,
            RecyclingChampionPostScreen,
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
