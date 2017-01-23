import defaultOpts from './default_opts';

export default _.defaults({
    level: 1,
    itemAmounts: {
        blank: 1,
        star: 5,
        plant1: 0,
        plant2: 0,
        plant3: 0,
        plant4: 0,
        plant5: 0,
        fire1: 2,
        fire2: 2,
        fire3: 2,
        fire4: 2,
        fire5: 2,
        mailbox1: 0,
        mailbox2: 0,
        battery: 5,
        extinguisher: 5,
        farming1: 0,
        farming2: 0,
        farming3: 0,
        mail1: 0,
        mail2: 0,
        mail3: 0,
        helicopter: 1,
        plane: 0,
        balloon: 0,
        cloud1: 5,
        cloud2: 5,
        cloud3: 5,
        cloud4: 5,
        powerline: 0,
    },
    obstacleAmounts: {
    }
}, defaultOpts);
