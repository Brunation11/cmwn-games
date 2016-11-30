import makeBackground from './make_background';
import makeGround from './make_ground';
import makePlatforms from './make_platforms';
import makeItems from './make_items';

export default {
    onBump: function () {
    },
    collectHeart: function () {
    },
    collectRecycling: function () {
    },
    stay: function (a) {
        a.body.gravity.y = 0;
        a.body.velocity.y = 0;
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
    makeBackground,
    makeGround,
    makePlatforms,
    makeItems,
};
