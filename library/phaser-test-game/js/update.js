export default function () {
  //  Collide the player and the stars with the platforms
  this.game.physics.arcade.collide(this.player, this.platforms, this.helpers.onBump.bind(this));
  this.game.physics.arcade.collide(this.stars, this.platforms);
  this.game.physics.arcade.collide(this.player, this.diamonds, this.helpers.rideDiamond.bind(this), null, this);
  this.game.physics.arcade.collide(this.player, this.spikes, this.helpers.hitSpike.bind(this), null, this);
  this.game.physics.arcade.overlap(this.player, this.stars, this.helpers.collectStar.bind(this), null, this);
  this.game.physics.arcade.overlap(this.player, this.healths, this.helpers.collectHealth.bind(this), null, this);

  //  Reset the players velocity (movement)
  if (this.isHit) return;
  this.player.body.velocity.x = 0;

  if (this.cursors.left.isDown || this.controller.left) {
    //  Move to the left
    this.player.body.velocity.x = -150;

    this.player.animations.play('left');
  } else if (this.cursors.right.isDown || this.controller.right) {
    //  Move to the right
    this.player.body.velocity.x = 150;

    this.player.animations.play('right');
  } else {
    //  Stand still
    this.player.animations.stop();

    this.player.frame = 4;
  }

  //  Allow the player to jump if they are touching the ground.
  if ((this.cursors.up.isDown || this.controller.up) && this.player.body.touching.down) {
    this.player.body.velocity.y = -350;
  }

  //  Allow the player to jump if they are touching the ground.
  if ((this.cursors.down.isDown || this.controller.down) && !this.player.body.touching.down) {
    this.player.body.velocity.y = 500;
  }

  if (this.isComplete) {
    this.game.camera.x = Math.min(Math.max(this.player.body.center.x - 400, 0), this.game.world.width - 800);

    this.scoreText.x = this.game.camera.x + 16;
    this.livesText.x = this.game.camera.x + this.game.camera.view.width - 166;
  }

}
