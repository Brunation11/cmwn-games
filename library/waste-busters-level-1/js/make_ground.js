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

    while (left < this.game.world.width) {
        random = _.random(random > 1 || left > this.game.world.width - 400 ?
            crops.length / 2 - 1 : crops.length - 1);
        let crop = crops[random];

        if (random < 2) {
            backgroundGroundOpts.push({
                left,
                crop,
            });

            groundOpts.push({
                left,
                crop: [crop[0], 60, crop[2], crop[3]],
            });
        } else {
            backgroundWaterOpts.push({
                left,
                crop,
            });

            waterOpts.push({
                left,
                crop: [crop[0], 60, crop[2], crop[3]],
            });
        }

        left += crop[2] - 3;
    }

    addItems.call(this, {
        group: 'groundViews', enableBody: false, defaultOpts: {
            top: 370,
            collideWorldBounds: false,
            image: 'ground',
        }
    }, backgroundGroundOpts);

    addItems.call(this, {
        group: 'ground', defaultOpts: {
            top: 430,
            collideWorldBounds: false,
            image: 'ground',
        }
    }, groundOpts);

    addItems.call(this, {
        group: 'waterViews', enableBody: false, defaultOpts: {
            top: 370,
            collideWorldBounds: false,
            image: 'ground',
        }
    }, backgroundWaterOpts);

    addItems.call(this, {
        group: 'water', defaultOpts: {
            top: 430,
            collideWorldBounds: false,
            image: 'ground',
        }
    }, waterOpts);
}
