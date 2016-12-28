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
        this.helpers.hitSomething.call(this);
    },
    onWoodOverlap() {
        this.helpers.hitSomething.call(this);
    },
    onLandOverlap() {
        this.helpers.hitSomething.call(this);
    },
    onCrowOverlap() {
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
        p.fast = true;
        setTimeout(() => {
            p.fast = false;
        }, 2000);
    },
    onWaterOverlap(p, i) {
        i.kill();
        this.helpers.addLife.call(this);
    },
    onWebOverlap(p, i) {
        i.kill();
        p.slow = true;
        setTimeout(() => {
            p.slow = false;
        }, 2000);
    },
    onLeafOverlap(p, i) {
        if (i.laid) return;
        i.laid = true;
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
    },
    onFruitOverlap(p, i) {
        i.kill();
        this.helpers.updateScore.call(this);
    },
    onFlowerOverlap(p, i) {
        i.kill();
        this.helpers.updateScore.call(this);
    },
    onStarOverlap(p, i) {
        i.kill();
        this.helpers.updateScore.call(this, 2);
    },
    addLife(i = 1) {
        this.data.levels[this.opts.level].hits = Math.max(0, this.opts.hitsPerLife - i);
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
