import loadAssets from 'shared/phaser/methods/load_assets/0.1';

export default function () {
    loadAssets.call(this, 'image', [
    ['sky', ENVIRONMENT.MEDIA + 'ImageAssets/game.1.bkg.sky.jpg'],
    ['clouds', ENVIRONMENT.MEDIA + 'ImageAssets/game.1.bkg.clouds.png'],
    ['ground', ENVIRONMENT.MEDIA + 'SpritesAnimations/game1.ground.png'],
    ['platforms', ENVIRONMENT.MEDIA + 'SpritesAnimations/game1.platform.png'],
    // 930 x 140 pixels
    ['items', ENVIRONMENT.MEDIA + 'SpritesAnimations/game1.5.png'],
    // 1246 x 100 pixels
    ['logs', ENVIRONMENT.MEDIA + 'SpritesAnimations/game1.logs.png'],
    // 2100 x 360 pixels
    ['trees', ENVIRONMENT.MEDIA + 'SpritesAnimations/game1.trees.png'],
    ]);

    loadAssets.call(this, 'spritesheet', [
    // 6180 x 646 pixels
    ['turtle', ENVIRONMENT.MEDIA + 'SpritesAnimations/turtle.walk.0.png', 515, 645],
    ['turtle3', ENVIRONMENT.MEDIA + 'SpritesAnimations/turtle.walk.3.png', 515, 645],
    ['turtle5', ENVIRONMENT.MEDIA + 'SpritesAnimations/turtle.walk.5.png', 515, 645],
    // 1830 x 276 pixels
    ['heart', ENVIRONMENT.MEDIA + 'SpritesAnimations/game1.hearts.png', 305, 276],
    // 1726 x 310 pixels
    ['recycle', ENVIRONMENT.MEDIA + 'SpritesAnimations/recycle-01.png', 345, 310],
    // 1380 x 310 pixels
    ['rainbowRecycle', ENVIRONMENT.MEDIA + 'SpritesAnimations/rainbow.recycle-01.png', 345, 310],
    // 5750 x 286 pixels
    ['truck', ENVIRONMENT.MEDIA + 'SpritesAnimations/truck.png', 575, 286],
    // 1751 x 253 pixels
    ['door', ENVIRONMENT.MEDIA + 'SpritesAnimations/door.open.png', 250, 253],
    // 3600 x 326 pixels
    ['jet', ENVIRONMENT.MEDIA + 'SpritesAnimations/jet.pack.png', 600, 326],
    // 7860 x 410 pixels
    ['snake0', ENVIRONMENT.MEDIA + 'SpritesAnimations/mother.slither-01.png', 655, 410],
    // 3326 x 250 pixels
    ['snake0up', ENVIRONMENT.MEDIA + 'SpritesAnimations/Mom.leaving.hole.png', 475, 250],
    // 3326 x 250 pixels
    ['snake0down', ENVIRONMENT.MEDIA + 'SpritesAnimations/Mom.going.to.hole.png', 475, 250],
    // 7860 x 410 pixels
    ['snake1', ENVIRONMENT.MEDIA + 'SpritesAnimations/sister.slither-01.png', 655, 410],
    // 3326 x 250 pixels
    ['snake1up', ENVIRONMENT.MEDIA + 'SpritesAnimations/sister.leave.hole.png', 475, 250],
    // 3326 x 250 pixels
    ['snake1down', ENVIRONMENT.MEDIA + 'SpritesAnimations/sister.down.hole.png', 475, 250],
    // 7860 x 410 pixels
    ['snake2', ENVIRONMENT.MEDIA + 'SpritesAnimations/brother.slither-01.png', 655, 410],
    // 3326 x 250 pixels
    ['snake2up', ENVIRONMENT.MEDIA + 'SpritesAnimations/brother.leave.hole.png', 475, 250],
    // 3326 x 250 pixels
    ['snake2down', ENVIRONMENT.MEDIA + 'SpritesAnimations/brother.down.hole.png', 475, 250],
    ]);

    loadAssets.call(this, 'audio', [
    ]);
}
