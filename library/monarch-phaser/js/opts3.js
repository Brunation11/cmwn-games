import defaultOpts from './default_opts';

export default _.defaults({
    level: 3,
    setPlatforms: [
        [[-30, 160], 2],
        [[0, 240], 0],
        [[700, 240], 2],
        [[1100, 160], 1],
        [[1900, 240], 1],
        [[2200, 240], 2],
        [[3400, 160], 2],
    ],
    locations: [
        [300, 240],
        [400, 80],
        [650, 160],
        [900, 80],
        [1300, 240],
        [1350, 80],
        [1550, 160],
        [2000, 80],
        [2700, 80],
        [2700, 240],
        [3100, 240],
    ],
    platformItemAmounts: {
        squareBush: 2,
        roundBush: 2,
        snake: 0,
        bag: 15,
        blank: 10,
        rock: 2,
        stump: 2,
        heart: 2,
        recycle: 1,
        raibowRecycle: 1,
        lightening: 1,
        tree2: 1,
        tree4: 1,
        tree5: 1,
    }
}, defaultOpts);
