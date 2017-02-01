import Game from 'shared/phaser/components/game/0.1';
import preload from './js/preload';
import create from './js/create';
import update from './js/update';
import helpers from './js/helpers';

new Game({
    width: 800,
    height: 600,
    preload,
    create,
    update,
    helpers
});
