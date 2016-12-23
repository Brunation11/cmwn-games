import makeBackground from './make_background';
import makePlatforms from './make_platforms';
import makeItems from './make_items';

export default {
    emitData() {
        //  emit event with data to skoash game
        this.emitEvent({
            updateGameState: {
                path: ['game'],
                data: this.data
            }
        });
    },
    onBump() {
    },
    onLogCollide() {

    },
    onWoodCollide() {

    },
    onLandCollide() {

    },
    hitSomething(p, i = 1, d = -1) {
        if (this.isHit) return;
        this.isHit = true;
        p.body.velocity.y = -1 * this.opts.hitVelocity;

        p.body.velocity.x = (p.body.velocity.x === Math.abs(p.body.velocity.x) ?
            d : -1 * d) * this.opts.hitVelocity;

        setTimeout(() => {
            this.isHit = false;
        }, 1000);

        this.data.hits += i;
        this.helpers.emitData.call(this);
        setTimeout(() => {
            if (this.data.hits >= this.opts.hitsPerLife) {
                this.data.hits -= this.opts.hitsPerLife;
                this.data.lives--;
                this.helpers.emitData.call(this);
            }
        }, 250);
    },
    onWindOverlap() {

    },
    onWaterOverlap() {

    },
    onWebOverlap() {

    },
    onLeafOverlap() {

    },
    onCloudOverlap() {

    },
    onFruitOverlap() {

    },
    onFlowerOverlap() {

    },
    collectHeart(player, heart) {
        if (this.data.lives === this.opts.maxLives) return;
        // Removes the heart from the screen
        heart.kill();
        //  update the lives
        this.data.lives++;
        this.helpers.emitData.call(this);
    },
    collectBags(player, bag) {
        if (this.data.bagCount === this.opts.maxBags) return;
        // Removes the bag from the screen
        bag.kill();
        //  update the bagCount
        this.data.bagCount++;
        this.helpers.updatePlayer.call(this);
        this.helpers.emitData.call(this);
    },
    collectLightening(player, lightening) {
        player.boost = (player.boost + 1) || 1;
        lightening.kill();
        this.helpers.updatePlayer.call(this);
        setTimeout(() => {
            player.boost--;
            this.helpers.updatePlayer.call(this);
        }, this.opts.boostTime);
    },
    updatePlayer() {
        // if (this.player.boost) {
        //     this.player.loadTexture('jet', 0);
        //     this.player.animations.add('left', this.opts.boostLeftFrames,
        //         this.opts.boostLeftFrameRate, this.opts.boostLeftLoop);
        //     this.player.animations.add('right', this.opts.boostRightFrames,
        //         this.opts.boostRightFrameRate, this.opts.boostRightLoop);
        // } else {
        //     if (this.data.bagCount === this.opts.maxBags) {
        //         this.player.loadTexture('turtle5', 0);
        //     } else if (this.data.bagCount >= this.opts.maxBags / 2) {
        //         this.player.loadTexture('turtle3', 0);
        //     } else {
        //         this.player.loadTexture('turtle', 0);
        //     }
        //     this.player.animations.add('left', this.opts.leftFrames,
        //         this.opts.leftFrameRate, this.opts.leftLoop);
        //     this.player.animations.add('right', this.opts.rightFrames,
        //         this.opts.rightFrameRate, this.opts.rightLoop);
        // }
    },
    stay(a) {
        a.body.gravity.y = 0;
        a.body.velocity.y = 0;
    },
    makeBackground,
    makePlatforms,
    makeItems,
};
