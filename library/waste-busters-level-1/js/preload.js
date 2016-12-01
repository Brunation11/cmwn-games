import loadAssets from 'shared/phaser/methods/load_assets/0.1';

export default function () {
    loadAssets.call(this, 'image', [
    ['sky', ENVIRONMENT.MEDIA + 'ImageAssets/game.1.bkg.sky.jpg'],
    ['clouds', ENVIRONMENT.MEDIA + 'ImageAssets/game.1.bkg.clouds.png'],
    ['ground', ENVIRONMENT.MEDIA + 'SpritesAnimations/game1.ground.png'],
    ['platforms', ENVIRONMENT.MEDIA + 'SpritesAnimations/game1.platform.png'],
    // 930 x 140 pixels
    ['items', ENVIRONMENT.MEDIA + 'SpritesAnimations/game1.5.png'],
    ]);

    loadAssets.call(this, 'spritesheet', [
    // 6180 x 646 pixels
    ['turtle', ENVIRONMENT.MEDIA + 'SpritesAnimations/turtle.walk.0.png', 515, 646],
    ]);

    loadAssets.call(this, 'audio', [
    ]);
}
