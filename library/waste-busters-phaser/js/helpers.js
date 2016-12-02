import addItems from 'shared/phaser/methods/add_items/0.1';

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
    onBump: function (player) {
        if (this.data.complete) {
            this.helpers.stay.call(this, player);
            player.body.collideWorldBounds = false;
            this.helpers.emitData.call(this);
        }
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
        this.helpers.updatePlayer.call(this);
        this.helpers.emitData.call(this);
    },
    updatePlayer: function () {
        if (this.data.bagCount === 5) {
            this.player.loadTexture('turtle5', 0);
        } else if (this.data.bagCount >= 3) {
            this.player.loadTexture('turtle3', 0);
        } else {
            this.player.loadTexture('turtle', 0);
        }
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
        this.helpers.updatePlayer.call(this);
        if (this.data.trucks === 3) this.doors.children[0].animations.play('open');
        this.helpers.emitData.call(this);
    },
    makeBackground,
    makeGround,
    makePlatforms,
    makeItems,
    makeDoor: function () {
        addItems.call(this, {
            group: 'doors'
        }, [{
            image: 'door',
            gravityY: 100,
            body: [200, 200, 25, 25],
            scale: [.5, .5],
            collideWorldBounds: false,
            left: this.game.world.width - 90,
            // left: 200,
            top: 0,
        }]);

        this.doors.children[0].animations.add('open', [0, 1, 2, 3, 4, 5, 6], 10, false);
    },
    exit: function () {
        this.data.complete = true;
        this.player.body.velocity.x = 0;
    }
};
