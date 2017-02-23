import config from './config';

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

var AnimalID = (
    <skoash.Game
        config={config}
        screens={[
            iOSScreen,
            TitleScreen,
            InfoWelcomeScreen,
            IDCarnivoreScreen,
            IDMarsupialScreen,
            IDRodantScreen,
            IDArachnidScreen,
            IDMammalScreen,
            IDMolluskScreen,
            IDReptileScreen,
            IDHerbivoreScreen,
            InfoGoodJobScreen,
            InfoMatchScreen,
            MatchScreen,
            InfoDetailScreen,
            InfoSnoutScreen,
            WhatDoesANoseScreen,
            InfoSneezersScreen,
            DNDLionScreen,
            DNDSlothScreen,
            DNDWolfScreen,
            DNDElephantScreen,
            DNDDragonScreen,
            DNDPigScreen,
            DNDGorillaScreen,
            DNDMuleScreen,
            FlipScreen
        ]}
        menus={{
            quit: QuitScreen,
        }}
        loader={<Loader />}
        getBackgroundIndex={i => {
            switch (true) {
                case i === 0: return;
                case i === 1: return 0;
                case i <= 10: return 2;
                case i === 11: return 5;
                case i <= 14: return 3;
                case i <= 26: return 4;
                default: return;
            }
        }}
        assets={[
            <skoash.Audio ref="bkg-0" type="background" src="media/audio/title.mp3" />,
            <skoash.Audio ref="bkg-1" type="background" src="media/audio/background/BKG_3.mp3" />,
            <skoash.Audio ref="bkg-2" type="background" src="media/audio/background/id.mp3" loop />,
            <skoash.Audio ref="bkg-3" type="background" src="media/audio/background/match.mp3" />,
            <skoash.Audio ref="bkg-4" type="background" src="media/audio/background/nose.mp3" />,
            <skoash.Audio ref="bkg-5" type="background" src="media/audio/S_11.1.mp3" />,

            <skoash.Audio ref="button" type="sfx" src="media/audio/button.mp3" />,
            <skoash.Audio ref="screen-complete" type="sfx" src="media/audio/complete.mp3" />,

            <skoash.Image className="hidden" src="media/images/background/title.png" />,
            <skoash.Image className="hidden" src="media/images/background/id.png" />,
            <skoash.Image className="hidden" src="media/images/background/match.png" />,
            <skoash.Image className="hidden" src="media/images/background/nose.png" />,

            <div className="game-background title" />,
            <div className="game-background id" />,
            <div className="game-background match" />,
            <div className="game-background nose" />,
        ]}
    />
);

skoash.start(AnimalID);

if (module.hot) module.hot.accept();
