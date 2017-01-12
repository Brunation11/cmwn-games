import defaultGameOpts from './default_game_opts';

export default _.defaults({
    level: 1,
    timeout: 120000,
    scoreToWin: 100,
    itemsToSort: {
        emptyBottle: {
            bin: 'recycle'
        },
        eatenApple: {
            bin: 'compost'
        },
        candyBag: {
            bin: 'landfill'
        },
        // fullBottle: {
        //     bin: 'liquid', reCatchable: true, becomes: 'bottle'
        // },
    },
}, defaultGameOpts);
