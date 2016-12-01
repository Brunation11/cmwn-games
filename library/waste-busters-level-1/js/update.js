import addResponses from 'shared/phaser/methods/add_responses/0.1';
import movePlayer from 'shared/phaser/methods/move_player/0.1';

export default function () {

    if (!this.shouldUpdate) {
        setTimeout(() => this.shouldUpdate = true, 100);
        return;
    }

    addResponses.call(this, 'collide', [
    [this.player, this.ground, this.helpers.onBump],
    [this.player, this.water, this.helpers.hitWater],
    [this.player, this.platforms, this.helpers.onBump],
    [this.player, this.bushes, this.helpers.onBump],
    [this.player, this.enemies, this.helpers.htiEnemy],
    [this.player, this.obstacles, this.helpers.hitObstacle],
    [this.bushes, this.ground, this.helpers.stay],
    [this.bushes, this.platforms, this.helpers.stay],
    [this.enemies, this.ground, this.helpers.stay],
    [this.enemies, this.platforms, this.helpers.stay],
    [this.bags, this.ground, this.helpers.stay],
    [this.bags, this.platforms, this.helpers.stay],
    [this.obstacles, this.ground, this.helpers.stay],
    [this.obstacles, this.platforms, this.helpers.stay],
    ]);

    addResponses.call(this, 'overlap', [
    [this.player, this.bags, this.helpers.collectBags],
    [this.player, this.hearts, this.helpers.collectHeart],
    [this.player, this.recycles, this.helpers.collectRecycling],
    [this.player, this.rainbowRecycles, this.helpers.collectRainbowRecycling],
    [this.player, this.trucks, this.helpers.loadTruck],
    ]);

    movePlayer.call(this, {
        upSpeed: -350,
        downSpeed: 500,
        leftSpeed: -150,
        rightSpeed: 150,
        stopFrame: 6,
    });

    this.game.camera.x =
        Math.min(Math.max(this.player.body.center.x - 400, 0), this.game.world.width - 800);

    // this.clouds.children[0].position.x = -.25 * this.game.camera.x;
    this.clouds.children[0].position.x = -.25 * this.player.body.center.x;
    this.clouds.children[1].position.x = 2975.5 - .25 * this.player.body.center.x;
}
