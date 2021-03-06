import addItems from 'shared/phaser/methods/add_items/0.1';

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
        if (this.isHit) return;
        this.helpers.hitSomething.call(this);
        this.audio.obstacle.play();
    },
    onWoodOverlap() {
        if (this.isHit) return;
        this.helpers.hitSomething.call(this);
        this.audio.obstacle.play();
    },
    onLandOverlap() {
        if (this.isHit) return;
        this.helpers.hitSomething.call(this);
        this.audio.obstacle.play();
    },
    onCrowOverlap() {
        if (this.isHit) return;
        this.helpers.hitSomething.call(this);
        this.audio.bird.play();
    },
    onWorldCollide() {
        if (this.isHit) return;
        this.helpers.hitSomething.call(this);
        this.audio.obstacle.play();
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
        p.fast = (p.fast || 0) + 1;
        setTimeout(() => {
            p.fast--;
        }, this.opts.fastDuration);
        this.helpers.updateScore.call(this, 3);
        this.audio.wind.play();
    },
    onWaterOverlap(p, i) {
        i.kill();
        this.helpers.addLife.call(this);
        this.audio.water.play();
    },
    onWebOverlap(p, i) {
        i.kill();
        p.slow = true;
        setTimeout(() => {
            p.slow = false;
        }, this.opts.slowDuration);
        this.helpers.hitSomething.call(this, 2);
    },
    onLeafOverlap(p, i) {
        if (i.laid) return;
        i.laid = true;
        this.audio.egg.play();
        addItems.call(this, {
            group: this.opts.groups.egg, defaultOpts: this.opts.itemProps.egg
        }, [{
            left: i.body.x + 50,
            top: i.body.y,
        }]);
        this.helpers.updateScore.call(this);
    },
    onCloudOverlap() {
        this.helpers.hitSomething.call(this);
        this.audio.cloud.play();
    },
    onFruitOverlap(p, i) {
        i.kill();
        this.helpers.updateScore.call(this);
    },
    onFlowerOverlap(p, i) {
        i.kill();
        this.helpers.updateScore.call(this);
        this.audio.flower.play();
    },
    onStarOverlap(p, i) {
        i.kill();
        this.helpers.updateScore.call(this, 2);
        this.audio.star.play();
    },
    addLife(i = 1) {
        this.data.levels[this.opts.level].hits = Math.max(0, this.data.levels[this.opts.level].hits - i);
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
