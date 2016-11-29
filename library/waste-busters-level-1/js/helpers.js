import addItems from 'shared/phaser/methods/add_items/0.1';
import makeGround from './make_ground';

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
    makeBackground: function () {
        addItems.call(this, {
            group: 'sky', enableBody: false, defaultOpts: {collideWorldBounds: false}
        }, [
            {
                left: 0,
                top: 0,
                image: 'sky',
                scale: [.5, .5],
            }
        ]);

        addItems.call(this, {
            group: 'clouds', enableBody: false, defaultOpts: {collideWorldBounds: false}
        }, [
            {
                left: 0,
                top: 0,
                image: 'clouds',
                scale: [.5, .5],
            }
        ]);
    },
    makeGround,
    makePlatforms: function () {
        var platformOpts = [];

        // 1936 x 96 pixels
        let crops = [
            [200, 0, 240, 96],
            [790, 0, 350, 96],
            [1290, 0, 645, 96],
        ];

        let bodies = [
            [240, 48, 0, 44],
            [350, 48, 0, 44],
            [645, 48, 0, 44],
        ];

        let locations = [
            [100, 300],
            [200, 100],
        ];

        _.each(locations, (location, k) => {
            let i = k % crops.length;
            // let i = _.random(crops.length - 1);
            platformOpts.push({
                left: location[0],
                top: location[1],
                crop: crops[i],
                body: bodies[i],
            });
        });

        addItems.call(this, {
            group: 'platforms', defaultOpts: {
                top: 300,
                collideWorldBounds: false,
                image: 'platforms',
            }
        }, platformOpts);
    }
};
