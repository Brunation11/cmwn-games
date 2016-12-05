import addItems from 'shared/phaser/methods/add_items/0.1';

export default function () {
    const crops = [
        [0, 0, 155, 140],
        [155, 0, 155, 140],
        [310, 0, 155, 140],
        [465, 0, 155, 140],
        [620, 0, 155, 140],
        [775, 0, 155, 140],
    ];

    const generalDefaultProps = {
        image: 'items',
        gravityY: 12,
        body: [115, 100, 20, 50],
        scale: [.5, .5],
        collideWorldBounds: false,
    };

    const defaultProps = {
        squareBush: _.defaults({
            crop: crops[0],
        }, generalDefaultProps),
        roundBush: _.defaults({
            crop: crops[1],
        }, generalDefaultProps),
        snake: _.defaults({
            crop: crops[2],
            body: [115, 20, 20, 50],
        }, generalDefaultProps),
        bag: _.defaults({
            crop: crops[3],
        }, generalDefaultProps),
        rock: _.defaults({
            crop: crops[4],
        }, generalDefaultProps),
        stump: _.defaults({
            crop: crops[5],
            body: [115, 120, 20, 50],
        }, generalDefaultProps),
        heart: {
            image: 'heart',
            scale: [.15, .15],
        },
        recycle: {
            image: 'recycle',
            scale: [.15, .15],
        },
        raibowRecycle: {
            image: 'rainbowRecycle',
            scale: [.15, .15],
        },
        truck: {
            image: 'truck',
            scale: [.5, .5],
            collideWorldBounds: false,
        },
    };

    const groups = {
        squareBush: 'bushes',
        roundBush: 'bushes',
        snake: 'enemies',
        bag: 'bags',
        rock: 'obstacles',
        stump: 'obstacles',
        heart: 'hearts',
        recycle: 'recycles',
        raibowRecycle: 'rainbowRecycles',
        truck: 'trucks',
    };

    var truckNumber = 1;
    var truckTotal = 3;

    var objects = _.shuffle([]
        .concat(_.times(1, () => 'squareBush'))
        .concat(_.times(1, () => 'roundBush'))
        .concat(_.times(0, () => 'snake'))
        .concat(_.times(15, () => 'bag'))
        .concat(_.times(10, () => ''))
        .concat(_.times(1, () => 'rock'))
        .concat(_.times(1, () => 'stump'))
        .concat(_.times(1, () => 'heart'))
        .concat(_.times(1, () => 'recycle'))
        .concat(_.times(1, () => 'raibowRecycle'))
    );

    var locations = {
        squareBush: [],
        roundBush: [],
        snake: [],
        bag: [],
        rock: [],
        stump: [],
        heart: [],
        recycle: [],
        raibowRecycle: [],
        truck: [],
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

    objects = objects.concat(_.shuffle([]
        .concat(_.times(1, () => 'squareBush'))
        .concat(_.times(1, () => 'roundBush'))
        .concat(_.times(2, () => 'snake'))
        .concat(_.times(0, () => 'bag'))
        .concat(_.times(1, () => 'rock'))
        .concat(_.times(1, () => 'stump'))
    ));

    objects.unshift('');

    _.every(this.ground.children, platform => {
        if (truckNumber <= truckTotal &&
            platform.left > this.game.world.width * truckNumber / (truckTotal + 1.75)) {
            locations.truck.push({
                top: platform.top - 50,
                left: platform.left,
            });
            truckNumber++;
            return true;
        }
        if (platform.left > this.game.world.width - 200) return false;
        placeObject(platform, 50, 30);
        return objects.length;
    });

    _.each(locations, (locationArray, key) => {
        addItems.call(this, {
            group: groups[key], defaultOpts: defaultProps[key]
        }, locationArray);
    });

    _.each(this.hearts.children, heart => {
        heart.animations.add('spin', [0, 1, 2, 3, 4, 5], 10, true);
        heart.animations.play('spin');
    });

    _.each(this.recycles.children, recycle => {
        recycle.animations.add('spin', [0, 1, 2, 3, 4], 10, true);
        recycle.animations.play('spin');
    });

    _.each(this.rainbowRecycles.children, recycle => {
        recycle.animations.add('spin', [0, 1, 2, 3], 10, true);
        recycle.animations.play('spin');
    });

    _.each(this.trucks.children, truck => {
        var drive = truck.animations.add('drive', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, false);
        drive.onComplete.add(() => {
            truck.body.velocity.x = 200;
        });
    });
}
