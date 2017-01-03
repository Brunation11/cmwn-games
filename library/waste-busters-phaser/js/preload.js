import loadAssets from 'shared/phaser/methods/load_assets/0.1';

export default function () {
    loadAssets.call(this, 'image', [
    ['sky', MEDIA.IMAGE + 'game.1.bkg.sky.jpg'],
    ['clouds', MEDIA.IMAGE + 'game.1.bkg.clouds.png'],
    ['ground', MEDIA.SPRITE + 'game1.ground.png'],
    ['platforms', MEDIA.SPRITE + 'game1.platform.png'],
    // 930 x 140 pixels
    ['items', MEDIA.SPRITE + 'game1.5.png'],
    // 1246 x 100 pixels
    ['logs', MEDIA.SPRITE + 'game1.logs.png'],
    // 2100 x 360 pixels
    ['trees', MEDIA.SPRITE + 'game1.trees.png'],
    ]);

    loadAssets.call(this, 'spritesheet', [
    // 6180 x 646 pixels
    ['turtle', MEDIA.SPRITE + 'turtle.walk.0.png', 515, 645],
    ['turtle3', MEDIA.SPRITE + 'turtle.walk.3.png', 515, 645],
    ['turtle5', MEDIA.SPRITE + 'turtle.walk.5.png', 515, 645],
    // 1830 x 276 pixels
    ['heart', MEDIA.SPRITE + 'game1.hearts.png', 305, 276],
    // 1726 x 310 pixels
    ['recycle', MEDIA.SPRITE + 'recycle-01.png', 345, 310],
    // 1380 x 310 pixels
    ['rainbowRecycle', MEDIA.SPRITE + 'rainbow.recycle-01.png', 345, 310],
    // 5750 x 286 pixels
    ['truck', MEDIA.SPRITE + 'truck.png', 575, 286],
    // 1320 x 226 pixels
    ['door', MEDIA.SPRITE + 'door.open.png', 220, 226],
    // 3600 x 326 pixels
    ['jet', MEDIA.SPRITE + 'jet.pack.png', 600, 326],
    // 7860 x 410 pixels
    ['snake0', MEDIA.SPRITE + 'mother.slither-01.png', 655, 410],
    // 7860 x 410 pixels
    ['snake1', MEDIA.SPRITE + 'sister.slither-01.png', 655, 410],
    // 7860 x 410 pixels
    ['snake2', MEDIA.SPRITE + 'brother.slither-01.png', 655, 410],
    ]);

    loadAssets.call(this, 'atlas', [
        [
            'snake0up',
            `${MEDIA.SPRITE}Mom.leaving.hole.png`,
            `${MEDIA.SPRITE}Mom.leaving.hole.json`
        ],
        [
            'snake0down',
            `${MEDIA.SPRITE}mom.going.to.hole.png`,
            `${MEDIA.SPRITE}mom.going.to.hole.json`
        ],
        [
            'snake1up',
            `${MEDIA.SPRITE}Sister.leave.hole.png`,
            `${MEDIA.SPRITE}Sister.leave.hole.json`
        ],
        [
            'snake1down',
            `${MEDIA.SPRITE}sister.down.hole.png`,
            `${MEDIA.SPRITE}sister.down.hole.json`
        ],
        [
            'snake2up',
            `${MEDIA.SPRITE}brother.leave.hole.png`,
            `${MEDIA.SPRITE}brother.leave.hole.json`
        ],
        [
            'snake2down',
            `${MEDIA.SPRITE}brother.down.hole.png`,
            `${MEDIA.SPRITE}brother.down.hole.json`
        ],
    ]);

    loadAssets.call(this, 'audio', [
        ['bush', `${MEDIA.EFFECT}BumpOrLandOnBush.mp3`],
        ['stump', `${MEDIA.EFFECT}BumpTreeStump.mp3`],
        ['truck', `${MEDIA.EFFECT}DumpTruckZoom.mp3`],
        ['hole', `${MEDIA.EFFECT}Fall_In_Hole.mp3`],
        ['log', `${MEDIA.EFFECT}goInLog.mp3`],
        ['jump', `${MEDIA.EFFECT}Jump.mp3`],
        ['water', `${MEDIA.EFFECT}LandInWater.mp3`],
        ['heart', `${MEDIA.EFFECT}LifeHeartCapture.mp3`],
        ['lightening', `${MEDIA.EFFECT}LightingCapture.mp3`],
        ['bag', `${MEDIA.EFFECT}PickUpTrashBag.mp3`],
        // the empty sound is not currently used anywhere
        // ['empty', `${MEDIA.EFFECT}MissTrashBag.mp3`],
        ['rainbowRecycle', `${MEDIA.EFFECT}RecycleColors.mp3`],
        ['recycle', `${MEDIA.EFFECT}RecycleGreen.mp3`],
    ]);
}
