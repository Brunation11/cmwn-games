import RecyclingChampionComponent from './recycling_champion_component';
import defaultOpts from './default_recycling_champion_opts';

export default function (props, ref, key) {
    return RecyclingChampionComponent(props, ref, key, _.defaults({
        level: 4,
        timeout: 12000,
        scoreToWin: 250,
    }, defaultOpts));
}
