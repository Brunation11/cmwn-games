import makeBackground from './make_background';
import makeGround from './make_ground';
import makePlatforms from './make_platforms';
import makeItems from './make_items';

export default {
    emitData: function () {
        //  emit event with data to skoash game
        this.emitEvent({
            updateGameState: {
                path: 'data',
                data: this.data
            }
        });
    },
    onBump: function () {
    },
    hitEnemy: function (p) {
        this.helpers.hitSomething.call(this, p);
    },
    hitObstacle: function (p) {
        this.helpers.hitSomething.call(this, p);
    },
    hitWater: function (p) {
        this.helpers.hitSomething.call(this, p, 1, 1);
    },
    hitSomething: function (p, i = 1, d = -1) {
        if (this.isHit) return;
        this.isHit = true;
        p.body.velocity.y = -200;

        p.body.velocity.x = (p.body.velocity.x === Math.abs(p.body.velocity.x) ? d : -1 * d) * 200;

        setTimeout(() => {
            this.isHit = false;
        }, 1000);

        this.data.hits += i;
        this.helpers.emitData.call(this);
    },
    collectRecycling: function (player, recyclying) {
        // Removes the recyclying from the screen
        recyclying.kill();
        //  update the lives
        this.data.score += 100;
        this.helpers.emitData.call(this);
    },
    collectRainbowRecycling: function (player, recyclying) {
        // Removes the recyclying from the screen
        recyclying.kill();
        //  update the lives
        this.data.score += 300;
        this.helpers.emitData.call(this);
    },
    collectHeart: function (player, heart) {
        if (this.data.lives === 3) return;
        // Removes the heart from the screen
        heart.kill();
        //  update the lives
        this.data.lives++;
        this.helpers.emitData.call(this);
    },
    collectBags: function (player, bag) {
        if (this.data.bagCount === 5) return;
        // Removes the bag from the screen
        bag.kill();
        //  update the bagCount
        this.data.bagCount++;
        this.helpers.emitData.call(this);
    },
    stay: function (a) {
        a.body.gravity.y = 0;
        a.body.velocity.y = 0;
    },
    loadTruck: function (player, truck) {
        if (truck.driving || this.data.bagCount !== 5) return;
        truck.driving = true;
        truck.animations.play('drive');
        this.data.bagCount = 0;
        this.data.trucks++;
        this.helpers.emitData.call(this);
    },
    makeBackground,
    makeGround,
    makePlatforms,
    makeItems,
};
