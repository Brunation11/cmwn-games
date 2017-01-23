import defaultOpts from './default_opts';

export default _.defaults({
    level: 3,
    itemAmounts: {
        blank: 1,
        star: 1,
        plant1: 2,
        plant2: 2,
        plant3: 2,
        plant4: 2,
        plant5: 2,
        fire1: 0,
        fire2: 0,
        fire3: 0,
        fire4: 0,
        fire5: 0,
        mailbox1: 0,
        mailbox2: 0,
        battery: 5,
        extinguisher: 0,
        farming1: 2,
        farming2: 2,
        farming3: 2,
        mail1: 0,
        mail2: 0,
        mail3: 0,
        helicopter: 0,
        plane: 0,
        balloon: 1,
        cloud1: 5,
        cloud2: 5,
        cloud3: 5,
        cloud4: 5,
        powerline: 0,
    },
    obstacleAmounts: {
    }
}, defaultOpts);
