import defaultOpts from './default_opts';

export default _.defaults({
    level: 2,
    itemAmounts: {
        blank: 1,
        star: 1,
        crow: 0,
        wind: 0,
        water: 3,
        web: 2,
        leaf: 0,
        cloud: 3,
        fruit1: 0,
        fruit2: 0,
        fruit3: 0,
        fruit4: 0,
        flower1: 2,
        flower2: 2,
        flower3: 2,
        flower4: 2,
        flower5: 2,
        flower6: 2,
    },
    obstacleAmounts: {
        log: 10,
        land1: 0,
        land2: 0,
        land3: 0,
        land4: 0,
        land5: 0,
        wood1: 0,
        wood2: 0,
        wood3: 0,
    }
}, defaultOpts);
