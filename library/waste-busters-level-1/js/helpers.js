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
    hitWater: function (p) {
        if (this.isHit) return;
        this.isHit = true;
        p.body.velocity.y = -200;

        // this.lives -= 1;
        // this.livesText.text = `Lives: ${this.lives}`;

        p.body.velocity.x = (p.body.velocity.x === Math.abs(p.body.velocity.x) ? -1 : 1) * 200;

        setTimeout(() => {
            this.isHit = false;
        }, 1000);
    },
    makeGround: function () {
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

        for (let i = 0; i < 8; i++) {
            random = _.random(random > 1 ? crops.length / 2 - 1 : crops.length - 1);
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
};
