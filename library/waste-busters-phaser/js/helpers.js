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
                path: ['game'],
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
        p.body.velocity.y = -1 * this.opts.hitVelocity;

        p.body.velocity.x = (p.body.velocity.x === Math.abs(p.body.velocity.x) ?
            d : -1 * d) * this.opts.hitVelocity;

        setTimeout(() => {
            this.isHit = false;
        }, 1000);

        this.data.hits += i;
        this.helpers.emitData.call(this);
    },
    shrink: function () {
    },
    collectRecycling: function (player, recyclying) {
        // Removes the recyclying from the screen
        recyclying.kill();
        //  update the lives
        this.data.score += this.opts.recyclingScore;
        this.helpers.emitData.call(this);
    },
    collectRainbowRecycling: function (player, recyclying) {
        // Removes the recyclying from the screen
        recyclying.kill();
        //  update the lives
        this.data.score += this.opts.rainbowRecyclyingScore;
        this.helpers.emitData.call(this);
    },
    collectHeart: function (player, heart) {
        if (this.data.lives === this.opts.maxLives) return;
        // Removes the heart from the screen
        heart.kill();
        //  update the lives
        this.data.lives++;
        this.helpers.emitData.call(this);
    },
    collectBags: function (player, bag) {
        if (this.data.bagCount === this.opts.maxBags) return;
        // Removes the bag from the screen
        bag.kill();
        //  update the bagCount
        this.data.bagCount++;
        this.helpers.updatePlayer.call(this);
        this.helpers.emitData.call(this);
    },
    updatePlayer: function () {
        if (this.data.bagCount === this.opts.maxBags) {
            this.player.loadTexture('turtle5', 0);
        } else if (this.data.bagCount >= this.opts.maxBags / 2) {
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
        if (truck.driving || this.data.bagCount !== this.opts.maxBags) return;
        truck.driving = true;
        truck.animations.play('drive');
        this.data.bagCount = 0;
        this.data.levels[this.opts.level].trucks++;
        this.helpers.updatePlayer.call(this);
        if (this.data.levels[this.opts.level].trucks === this.opts.maxTrucks) {
            this.doors.children[0].animations.play('open');
            this.data.levels[this.opts.level].doorOpen = true;
        }
        this.helpers.emitData.call(this);
    },
    makeBackground,
    makeGround,
    makePlatforms,
    makeLogs: function () {
        const crops = [
            [100, 0, 220, 100],
            [415, 0, 415, 100],
            [830, 0, 415, 100],
        ];

        _.each(this.platforms.children, platform => {
            var index;
            // if (true) {
            if (Math.random() < this.opts.platformLogChance) {
                platform.hasLog = true;
                index = platform.width > 300 ? 3 : platform.width > 150 ? 2 : 1;
                addItems.call(this, {
                    group: 'logs',
                    defaultOpts: {
                        image: 'logs',
                        scale: [.5, .5],
                        collideWorldBounds: false,
                        checkCollisionRight: false,
                        checkCollisionLeft: false,
                        crop: crops[Math.floor(Math.random() * index)],
                    }
                }, [{
                    top: platform.top - 35,
                    left: platform.left,
                }]);
            }
        });
    },
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
            top: 0,
        }]);

        this.doors.children[0].animations.add('open', [0, 1, 2, 3, 4, 5, 6], 10, false);
        this.doors.children[0].animations.add('close', [6, 5, 4, 3, 2, 1, 0], 10, false);
    },
    exit: function () {
        if (this.data.levels[this.opts.level].trucks !== this.opts.maxTrucks) return;
        if (this.data.levels[this.opts.level].complete) return;
        this.data.levels[this.opts.level].complete = true;
        this.player.body.collideWorldBounds = false;
        this.helpers.emitData.call(this);
        setTimeout(() => {
            this.doors.children[0].animations.play('close');
            this.data.levels[this.opts.level].doorOpen = false;
        }, 1500);
    }
};
