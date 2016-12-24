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
    onLogOverlap() {
        this.helpers.hitSomething.call(this);
    },
    onWoodOverlap() {
        this.helpers.hitSomething.call(this);
    },
    onLandOverlap() {
        this.helpers.hitSomething.call(this);
    },
    onWorldCollide() {
        this.helpers.hitSomething.call(this);
    },
    hitSomething(i = 1) {
        if (this.isHit) return;
        this.isHit = true;

        setTimeout(() => {
            this.isHit = false;
        }, 1000);

        this.data.levels[this.opts.level].hits += i;
        this.helpers.emitData.call(this);
    },
    onWindOverlap(p, i) {
        i.kill();
        this.helpers.addLife.call(this, 2);
    },
    onWaterOverlap(p, i) {
        i.kill();
        this.helpers.addLife.call(this);
    },
    onWebOverlap() {
        this.helpers.hitSomething.call(this);
    },
    onLeafOverlap(p, i) {
        i.kill();
        this.helpers.updateScore.call(this);
    },
    onCloudOverlap() {
        this.helpers.hitSomething.call(this);
    },
    onFruitOverlap(p, i) {
        i.kill();
        this.helpers.updateScore.call(this);
    },
    onFlowerOverlap(p, i) {
        i.kill();
        this.helpers.updateScore.call(this);
    },
    addLife(i = 1) {
        this.data.levels[this.opts.level].hits -= i;
        this.helpers.emitData.call(this);
    },
    updateScore(i = 1) {
        this.data.levels[this.opts.level].score += i;
        this.helpers.emitData.call(this);
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
