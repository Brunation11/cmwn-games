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

  _.each(optsArray, opts => {
    var platform;

    opts = _.defaults(opts, {
      immovable: true,
      scale: [1, 1],
      left: 0,
      top: 0,
      image: 'ground',
    });

    platform = this.platforms.create(opts.left, opts.top, opts.image);
    platform.scale.setTo(...opts.scale);
    platform.body.immovable = opts.immovable;
  });
}
