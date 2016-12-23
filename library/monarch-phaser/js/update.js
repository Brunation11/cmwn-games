import addResponses from 'shared/phaser/methods/add_responses/0.1';
import flyPlayer from 'shared/phaser/methods/fly_player/0.1';

export default function () {

    if (!this.shouldUpdate) {
        setTimeout(() => this.shouldUpdate = true, 100);
        return;
    }

    if (this.controller.pause) {
        this.controller = { pause: true };
        flyPlayer.call(this);
        return;
    }

    if (this.data.levels[this.opts.level].complete) {
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
    ]);

    flyPlayer.call(this, {
        upSpeed: this.opts.upSpeed,
        downSpeed: this.opts.downSpeed,
        leftSpeed: this.opts.leftSpeed,
        rightSpeed: this.opts.rightSpeed,
        stopFrame: this.opts.playerStopFrame,
    });

    this.game.camera.x =
        Math.min(Math.max(this.player.body.center.x - 400, 0), this.game.world.width - 800);
}
