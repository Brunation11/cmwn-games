import loadAssets from 'shared/phaser/methods/load_assets/0.1';

export default function () {
    loadAssets.call(this, 'image', [
    ['sky', ENVIRONMENT.MEDIA + 'ImageAssets/game.1.bkg.sky.jpg'],
    ['clouds', ENVIRONMENT.MEDIA + 'ImageAssets/game.1.bkg.clouds.jpg'],
    ]);

    loadAssets.call(this, 'spritesheet', [
    ['dude', ENVIRONMENT.MEDIA + 'SpritesAnimations/turtle.walk.0.png', 32, 48],
    ]);

    loadAssets.call(this, 'audio', [
    ]);
}
