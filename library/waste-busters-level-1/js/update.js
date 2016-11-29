import addResponses from 'shared/phaser/methods/add_responses/0.1';
import movePlayer from 'shared/phaser/methods/move_player/0.1';

export default function () {

    addResponses.call(this, 'collide', [
    [this.player, this.platforms, this.helpers.onBump],
    [this.stars, this.platforms],
    [this.player, this.diamonds, this.helpers.rideDiamond],
    [this.player, this.spikes, this.helpers.hitSpike],
    ]);

    addResponses.call(this, 'overlap', [
    [this.player, this.stars, this.helpers.collectStar],
    [this.player, this.healths, this.helpers.collectHealth],
    ]);

    movePlayer.call(this, {
        upSpeed: -350,
        downSpeed: 500,
        leftSpeed: -150,
        rightSpeed: 150,
        stopFrame: 4,
    });

    this.game.camera.x =
        Math.min(Math.max(this.player.body.center.x - 400, 0), this.game.world.width - 800);
}
