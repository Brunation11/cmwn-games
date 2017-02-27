import defaultOpts from './default_opts';

export default _.defaults({
    level: 1,
    itemAmounts: {
        blank: 1,
        star: 1,
        crow: 1,
        wind: 0,
        water: 3,
        web: 0,
        leaf: 10,
        cloud: 0,
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
    },
    obstacleAmounts: {
        log: 0,
        land1: 0,
        land2: 0,
        land3: 0,
        land4: 0,
        land5: 0,
        wood1: 1,
        wood2: 1,
        wood3: 1,
    }
}, defaultOpts);
