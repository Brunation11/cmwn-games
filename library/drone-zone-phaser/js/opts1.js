import defaultOpts from './default_opts';

export default _.defaults({
    level: 1,
    itemAmounts: {
        blank: 1,
        star: 1,
        plant1: 0,
        plant2: 0,
        plant3: 0,
        plant4: 0,
        plant5: 0,
        fire1: 10,
        fire2: 10,
        fire3: 10,
        fire4: 10,
        fire5: 10,
        mailbox1: 0,
        mailbox2: 0,
        battery: 5,
        extinguisher: 2,
        farming1: 0,
        farming2: 0,
        farming3: 0,
        mail1: 0,
        mail2: 0,
        mail3: 0,
        helicopter: 1,
        plane: 0,
        balloon: 0,
        cloud1: 10,
        cloud2: 10,
        cloud3: 10,
        cloud4: 10,
        powerline: 0,
    },
    obstacleAmounts: {
    }
}, defaultOpts);
