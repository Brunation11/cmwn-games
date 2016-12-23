import defaultOpts from './default_opts';

export default _.defaults({
    level: 1,
    setPlatforms: [
        [[130, 80], 0],
        [[350, 160], 1],
        [[950, 160], 2],
        [[1050, 240], 0],
        [[2650, 80], 2],
        [[3600, 240], 0],
    ],
    locations: [
        [100, 240],
        [600, 240],
        [650, 80],
        [1350, 80],
        [1400, 240],
        [1700, 160],
        [1900, 80],
        [2050, 240],
        [2300, 160],
        [2550, 240],
        [2800, 160],
        [3000, 240],
        [3300, 160],
    ],
    itemAmounts: {
        wind: 0,
        water: 0,
        web: 0,
        log: 0,
        leaf: 0,
        egg: 0,
        cloud: 0,
        wood1: 0,
        wood2: 0,
        wood3: 0,
        land1: 0,
        land2: 0,
        land3: 0,
        land4: 0,
        land5: 0,
        fruit1: 0,
        fruit2: 0,
        fruit3: 0,
        fruit4: 0,
        flower1: 0,
        flower2: 0,
        flower3: 0,
        flower4: 0,
        flower5: 0,
        flower6: 0,
    }
}, defaultOpts);
