import addItems from 'shared/phaser/methods/add_items/0.1';

export default {
    onBump: function () {
    },
    collectStar: function () {
    },
    collectHealth: function () {
    },
    hitSpike: function () {
    },
    rideDiamond: function () {
    },
    makeGround: function () {
        var left = 0;
        var backgroundGroundOpts = [];
        var groundOpts = [];
        var random = 2;

        let crops = [
            [20, 0, 380, 200],
            [545, 0, 200, 200],
            [865, 0, 380, 200],
            [1405, 0, 200, 200],
        ];

        for (let i = 0; i < 8; i++) {
            random = _.random(random > 1 ? crops.length / 2 - 1 : crops.length - 1);
            let crop = crops[random];

            backgroundGroundOpts.push({
                left,
                crop,
            });

            groundOpts.push({
                left,
                crop: [crop[0], 60, crop[2], crop[3]],
            });

            left += crop[2] - 3;
        }

        // let backgroundGroundOpts = [
        //     {
        //         left: 0,
        //         crop: [20, 0, 380, 200],
        //     },
        //     {
        //         left: 377,
        //         crop: [860, 0, 380, 200],
        //     },
        //     {
        //         left: 754,
        //         crop: [545, 0, 200, 200],
        //     },
        // ];

        addItems.call(this, {
            group: 'platformViews', enableBody: false, defaultOpts: {
                top: 370,
                collideWorldBounds: false,
                image: 'ground',
            }
        }, backgroundGroundOpts);

        // let groundOpts = [
        //     {
        //         left: 0,
        //         crop: [20, 60, 380, 200],
        //     },
        //     {
        //         left: 377,
        //         crop: [860, 60, 380, 200],
        //     },
        //     {
        //         left: 754,
        //         crop: [545, 60, 200, 200],
        //     },
        // ];

        addItems.call(this, {
            group: 'platforms', defaultOpts: {
                top: 430,
                collideWorldBounds: false,
                image: 'ground',
            }
        }, groundOpts);
    }
};
