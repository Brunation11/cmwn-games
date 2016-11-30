import Game from 'shared/phaser/components/game/0.1';
import preload from './js/preload';
import create from './js/create';
import update from './js/update';
import helpers from './js/helpers';

ENVIRONMENT.MEDIA += 'Games/WasteBusters/';

window.game = new Game({
    width: 960,
    height: 540,
    preload,
    create,
    update,
    helpers
});
