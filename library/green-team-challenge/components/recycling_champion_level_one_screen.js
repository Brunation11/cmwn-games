import RecyclingChampionComponent from './recycling_champion_component';

export default function (props, ref, key) {
    return RecyclingChampionComponent(props, ref, key, {
        level: 1,
        timeout: 120000,
        scoreToWin: 100,
    });
}
