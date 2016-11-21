export default function () {
  this.game.load.image('sky', 'media/sky.png');
  this.game.load.image('ground', 'media/platform.png');
  this.game.load.image('star', 'media/star.png');
  this.game.load.image('health', 'media/firstaid.png');
  this.game.load.image('diamond', 'media/diamond.png');

  this.game.load.spritesheet('dude', 'media/dude.png', 32, 48);

  this.game.load.audio('bump', 'media/bump.mp3');
  this.game.load.audio('slam', 'media/slam.mp3');
}
