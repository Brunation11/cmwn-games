// a crop should look like
// [0, 0, 155, 140],

const fireDefaultProps = {
    image: 'fire',
    scale: [.5, .5],
};

const cloudDefaultProps = {
    image: 'cloud',
    scale: [.75, .75],
};

const mailDefaultProps = {
    image: 'mail',
    scale: [.5, .5],
};

const plantDefaultProps = {
    image: 'plant',
    scale: [.5, .5],
};

const mailboxDefaultProps = {
    image: 'mailbox',
    scale: [.5, .5],
};

const extinguisherDefaultProps = {
    image: 'extinguisher',
    scale: [.35, .35],
};

const farmingDefaultProps = {
    image: 'farming',
    scale: [1, 1],
};

export default {
    level: 1,
    hitsPerLife: 10,
    bounceY: 0,
    gravityY: 600,
    playerImage: 'fire-drone',
    playerBody: [500, 100, 500, 500],
    leftFrames: [6, 5, 4, 3, 2, 1, 0],
    leftFrameRate: 10,
    leftLoop: true,
    rightFrames: [6, 7, 8, 9, 10, 11],
    rightFrameRate: 10,
    rightLoop: true,
    playerScale: [-.15, .15],
    upSpeed: -250,
    rightSpeed: 150,
    fastUpSpeed: -250,
    fastRightSpeed: 300,
    fastDuration: 3000,
    slowUpSpeed: -350,
    slowRightSpeed: 100,
    slowDuration: 2000,
    playerStopFrame: 6,
    boostTime: 3000,
    itemProps: {
        star: {
            image: 'star',
            scale: [.10, .10],
        },
        helicopter: {
            image: 'helicopter',
            scale: [.5, .5],
            collideWorldBounds: false,
        },
        plane: {
            image: 'plane',
            scale: [.5, .5],
            collideWorldBounds: false,
        },
        balloon: {
            image: 'balloon',
            scale: [.5, .5],
            collideWorldBounds: false,
        },
        plant1: _.defaults({
            frame: 0,
        }, plantDefaultProps),
        plant2: _.defaults({
            frame: 1,
        }, plantDefaultProps),
        plant3: _.defaults({
            frame: 2,
        }, plantDefaultProps),
        plant4: _.defaults({
            frame: 3,
        }, plantDefaultProps),
        plant5: _.defaults({
            frame: 4,
        }, plantDefaultProps),
        fire1: _.defaults({
            frame: 0,
        }, fireDefaultProps),
        fire2: _.defaults({
            frame: 1,
        }, fireDefaultProps),
        fire3: _.defaults({
            frame: 2,
        }, fireDefaultProps),
        fire4: _.defaults({
            frame: 3,
        }, fireDefaultProps),
        fire5: _.defaults({
            frame: 4,
        }, fireDefaultProps),
        battery: {
            image: 'battery',
            scale: [.5, .5],
        },
        powerline: {
            image: 'powerline',
            scale: [.5, .5],
        },
        cloud1: _.defaults({
            frame: 0,
        }, cloudDefaultProps),
        cloud2: _.defaults({
            frame: 1,
        }, cloudDefaultProps),
        cloud3: _.defaults({
            frame: 2,
        }, cloudDefaultProps),
        cloud4: _.defaults({
            frame: 3,
        }, cloudDefaultProps),
        mail1: _.defaults({
            frame: 0,
        }, mailDefaultProps),
        mail2: _.defaults({
            frame: 1,
        }, mailDefaultProps),
        mail3: _.defaults({
            frame: 2,
        }, mailDefaultProps),
        mailbox1: _.defaults({
            frame: 0,
        }, mailboxDefaultProps),
        mailbox2: _.defaults({
            frame: 1,
        }, mailboxDefaultProps),
        extinguisher: _.defaults({
            frame: 1,
        }, extinguisherDefaultProps),
        farming1: _.defaults({
            frame: 0,
        }, farmingDefaultProps),
        farming2: _.defaults({
            frame: 1,
        }, farmingDefaultProps),
        farming3: _.defaults({
            frame: 2,
        }, farmingDefaultProps),
    },
    groups: {
        star: 'stars',
        helicopter: 'helicopters',
        plane: 'planes',
        balloon: 'balloons',
        plant1: 'plants',
        plant2: 'plants',
        plant3: 'plants',
        plant4: 'plants',
        plant5: 'plants',
        battery: 'batterys',
        powerline: 'powerlines',
        fire1: 'fires',
        fire2: 'fires',
        fire3: 'fires',
        fire4: 'fires',
        fire5: 'fires',
        cloud1: 'clouds',
        cloud2: 'clouds',
        cloud3: 'clouds',
        cloud4: 'clouds',
        mail1: 'mails',
        mail2: 'mails',
        mail3: 'mails',
        mailbox1: 'mailboxs',
        mailbox2: 'mailboxs',
        extinguisher: 'extinguishers',
        farming1: 'seeds',
        farming2: 'waters',
        farming3: 'fertilizers',
    },
    itemAmounts: {
        blank: 0,
        star: 0,
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
        mailbox1: 0,
        mailbox2: 0,
        battery: 0,
        extinguisher: 0,
        mail1: 0,
        mail2: 0,
        mail3: 0,
        helicopter: 0,
        plane: 0,
        balloon: 0,
        cloud1: 0,
        cloud2: 0,
        cloud3: 0,
        cloud4: 0,
        powerline: 0,
        farming1: 0,
        farming2: 0,
        farming3: 0,
    },
    obstacleAmounts: {
    }
};
