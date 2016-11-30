import addItems from 'shared/phaser/methods/add_items/0.1';
import makeGround from './make_ground';
import makePlatforms from './make_platforms';

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

        p.body.velocity.x = (p.body.velocity.x === Math.abs(p.body.velocity.x) ? 1 : -1) * 200;

        setTimeout(() => {
            this.isHit = false;
        }, 1000);
    },
    makeBackground: function () {
        addItems.call(this, {
            group: 'sky', enableBody: false, defaultOpts: {
                collideWorldBounds: false,
                top: 0,
                image: 'sky',
                scale: [.5, .5],
            }
        }, [
            { left: 0 },
            { left: 2975.5 }
        ]);

        addItems.call(this, {
            group: 'clouds', enableBody: false, defaultOpts: {
                collideWorldBounds: false,
                top: 0,
                image: 'clouds',
                scale: [.5, .5],
            }
        }, [
            { left: 0 },
            { left: 2975.5 }
        ]);
    },
    makeGround,
    makePlatforms,
};
