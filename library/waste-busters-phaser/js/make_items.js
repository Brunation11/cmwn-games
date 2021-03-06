import addItems from 'shared/phaser/methods/add_items/0.1';

export default function () {
    const crops = [
        [0, 0, 155, 140],
        [155, 0, 155, 140],
        [310, 0, 155, 140],
        [465, 0, 155, 140],
        [620, 0, 155, 140],
        [775, 0, 155, 140],
        [930, 0, 155, 140],
        [0, 0, 300, 360],
        [300, 0, 300, 360],
        [600, 0, 300, 360],
        [900, 0, 300, 360],
        [1200, 0, 300, 360],
        [1500, 0, 300, 360],
        [1800, 0, 300, 360],
    ];

    const generalDefaultProps = {
        image: 'items',
        gravityY: 12,
        body: [115, 100, 20, 50],
        scale: [.5, .5],
        collideWorldBounds: false,
    };

    const treeDefaultProps = {
        image: 'trees',
        gravityY: 12,
        body: [300, 325, 0, 0],
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
        hole: _.defaults({
            crop: crops[2],
            body: [115, 20, 20, 50],
            gravityY: 10000,
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
        lightening: _.defaults({
            crop: crops[6],
            gravityY: 0,
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
        tree1: _.defaults({
            crop: crops[7],
            body: null,
        }, treeDefaultProps),
        tree2: _.defaults({
            crop: crops[8]
        }, treeDefaultProps),
        tree3: _.defaults({
            crop: crops[9]
        }, treeDefaultProps),
        tree4: _.defaults({
            crop: crops[10],
            body: null,
        }, treeDefaultProps),
        tree5: _.defaults({
            crop: crops[11]
        }, treeDefaultProps),
        tree6: _.defaults({
            crop: crops[12]
        }, treeDefaultProps),
        tree7: _.defaults({
            crop: crops[13]
        }, treeDefaultProps),
        snake: {
            scale: [.25, .25],
            gravityY: 12,
            collideWorldBounds: false,
        }
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
        tree1: [],
        tree2: [],
        tree3: [],
        tree4: [],
        tree5: [],
        tree6: [],
        tree7: [],
        squareBush: [],
        roundBush: [],
        snake: [],
        hole: [],
        bag: [],
        rock: [],
        stump: [],
        heart: [],
        recycle: [],
        raibowRecycle: [],
        lightening: [],
        truck: [],
        blank: [],
    };

    var placeObject = function (platform, up, over) {
        var object = objects.shift();
        switch (object) {
            case 'tree1':
                up += 110;
                break;
            case 'tree2':
            case 'tree3':
            case 'tree5':
            case 'tree7':
                up += 90;
                break;
            case 'tree4':
                up += 105;
                break;
            case 'tree6':
                up += 95;
                break;
        }
        if (platform.hasLog && !(object === 'bag' || object === 'blank')) {
            objects.unshift(object);
            object = 'blank';
        }
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
        if (truckNumber <= truckTotal &&
            platform.left > this.game.world.width * truckNumber / (truckTotal + 1.5)) {
            locations.truck.push({
                top: platform.top - 50,
                left: platform.left,
            });
            truckNumber++;
            return true;
        }
        if (platform.left > this.game.world.width - 200) return false;
        placeObject(platform, 20, 30);
        return objects.length;
    });

    // this makes sure that all the bags are placed
    while (~objects.indexOf('bag')) {
        locations.bag.push(locations.blank.shift());
        objects[objects.indexOf('bag')] = 'blank';
    }

    _.each(locations, (locationArray, key) => {
        var holeLocations;
        var snakeLocations;
        if (key === 'blank') return;
        if (key === 'snake') {
            holeLocations = _.map(locationArray, opts => {
                return {
                    top: opts.top,
                    left: opts.left + 80,
                };
            });
            addItems.call(this, {
                group: groups.hole, defaultOpts: defaultProps.hole
            }, holeLocations);
            snakeLocations = _.map(locationArray, opts => {
                return {
                    top: opts.top - 10,
                    left: opts.left + 70,
                    image: 'snake' + _.random(2)
                };
            });
            addItems.call(this, {
                group: groups.snake, defaultOpts: defaultProps.snake
            }, snakeLocations);
            return;
        }
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

    _.each(this.trees.children, tree => {
        tree.sendToBack();
    });

    _.each(this.snakes.children, snake => {
        snake.loadTexture(null, 0);
    });
}
