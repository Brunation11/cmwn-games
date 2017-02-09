// a crop should look like
// [0, 0, 155, 140],

const generalDefaultProps = {
    image: 'land',
    scale: [.5, .5],
};

const woodDefaultProps = {
    image: 'wood',
    scale: [.5, .5],
};

const fruitDefaultProps = {
    image: 'fruits',
    scale: [1, 1],
};

const flowerDefaultProps = {
    image: 'flowers',
    scale: [.5, .5],
};

export default {
    level: 1,
    hitsPerLife: 10,
    hitDelay: 1000,
    bounceY: 0,
    gravityY: 600,
    playerImage: 'butterfly',
    playerBody: [500, 100, 500, 500],
    leftFrames: [5, 4, 3, 2, 1, 0],
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
            scale: [.1, .1],
        },
        crow: {
            image: 'crow',
            scale: [-.1, .1],
            collideWorldBounds: false,
        },
        wind: {
            image: 'wind',
        },
        water: {
            image: 'water',
            scale: [.75, .75],
        },
        web: {
            image: 'web',
        },
        log: _.defaults({
            image: 'log',
        }, generalDefaultProps),
        leaf: {
            image: 'leaf',
        },
        egg: {
            image: 'egg',
            scale: [.75, .75],
        },
        cloud: _.defaults({
            image: 'cloud',
        }, generalDefaultProps),
        wood1: _.defaults({
            frame: 0,
            body: [200, 125, 300, 0],
        }, woodDefaultProps),
        wood2: _.defaults({
            frame: 1,
        }, woodDefaultProps),
        wood3: _.defaults({
            frame: 2,
            body: [250, 125, 250, 0],
        }, woodDefaultProps),
        land1: _.defaults({
            frame: 0,
        }, generalDefaultProps),
        land2: _.defaults({
            frame: 1,
        }, generalDefaultProps),
        land3: _.defaults({
            frame: 2,
        }, generalDefaultProps),
        land4: _.defaults({
            frame: 3,
        }, generalDefaultProps),
        land5: _.defaults({
            frame: 4,
        }, generalDefaultProps),
        fruit1: _.defaults({
            frame: 0,
        }, fruitDefaultProps),
        fruit2: _.defaults({
            frame: 1,
        }, fruitDefaultProps),
        fruit3: _.defaults({
            frame: 2,
        }, fruitDefaultProps),
        fruit4: _.defaults({
            frame: 3,
        }, fruitDefaultProps),
        flower1: _.defaults({
            frame: 0,
        }, flowerDefaultProps),
        flower2: _.defaults({
            frame: 1,
        }, flowerDefaultProps),
        flower3: _.defaults({
            frame: 2,
        }, flowerDefaultProps),
        flower4: _.defaults({
            frame: 3,
        }, flowerDefaultProps),
        flower5: _.defaults({
            frame: 4,
        }, flowerDefaultProps),
        flower6: _.defaults({
            frame: 5,
        }, flowerDefaultProps),
    },
    groups: {
        star: 'stars',
        crow: 'crows',
        wind: 'winds',
        water: 'waters',
        web: 'webs',
        log: 'logs',
        leaf: 'leafs',
        egg: 'eggs',
        cloud: 'clouds',
        wood1: 'logs',
        wood2: 'logs',
        wood3: 'logs',
        land1: 'lands',
        land2: 'lands',
        land3: 'lands',
        land4: 'lands',
        land5: 'lands',
        fruit1: 'fruits',
        fruit2: 'fruits',
        fruit3: 'fruits',
        fruit4: 'fruits',
        flower1: 'flowers',
        flower2: 'flowers',
        flower3: 'flowers',
        flower4: 'flowers',
        flower5: 'flowers',
        flower6: 'flowers',
    },
    itemAmounts: {
        blank: 0,
        star: 0,
        crow: 0,
        wind: 0,
        water: 0,
        web: 0,
        leaf: 0,
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
        wood1: 0,
        wood2: 0,
        wood3: 0,
    }
};
