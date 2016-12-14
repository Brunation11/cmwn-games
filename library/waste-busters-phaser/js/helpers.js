import addItems from 'shared/phaser/methods/add_items/0.1';

import makeBackground from './make_background';
import makeGround from './make_ground';
import makePlatforms from './make_platforms';
import makeLogs from './make_logs';
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
    activateSnake(snake, hole) {
        var climb;

        if (!snake.active && !snake.climbing) {
            snake.left = hole.left - 100;
            snake.loadTexture(snake.originalImage + 'up', 0);
            climb = snake.animations.add('hole', [0, 1, 2, 3, 4, 5, 6], 10, false);
            climb.onComplete.add(() => {
                snake.loadTexture(snake.originalImage, 5);
                snake.scale.setTo(.3, .3);
                snake.left = snake.left - 25;
                snake.top = snake.top - 25;
                snake.animations.add('left', [5, 4, 3, 2, 1, 0], 10, true);
                snake.animations.add('right', [6, 7, 8, 9, 10, 11], 10, true);
                snake.animations.play('left');
                snake.body.velocity.x = -100;
                setTimeout(() => {
                    snake.climbing = false;
                }, 5000);
            });
            snake.scale.setTo(.4, .4);
            snake.animations.play('hole');
            snake.active = true;
            snake.climbing = true;
        } else if (snake.active && !snake.climbing && snake.body.velocity.x > 0 && snake.left < hole.left) {
            snake.left = hole.left - 100;
            snake.body.velocity.x = 0;
            snake.loadTexture(snake.originalImage + 'down', 0);
            snake.left = snake.left + 25;
            snake.top = snake.top + 25;
            climb = snake.animations.add('hole', [0, 1, 2, 3, 4, 5, 6], 10, false);
            climb.onComplete.add(() => {
                snake.loadTexture(null, 0);
                setTimeout(() => {
                    snake.climbing = false;
                }, 5000);
            });
            snake.scale.setTo(.4, .4);
            snake.animations.play('hole');
            snake.active = false;
            snake.climbing = true;
        }
    },
    turnAround(enemy) {
        if (enemy.isTurning) return;
        enemy.isTurning = true;
        enemy.body.velocity.x = -1 * enemy.body.velocity.x;
        enemy.animations.play(enemy.body.velocity.x < 0 ? 'left' : 'right');
        setTimeout(() => {
            enemy.isTurning = false;
        }, 500);
    },
    hitEnemy(p, e) {
        if (!e.active) return;
        this.helpers.hitSomething.call(this, p);
    },
    hitObstacle(p) {
        this.helpers.hitSomething.call(this, p);
    },
    hitWater(p) {
        this.helpers.hitSomething.call(this, p, 1, 1);
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
    inLog() {
        this.player.canJump = false;
    },
    collectRecycling(player, recyclying) {
        // Removes the recyclying from the screen
        recyclying.kill();
        //  update the lives
        this.data.score += this.opts.recyclingScore;
        this.helpers.emitData.call(this);
    },
    collectRainbowRecycling(player, recyclying) {
        // Removes the recyclying from the screen
        recyclying.kill();
        //  update the lives
        this.data.score += this.opts.rainbowRecyclyingScore;
        this.helpers.emitData.call(this);
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
        if (this.player.boost) {
            this.player.loadTexture('jet', 0);
            this.player.animations.add('left', this.opts.boostLeftFrames,
                this.opts.boostLeftFrameRate, this.opts.boostLeftLoop);
            this.player.animations.add('right', this.opts.boostRightFrames,
                this.opts.boostRightFrameRate, this.opts.boostRightLoop);
        } else {
            if (this.data.bagCount === this.opts.maxBags) {
                this.player.loadTexture('turtle5', 0);
            } else if (this.data.bagCount >= this.opts.maxBags / 2) {
                this.player.loadTexture('turtle3', 0);
            } else {
                this.player.loadTexture('turtle', 0);
            }
            this.player.animations.add('left', this.opts.leftFrames,
                this.opts.leftFrameRate, this.opts.leftLoop);
            this.player.animations.add('right', this.opts.rightFrames,
                this.opts.rightFrameRate, this.opts.rightLoop);
        }
    },
    stay(a) {
        a.body.gravity.y = 0;
        a.body.velocity.y = 0;
    },
    loadTruck(player, truck) {
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
    makeLogs,
    makeItems,
    makeDoor() {
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

        this.doors.children[0].animations.add('close', [0, 1, 2, 3, 4, 5], 10, false);
        this.doors.children[0].animations.add('open', [5, 4, 3, 2, 1, 0], 10, false);
    },
    exit() {
        if (this.data.levels[this.opts.level].trucks !== this.opts.maxTrucks) return;
        if (this.data.levels[this.opts.level].complete) return;
        this.data.levels[this.opts.level].complete = true;
        this.player.body.collideWorldBounds = false;
        this.helpers.emitData.call(this);
        setTimeout(() => {
            this.doors.children[0].animations.play('close');
            this.data.levels[this.opts.level].doorOpen = false;
            this.helpers.emitData.call(this);
            this.player.body.velocity.x = 0;
        }, 1500);
    }
};
