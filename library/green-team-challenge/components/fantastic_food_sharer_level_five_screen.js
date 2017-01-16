import DropperGameComponent from './dropper_game_component';
import defaultOpts from './default_fantastic_food_sharer_opts';

export default function (props, ref, key) {
    return DropperGameComponent(props, ref, key, _.defaults({
        level: 5,
        timeout: 12000,
        scoreToWin: 300,
    }, defaultOpts));
}
