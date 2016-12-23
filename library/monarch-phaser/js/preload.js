import loadAssets from 'shared/phaser/methods/load_assets/0.1';

export default function () {
    loadAssets.call(this, 'image', [
    ['sky', `${MEDIA.IMAGE}level0${this.opts.level}.panorama.jpg`],
    ['wind', `${MEDIA.IMAGE}img.wind.png`],
    ['water', `${MEDIA.IMAGE}img.waterdrop.png`],
    ['web', `${MEDIA.IMAGE}img.spiderweb.png`],
    ['log', `${MEDIA.IMAGE}img.log.png`],
    ['leaf', `${MEDIA.IMAGE}img.leaf.png`],
    ['egg', `${MEDIA.IMAGE}img.egg.png`],
    ['cloud', `${MEDIA.IMAGE}img.cloud.png`],
    ]);

    loadAssets.call(this, 'spritesheet', [
    ['wood', `${MEDIA.SPRITE}sprite.logs.png`, 490, 125],
    ['land', `${MEDIA.SPRITE}sprite.land.png`, 345, 245],
    ['fruits', `${MEDIA.SPRITE}sprite.fruits.png`, 120, 105],
    ['flowers', `${MEDIA.SPRITE}sprite.flowers.png`, 190, 180],
    ]);

    loadAssets.call(this, 'atlas', [
        [
            'butterfly',
            `${MEDIA.SPRITE}monarchsprite.png`,
            `${MEDIA.SPRITE}monarchsprite.json`
        ],
        [
            'crow',
            `${MEDIA.SPRITE}crowflyingsprite.png`,
            `${MEDIA.SPRITE}crowflyingsprite.json`
        ],
        [
            'star',
            `${MEDIA.SPRITE}starsprite.png`,
            `${MEDIA.SPRITE}starsprite.json`
        ],
    ]);

    // loadAssets.call(this, 'audio', [
    // ]);
}
