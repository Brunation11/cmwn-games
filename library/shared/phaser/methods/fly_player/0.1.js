export default function (opts) {
    opts = _.defaults(opts, {
        upSpeed: -350,
        rightSpeed: 150,
        stopFrame: 0,
    });

    //  Reset the players velocity (movement)
    if (this.isHit) return;
    this.player.body.velocity.x = opts.rightSpeed;
    this.player.animations.play('right');

    //  Allow the player to jump if they are touching the ground.
    if (this.cursors.up.isDown || this.controller.up ||
        this.cursors.space.isDown || this.controller.space) {
        this.player.body.velocity.y = opts.upSpeed;
    }
}

