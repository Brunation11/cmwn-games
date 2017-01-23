import defaultOpts from './default_opts';

export default _.defaults({
    level: 2,
    itemAmounts: {
        blank: 1,
        star: 5,
        plant1: 0,
        plant2: 0,
        plant3: 0,
        plant4: 0,
        plant5: 0,
        fire1: 0,
        fire2: 0,
        fire3: 0,
        fire4: 0,
        fire5: 0,
        mailbox1: 5,
        mailbox2: 5,
        battery: 5,
        extinguisher: 0,
        farming1: 0,
        farming2: 0,
        farming3: 0,
        mail1: 4,
        mail2: 4,
        mail3: 4,
        helicopter: 0,
        plane: 1,
        balloon: 0,
        cloud1: 5,
        cloud2: 5,
        cloud3: 5,
        cloud4: 5,
        powerline: 10,
    },
    obstacleAmounts: {
    }
}, defaultOpts);
