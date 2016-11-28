export default function (opts = {}) {
    opts = _.defaults(opts, {
        left: 32,
        top: 500,
        image: 'dude',
        bounceX: 0,
        bounceY: 0.2,
        gravityX: 0,
        gravityY: 300,
        collideWorldBounds: true,
        checkCollisionUp: true,
        checkCollisionDown: true,
        leftFrames: [0, 1, 2, 3],
        leftFrameRate: 10,
        leftLoop: true,
        rightFrames: [5, 6, 7, 8],
        rightFrameRate: 10,
        rightLoop: true,
    });

  // The player and its settings
    this.player = this.game.add.sprite(opts.left, opts.top, opts.image);

  //  We need to enable physics on the player
    this.game.physics.arcade.enable(this.player);

  //  Player physics properties. Give the little guy a slight bounce.
    this.player.body.bounce.x = opts.bounceX;
    this.player.body.bounce.y = opts.bounceY;
    this.player.body.gravity.x = opts.gravityX;
    this.player.body.gravity.y = opts.gravityY;
    this.player.body.collideWorldBounds = opts.collideWorldBounds;
    this.player.body.checkCollision.up = opts.checkCollisionUp;
    this.player.body.checkCollision.down = opts.checkCollisionDown;

  //  Our two animations, walking left and right.
    this.player.animations.add('left', opts.leftFrames, opts.leftFrameRate, opts.leftLoop);
    this.player.animations.add('right', opts.rightFrames, opts.rightFrameRate, opts.rightLoop);
}
