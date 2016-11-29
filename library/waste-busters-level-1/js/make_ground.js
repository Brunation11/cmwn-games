import addItems from 'shared/phaser/methods/add_items/0.1';

export default function () {
    var left = 0;
    var backgroundGroundOpts = [];
    var groundOpts = [];
    var backgroundWaterOpts = [];
    var waterOpts = [];
    var random = 2;

    let crops = [
        [20, 0, 380, 200],
        [545, 0, 200, 200],
        [865, 0, 380, 200],
        [1405, 0, 200, 200],
    ];

    let bodies = [
        [380, 140, 0, 60],
        [200, 140, 0, 60],
        [380, 140, 0, 60],
        [200, 140, 0, 60],
    ];

    while (left < this.game.world.width) {
        random = _.random(random > 1 || left > this.game.world.width - 400 ?
            crops.length / 2 - 1 : crops.length - 1);
        let crop = crops[random];
        let body = bodies[random];

        if (random < 2) {
            groundOpts.push({
                left,
                crop,
                body,
            });
        } else {
            waterOpts.push({
                left,
                crop,
                body,
            });
        }

        left += crop[2] - 3;
    }

    addItems.call(this, {
        group: 'ground', defaultOpts: {
            top: 430,
            collideWorldBounds: false,
            image: 'ground',
        }
    }, groundOpts);

    addItems.call(this, {
        group: 'water', defaultOpts: {
            top: 430,
            collideWorldBounds: false,
            image: 'ground',
        }
    }, waterOpts);
}
