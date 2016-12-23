import addItems from 'shared/phaser/methods/add_items/0.1';

export default function () {
    const crops = [
        [0, 0, 155, 140],
    ];

    const generalDefaultProps = {
        image: 'logs',
        gravityY: 12,
        body: [115, 100, 20, 50],
        scale: [.5, .5],
        collideWorldBounds: false,
    };

    const defaultProps = {
    };

    const groups = {
        squareBush: 'bushes',
        roundBush: 'bushes',
        snake: 'snakes',
        hole: 'holes',
        bag: 'bags',
        rock: 'obstacles',
        stump: 'obstacles',
        heart: 'hearts',
        recycle: 'recycles',
        raibowRecycle: 'rainbowRecycles',
        lightening: 'lightening',
        truck: 'trucks',
        tree1: 'trees',
        tree2: 'trees',
        tree3: 'trees',
        tree4: 'trees',
        tree5: 'trees',
        tree6: 'trees',
        tree7: 'trees',
    };

    var truckNumber = 1;
    var truckTotal = this.opts.maxTrucks;

    var getObjects = function (objects = [], amounts = {}) {
        return objects.concat(_.shuffle([]
            .concat(_.times(amounts.squareBush || 0, () => 'squareBush'))
            .concat(_.times(amounts.roundBush || 0, () => 'roundBush'))
            .concat(_.times(amounts.snake || 0, () => 'snake'))
            .concat(_.times(amounts.hole || 0, () => 'hole'))
            .concat(_.times(amounts.bag || 0, () => 'bag'))
            .concat(_.times(amounts.blank || 0, () => 'blank'))
            .concat(_.times(amounts.rock || 0, () => 'rock'))
            .concat(_.times(amounts.stump || 0, () => 'stump'))
            .concat(_.times(amounts.heart || 0, () => 'heart'))
            .concat(_.times(amounts.recycle || 0, () => 'recycle'))
            .concat(_.times(amounts.raibowRecycle || 0, () => 'raibowRecycle'))
            .concat(_.times(amounts.lightening || 0, () => 'lightening'))
            .concat(_.times(amounts.tree1 || 0, () => 'tree1'))
            .concat(_.times(amounts.tree2 || 0, () => 'tree2'))
            .concat(_.times(amounts.tree3 || 0, () => 'tree3'))
            .concat(_.times(amounts.tree4 || 0, () => 'tree4'))
            .concat(_.times(amounts.tree5 || 0, () => 'tree5'))
            .concat(_.times(amounts.tree6 || 0, () => 'tree6'))
            .concat(_.times(amounts.tree7 || 0, () => 'tree7'))
        ));
    };

    var objects = getObjects([], this.opts.platformItemAmounts);

    var locations = {
        wind: [],
        water: [],
        web: [],
        log: [],
        leaf: [],
        egg: [],
        cloud: [],
        logs: [],
        land: [],
        fruits: [],
        flowers: [],
        blank: [],
    };

    var placeObject = function (platform, up, over) {
        var object = objects.shift();
        if (locations[object]) {
            locations[object].push({
                top: platform.top - up,
                left: platform.left + over,
            });
        }
    };

    _.every(this.platforms.children, platform => {
        placeObject(platform, 50, 30);
        if (platform.width > 120) placeObject(platform, 50, 80);
        if (platform.width > 200) placeObject(platform, 50, 170);
        return objects.length;
    });

    objects = getObjects(objects, this.opts.groundItemAmounts);
    objects.unshift('blank');
    objects.unshift('blank');

    _.every(this.ground.children, platform => {
        if (platform.left > this.game.world.width - 200) return false;
        placeObject(platform, 20, 30);
        return objects.length;
    });

    _.each(locations, (locationArray, key) => {
        if (key === 'blank') return;
        addItems.call(this, {
            group: groups[key], defaultOpts: defaultProps[key]
        }, locationArray);
    });

    // _.each(this.hearts.children, heart => {
    //     heart.animations.add('spin', [0, 1, 2, 3, 4, 5], 10, true);
    //     heart.animations.play('spin');
    // });
}
