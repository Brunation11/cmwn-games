export default function (platformOpts = {}, optsArray) {
  platformOpts = _.defaults(platformOpts, {
    enableBody: true,
  });

  if (!this.platforms) {
    //  The platforms group contains the ground and the 2 ledges we can jump on
    this.platforms = this.game.add.group();

    //  We will enable physics for any object that is created in this group
    this.platforms.enableBody = platformOpts.enableBody;
  }

  // Here we create the ground.
  var ground = this.platforms.create(0, this.game.world.height - 64, 'ground');

  //  Scale it to fit the width of the this.game (the original sprite is 400x32 in size)
  ground.scale.setTo(5, 2);

  //  This stops it from falling away when you jump on it
  ground.body.immovable = true;

  //  Now let's create two ledges
  var ledge = this.platforms.create(400, 400, 'ground');

  ledge.body.immovable = true;

  ledge = this.platforms.create(-150, 250, 'ground');

  ledge.body.immovable = true;
}
