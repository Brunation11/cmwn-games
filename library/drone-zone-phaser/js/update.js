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
    [this.player, this.batterys, this.helpers.onBatteryOverlap],
    [this.player, this.extinguishers, this.helpers.onExtinguisherOverlap],
    [this.player, this.fires, this.helpers.onFireOverlap],
    [this.player, this.clouds, this.helpers.onCloudOverlap],
    [this.player, this.helicopters, this.helpers.onHelicopterOverlap],
    [this.player, this.stars, this.helpers.onStarOverlap],
    [this.player, this.plants, this.helpers.onPlantOverlap],
    [this.player, this.powerlines, this.helpers.onPowerlineOverlap],
    [this.player, this.mails, this.helpers.onMailOverlap],
    [this.player, this.mailboxs, this.helpers.onMailboxOverlap],
    [this.player, this.planes, this.helpers.onPlaneOverlap],
    [this.player, this.balloons, this.helpers.onBalloonOverlap],
    [this.player, this.seeds, this.helpers.onSeedOverlap],
    [this.player, this.waters, this.helpers.onWaterOverlap],
    [this.player, this.fertilizers, this.helpers.onFertilizerOverlap],
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
