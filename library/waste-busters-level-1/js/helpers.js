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
    makeGround,
};
