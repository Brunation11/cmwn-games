import defaultOpts from './default_opts';

export default _.defaults({
    level: 2,
    itemAmounts: {
        blank: 1,
        star: 1,
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
        mailbox1: 30,
        mailbox2: 30,
        battery: 5,
        extinguisher: 0,
        farming1: 0,
        farming2: 0,
        farming3: 0,
        mail1: 10,
        mail2: 10,
        mail3: 10,
        helicopter: 0,
        plane: 1,
        balloon: 0,
        cloud1: 10,
        cloud2: 10,
        cloud3: 10,
        cloud4: 10,
        powerline: 20,
    },
    obstacleAmounts: {
    }
}, defaultOpts);
