import defaultOpts from './default_opts';

export default _.defaults({
    level: 3,
    itemAmounts: {
        blank: 1,
        star: 1,
        plant1: 10,
        plant2: 10,
        plant3: 10,
        plant4: 10,
        plant5: 10,
        fire1: 0,
        fire2: 0,
        fire3: 0,
        fire4: 0,
        fire5: 0,
        mailbox1: 0,
        mailbox2: 0,
        battery: 5,
        extinguisher: 0,
        farming1: 5,
        farming2: 5,
        farming3: 5,
        mail1: 0,
        mail2: 0,
        mail3: 0,
        helicopter: 0,
        plane: 0,
        balloon: 1,
        cloud1: 10,
        cloud2: 10,
        cloud3: 10,
        cloud4: 10,
        powerline: 0,
    },
    obstacleAmounts: {
    }
}, defaultOpts);
