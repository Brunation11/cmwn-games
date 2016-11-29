import loadAssets from 'shared/phaser/methods/load_assets/0.1';

export default function () {
    loadAssets.call(this, 'image', [
    ['sky', ENVIRONMENT.MEDIA + 'ImageAssets/game.1.bkg.sky.jpg'],
    ['clouds', ENVIRONMENT.MEDIA + 'ImageAssets/game.1.bkg.clouds.png'],
    ['ground', ENVIRONMENT.MEDIA + 'SpritesAnimations/game1.ground.png'],
    ['platforms', ENVIRONMENT.MEDIA + 'SpritesAnimations/game1.platform.png'],
    ]);

    loadAssets.call(this, 'spritesheet', [
    ['turtle', ENVIRONMENT.MEDIA + 'SpritesAnimations/turtle.walk.0.png', 390, 396],
    ]);

    loadAssets.call(this, 'audio', [
    ]);
}
