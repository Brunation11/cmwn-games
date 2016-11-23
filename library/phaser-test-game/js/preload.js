import loadAssets from 'shared/phaser/methods/load_assets/0.1';

export default function () {
    loadAssets.call(this, 'image', [
    ['sky', 'media/sky.png'],
    ['ground', 'media/platform.png'],
    ['star', 'media/star.png'],
    ['health', 'media/firstaid.png'],
    ['diamond', 'media/diamond.png'],
    ]);

    loadAssets.call(this, 'spritesheet', [
    ['dude', 'media/dude.png', 32, 48],
    ]);

    loadAssets.call(this, 'audio', [
    ['bump', 'media/bump.mp3'],
    ['slam', 'media/slam.mp3'],
    ]);
}
