import defaultOpts from './default_opts';

export default _.defaults({
    level: 3,
    itemAmounts: {
        blank: 1,
        star: 1,
        crow: 1,
        wind: 4,
        water: 3,
        web: 0,
        leaf: 0,
        cloud: 0,
        fruit1: 2,
        fruit2: 2,
        fruit3: 2,
        fruit4: 2,
        flower1: 0,
        flower2: 0,
        flower3: 0,
        flower4: 0,
        flower5: 0,
        flower6: 0,
    },
    obstacleAmounts: {
        log: 0,
        land1: 2,
        land2: 1,
        land3: 1,
        land4: 1,
        land5: 1,
        wood1: 0,
        wood2: 0,
        wood3: 0,
    }
}, defaultOpts);
