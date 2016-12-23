import addItems from 'shared/phaser/methods/add_items/0.1';

export default function () {
    const crops = [
        [0, 0, 155, 140],
    ];

    const generalDefaultProps = {
        image: 'land',
        gravityY: 0,
        body: [115, 100, 20, 50],
        scale: [.5, .5],
        collideWorldBounds: false,
    };

    const defaultProps = {
        land1: _.defaults({
            crop: crops[0],
        }, generalDefaultProps)
    };

    const groups = {
        wind: 'winds',
        water: 'waters',
        web: 'webs',
        log: 'logs',
        leaf: 'leafs',
        egg: 'eggs',
        cloud: 'clouds',
        wood1: 'logs',
        wood2: 'logs',
        wood3: 'logs',
        land1: 'lands',
        land2: 'lands',
        land3: 'lands',
        land4: 'lands',
        land5: 'lands',
        fruit1: 'fruits',
        fruit2: 'fruits',
        fruit3: 'fruits',
        fruit4: 'fruits',
        flower1: 'flowers',
        flower2: 'flowers',
        flower3: 'flowers',
        flower4: 'flowers',
        flower5: 'flowers',
        flower6: 'flowers',
    };

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
        ));
    };

    var objects = getObjects([], this.opts.itemAmounts);

    var locations = _.defaults({
        blank: [],
    }, _.reduce(this.opts.itemAmounts, (a, v, k) => {
        a[k] = [];
        return a;
    }, {}));

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
