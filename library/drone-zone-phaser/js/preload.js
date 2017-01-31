import loadAssets from 'shared/phaser/methods/load_assets/0.1';

export default function () {
    loadAssets.call(this, 'image', [
    ['sky', `${MEDIA.IMAGE}BKG.8.jpg`],
    ['buildings', `${MEDIA.IMAGE}LEVEL1.BKG.png`],
    ['houses', `${MEDIA.IMAGE}LEVEL2.BKG.png`],
    ['ground', `${MEDIA.IMAGE}LEVEL3.BKG.png`],
    ['battery', `${MEDIA.IMAGE}dronebattery.png`],
    ['powerline', `${MEDIA.IMAGE}powerlines.png`],
    ]);

    loadAssets.call(this, 'spritesheet', [
    ['mail', `${MEDIA.SPRITE}sprite.mail.png`, 145, 111],
    ['mailbox', `${MEDIA.SPRITE}sprite.mailboxes.png`, 130, 216],
    ['plant', `${MEDIA.SPRITE}sprite.plants.png`, 180, 260],
    ['farming', `${MEDIA.SPRITE}sprite.farming.png`, 110, 141],
    ['fire', `${MEDIA.SPRITE}sprite.fires.png`, 280, 461],
    ['cloud', `${MEDIA.SPRITE}sprite.clouds.png`, 360, 220],
    ['extinguisher', `${MEDIA.SPRITE}sprite.pathicons.png`, 355, 211],
    ]);

    loadAssets.call(this, 'atlas', [
        [
            'fire-drone',
            `${MEDIA.SPRITE}Drone.Sprite.with.fire.png`,
            `${MEDIA.SPRITE}Drone.Sprite.with.fire.json`
        ],
        [
            'delivery-drone',
            `${MEDIA.SPRITE}Drone.Sprite.with.box.png`,
            `${MEDIA.SPRITE}Drone.Sprite.with.box.json`
        ],
        [
            'farm-drone',
            `${MEDIA.SPRITE}Drone.Sprite.with.watercan.png`,
            `${MEDIA.SPRITE}Drone.Sprite.with.watercan.json`
        ],
        [
            'helicopter',
            `${MEDIA.SPRITE}helicopter-animation-sprite.png`,
            `${MEDIA.SPRITE}helicopter-animation-sprite.json`
        ],
        [
            'plane',
            `${MEDIA.SPRITE}plane-animation-sprite.png`,
            `${MEDIA.SPRITE}plane-animation-sprite.json`
        ],
        [
            'balloon',
            `${MEDIA.SPRITE}hot-air-balloon.png`,
            `${MEDIA.SPRITE}hot-air-balloon.json`
        ],
        [
            'star',
            `${MEDIA.SPRITE}starsprite.png`,
            `${MEDIA.SPRITE}starsprite.json`
        ],
    ]);

    loadAssets.call(this, 'audio', [
        ['extinguish', `${MEDIA.EFFECT}HitTarget_Fire.mp3`],
        ['extinguisher', `${MEDIA.EFFECT}CollectExting.mp3`],
        ['powerline', `${MEDIA.EFFECT}HitPowerLine.mp3`],
        ['helicopter', `${MEDIA.EFFECT}Helicopter.mp3`],
        ['plane', `${MEDIA.EFFECT}Airplane.mp3`],
        ['balloon', `${MEDIA.EFFECT}HotAirBalloon.mp3`],
        ['mailbox', `${MEDIA.EFFECT}HitMailTarget.mp3`],
        ['battery', `${MEDIA.EFFECT}CollectBattery.mp3`],
        ['cloud', `${MEDIA.EFFECT}HitCloud.mp3`],
        // ['plant', `${MEDIA.EFFECT}Wind.mp3`],
        ['seed', `${MEDIA.EFFECT}CollectSeed.mp3`],
        ['water', `${MEDIA.EFFECT}CollectDrop.mp3`],
        ['fertilizer', `${MEDIA.EFFECT}CollectFertilizer.mp3`],
        ['star', `${MEDIA.EFFECT}CollectStar.mp3`],
    ]);
}
