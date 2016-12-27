import defaultOpts from './default_opts';

export default _.defaults({
    level: 1,
    itemAmounts: {
        blank: 1,
        star: 1,
        crow: 1,
        wind: 1,
        water: 1,
        web: 1,
        leaf: 1,
        cloud: 1,
        fruit1: 1,
        fruit2: 1,
        fruit3: 1,
        fruit4: 1,
        flower1: 1,
        flower2: 1,
        flower3: 1,
        flower4: 1,
        flower5: 1,
        flower6: 1,
    },
    obstacleAmounts: {
        log: 1,
        land1: 1,
        land2: 1,
        land3: 1,
        land4: 1,
        land5: 1,
        wood1: 1,
        wood2: 1,
        wood3: 1,
    }
}, defaultOpts);
