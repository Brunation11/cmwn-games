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
    onHelicopterOverlap() {
        if (this.isHit) return;
        this.helpers.hitSomething.call(this);
        this.audio.helicopter.play();
    },
    onPlaneOverlap() {
        if (this.isHit) return;
        this.helpers.hitSomething.call(this);
        this.audio.plane.play();
    },
    onBalloonOverlap() {
        if (this.isHit) return;
        this.helpers.hitSomething.call(this);
        this.audio.balloon.play();
    },
    onWorldCollide() {
        if (this.isHit) return;
        this.helpers.hitSomething.call(this);
        // this.audio.obstacle.play();
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
    onPlantOverlap(p, i) {
        i.kill();
        p.fast = (p.fast || 0) + 1;
        setTimeout(() => {
            p.fast--;
        }, this.opts.fastDuration);
        this.helpers.updateScore.call(this, 3);
        // this.audio.plant.play();
    },
    onBatteryOverlap(p, i) {
        i.kill();
        this.helpers.addLife.call(this);
        this.audio.battery.play();
    },
    onExtinguisherOverlap(p, i) {
        i.kill();
        this.helpers.addLife.call(this);
        this.audio.extinguisher.play();
    },
    onSeedOverlap(p, i) {
        i.kill();
        this.helpers.addLife.call(this);
        this.audio.seed.play();
    },
    onWaterOverlap(p, i) {
        i.kill();
        this.helpers.addLife.call(this);
        this.audio.water.play();
    },
    onFertilizerOverlap(p, i) {
        i.kill();
        this.helpers.addLife.call(this);
        this.audio.fertilizer.play();
    },
    onPowerlineOverlap(p, i) {
        i.kill();
        p.slow = true;
        setTimeout(() => {
            p.slow = false;
        }, this.opts.slowDuration);
        this.helpers.hitSomething.call(this, 2);
        this.audio.powerline.play();
    },
    onFireOverlap(p, i) {
        if (i.laid) return;
        i.kill();
        this.audio.extinguish.play();
        this.helpers.updateScore.call(this);
    },
    onCloudOverlap() {
        this.helpers.hitSomething.call(this);
        this.audio.cloud.play();
    },
    onMailOverlap(p, i) {
        i.kill();
        this.helpers.updateScore.call(this);
    },
    onMailboxOverlap(p, i) {
        i.kill();
        this.helpers.updateScore.call(this);
        this.audio.mailbox.play();
    },
    onStarOverlap(p, i) {
        i.kill();
        this.helpers.updateStars.call(this, 1);
        this.audio.star.play();
    },
    addLife(i = 1) {
        this.data.levels[this.opts.level].hits = Math.max(0, this.data.levels[this.opts.level].hits - i);
        this.helpers.emitData.call(this);
    },
    updateStars(i = 1) {
        this.data.levels[this.opts.level].stars += i;
        this.helpers.emitData.call(this);
    },
    updateScore(i = 1) {
        this.data.levels[this.opts.level].score += i;
        this.helpers.emitData.call(this);
    },
    makeBackground,
    makePlatforms,
    makeItems,
};
