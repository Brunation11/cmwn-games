import addResponses from 'shared/phaser/methods/add_responses/0.1';
import flyPlayer from 'shared/phaser/methods/fly_player/0.1';

export default function () {
    var upSpeed;
    var rightSpeed;

    if (this.controller.pause || this.data.levels[this.opts.level].complete) {
        this.controller = { pause: true };
        this.game.paused = true;
        return;
    }

    addResponses.call(this, 'overlap', [
    [this.player, this.logs, this.helpers.onLogOverlap],
    [this.player, this.woods, this.helpers.onWoodOverlap],
    [this.player, this.lands, this.helpers.onLandOverlap],
    [this.player, this.winds, this.helpers.onWindOverlap],
    [this.player, this.waters, this.helpers.onWaterOverlap],
    [this.player, this.webs, this.helpers.onWebOverlap],
    [this.player, this.leafs, this.helpers.onLeafOverlap],
    [this.player, this.clouds, this.helpers.onCloudOverlap],
    [this.player, this.fruits, this.helpers.onFruitOverlap],
    [this.player, this.flowers, this.helpers.onFlowerOverlap],
    [this.player, this.stars, this.helpers.onStarOverlap],
    [this.player, this.crows, this.helpers.onCrowOverlap],
    ]);

    upSpeed = this.player.fast ? this.opts.fastUpSpeed :
        this.player.slow ? this.opts.slowUpSpeed : this.opts.upSpeed;
    rightSpeed = this.player.fast ? this.opts.fastRightSpeed :
        this.player.slow ? this.opts.slowRightSpeed : this.opts.rightSpeed;

    flyPlayer.call(this, {
        upSpeed,
        rightSpeed,
        gravityY: this.opts.gravityY,
        stopFrame: this.opts.playerStopFrame,
    });

    this.game.camera.x =
        Math.min(Math.max(this.player.body.center.x - 400, 0), this.game.world.width - 800);
}
