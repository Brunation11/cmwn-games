import addPlatforms from 'shared/phaser/methods/add_platforms/0.1';

export default function () {
  this.controller = {};

  //  We're going to be using physics, so enable the Arcade Physics system
  this.game.physics.startSystem(Phaser.Physics.ARCADE);
  this.game.stage.disableVisibilityChange = true;
  this.game.world.setBounds(0, 0, 2000, 600);

  //  A simple background for our this.game
  this.game.add.sprite(0, 0, 'sky');
  this.game.add.sprite(800, 0, 'sky');
  this.game.add.sprite(1600, 0, 'sky');

  addPlatforms.call(this);

  // The player and its settings
  this.player = this.game.add.sprite(32, this.game.world.height - 150, 'dude');

  //  We need to enable physics on the player
  this.game.physics.arcade.enable(this.player);

  //  Player physics properties. Give the little guy a slight bounce.
  this.player.body.bounce.y = 0.2;
  this.player.body.gravity.y = 300;
  this.player.body.collideWorldBounds = true;
  this.player.body.checkCollision.up = true;
  this.player.body.checkCollision.down = true;

  //  Our two animations, walking left and right.
  this.player.animations.add('left', [0, 1, 2, 3], 10, true);
  this.player.animations.add('right', [5, 6, 7, 8], 10, true);

  this.cursors = this.game.input.keyboard.createCursorKeys();

  this.stars = this.game.add.group();

  this.stars.enableBody = true;

  //  Here we'll create 12 of them evenly spaced apart
  for (var i = 0; i < 11; i++) {
    //  Create a star inside of the 'this.stars' group
    var star = this.stars.create(i * 70, 0, 'star');

    //  Let gravity do its thing
    star.body.gravity.y = 12;

    //  This just gives each star a slightly random bounce value
    star.body.bounce.y = 0.7 + Math.random() * 0.2;
  }

  this.healths = this.game.add.group();

  this.healths.enableBody = true;

  this.healths.create(11 * 70, 0, 'health');

  this.diamonds = this.game.add.group();

  this.diamonds.enableBody = true;

  var diamond = this.diamonds.create(200, 200, 'diamond');

  diamond.body.immovable = true;
  diamond.body.collideWorldBounds = true;
  diamond.body.bounce.x = 1;

  this.spikes = this.game.add.group();

  this.spikes.enableBody = true;

  var spike = this.spikes.create(300, 300, 'diamond');
  spike.angle += 180;
  spike.anchor.setTo(0.5, 0.5);
  spike.body.immovable = true;

  this.score = 0,
  this.scoreText = this.game.add.text(16, 16, `Score: ${this.score}`, { fontSize: '32px', fill: '#000' });

  this.lives = 3,
  this.livesText = this.game.add.text(this.game.camera.view.width - 166, 16, `Lives: ${this.lives}`, { fontSize: '32px', fill: '#000' });

  this.helpers.mousedown = this.helpers.mousedown.bind(this);
  this.helpers.mouseup = this.helpers.mouseup.bind(this);
  this.helpers.mouseover = this.helpers.mouseover.bind(this);
  this.helpers.mouseout = this.helpers.mouseout.bind(this);

  var upButton = this.game.add.button(600, 400, 'star', this.helpers.mousedown, this, 2, 1, 0);

  upButton.onInputOver.add(this.helpers.mouseover, this);
  upButton.onInputOut.add(this.helpers.mouseout, this);
  upButton.onInputUp.add(this.helpers.mouseup, this);
  upButton.onInputDown.add(this.helpers.mousedown, this);
  upButton.scale.setTo(4, 4);
  upButton.data = {id: 'up'};

  var leftButton = this.game.add.button(500, 500, 'star', this.helpers.mousedown, this, 2, 1, 0);

  leftButton.onInputOver.add(this.helpers.mouseover, this);
  leftButton.onInputOut.add(this.helpers.mouseout, this);
  leftButton.onInputUp.add(this.helpers.mouseup, this);
  leftButton.onInputDown.add(this.helpers.mousedown, this);
  leftButton.scale.setTo(4, 4);
  leftButton.data = {id: 'left'};

  var downButton = this.game.add.button(600, 500, 'star', this.helpers.mousedown, this, 2, 1, 0);

  downButton.onInputOver.add(this.helpers.mouseover, this);
  downButton.onInputOut.add(this.helpers.mouseout, this);
  downButton.onInputUp.add(this.helpers.mouseup, this);
  downButton.onInputDown.add(this.helpers.mousedown, this);
  downButton.scale.setTo(4, 4);
  downButton.data = {id: 'down'};

  var rightButton = this.game.add.button(700, 500, 'star', this.helpers.mousedown, this, 2, 1, 0);

  rightButton.onInputOver.add(this.helpers.mouseover, this);
  rightButton.onInputOut.add(this.helpers.mouseout, this);
  rightButton.onInputUp.add(this.helpers.mouseup, this);
  rightButton.onInputDown.add(this.helpers.mousedown, this);
  rightButton.scale.setTo(4, 4);
  rightButton.data = {id: 'right'};

  this.bump = this.game.add.audio('bump');
  this.slam = this.game.add.audio('slam');
}
