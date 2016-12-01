import makeBackground from './make_background';
import makeGround from './make_ground';
import makePlatforms from './make_platforms';
import makeItems from './make_items';

export default {
    onBump: function () {
    },
    collectRecycling: function (player, recyclying) {
        // Removes the recyclying from the screen
        recyclying.kill();
        //  update the lives
        this.data.score += 100;
        //  emit event with data to skoash game
        this.emitEvent({
            updateGameState: {
                path: 'data',
                data: this.data
            }
        });
    },
    collectRainbowRecycling: function (player, recyclying) {
        // Removes the recyclying from the screen
        recyclying.kill();
        //  update the lives
        this.data.score += 300;
        //  emit event with data to skoash game
        this.emitEvent({
            updateGameState: {
                path: 'data',
                data: this.data
            }
        });
    },
    collectHeart: function (player, heart) {
        if (this.data.lives === 3) return;
        // Removes the heart from the screen
        heart.kill();
        //  update the lives
        this.data.lives++;
        //  emit event with data to skoash game
        this.emitEvent({
            updateGameState: {
                path: 'data',
                data: this.data
            }
        });
    },
    collectBags: function (player, bag) {
        if (this.data.bagCount === 5) return;
        // Removes the bag from the screen
        bag.kill();
        //  update the bagCount
        this.data.bagCount++;
        //  emit event with data to skoash game
        this.emitEvent({
            updateGameState: {
                path: 'data',
                data: this.data
            }
        });
    },
    stay: function (a) {
        a.body.gravity.y = 0;
        a.body.velocity.y = 0;
    },
    hitWater: function (p) {
        if (this.isHit) return;
        this.isHit = true;
        p.body.velocity.y = -200;

        // this.lives -= 1;
        // this.livesText.text = `Lives: ${this.lives}`;

        p.body.velocity.x = (p.body.velocity.x === Math.abs(p.body.velocity.x) ? 1 : -1) * 200;

        setTimeout(() => {
            this.isHit = false;
        }, 1000);
    },
    makeBackground,
    makeGround,
    makePlatforms,
    makeItems,
};
