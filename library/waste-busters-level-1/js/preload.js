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
    // 1830 x 276 pixels
    ['heart', ENVIRONMENT.MEDIA + 'SpritesAnimations/game1.hearts.png', 305, 276],
    // 1726 x 310 pixels
    ['recycle', ENVIRONMENT.MEDIA + 'SpritesAnimations/recycle-01.png', 345, 310],
    // 1380 x 310 pixels
    ['rainbowRecycle', ENVIRONMENT.MEDIA + 'SpritesAnimations/rainbow.recycle-01.png', 345, 310],
    ]);

    loadAssets.call(this, 'audio', [
    ]);
}
