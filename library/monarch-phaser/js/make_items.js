import addItems from 'shared/phaser/methods/add_items/0.1';

export default function () {
    const defaultProps = this.opts.itemProps;
    const groups = this.opts.groups;

    var getObjects = function (objects = [], amounts = {}) {
        return objects.concat(_.shuffle(_.reduce(amounts, (a, v, k) =>
            a.concat(_.times(v || 0, () => k)), [])));
    };

    var objects = getObjects([], this.opts.itemAmounts);

    var locations = _.defaults(_.reduce(this.opts.itemAmounts, (a, v, k) => {
        a[k] = [];
        return a;
    }, {}), _.reduce(this.opts.obstacleAmounts, (a, v, k) => {
        a[k] = [];
        return a;
    }, {}));

    var placeObject = function (top, left) {
        let object = objects.shift();
        if (locations[object]) {
            locations[object].push({
                top,
                left,
            });
        }
    };

    for (let left = 500; left < this.game.world.width; left += 200) {
        placeObject(200 * _.random(0, 2), left);
        if (!objects.length) objects = getObjects([], this.opts.itemAmounts);
    }

    objects = getObjects([], this.opts.obstacleAmounts);

    for (let left = 500; left < this.game.world.width; left += 500) {
        placeObject(100 + 200 * _.random(0, 1), left);
        if (!objects.length) objects = getObjects([], this.opts.obstacleAmounts);
    }

    _.each(locations, (locationArray, key) => {
        if (key === 'blank') return;
        addItems.call(this, {
            group: groups[key], defaultOpts: defaultProps[key]
        }, locationArray);
    });

    if (this.stars) {
        _.each(this.stars.children, star => {
            star.animations.add('spin', [0, 1, 2, 3, 4, 5], 10, true);
            star.animations.play('spin');
        });
    }

    if (this.crows) {
        _.each(this.crows.children, crow => {
            crow.animations.add('fly', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
            crow.body.velocity.x = -200;
            crow.animations.play('fly');
        });
    }
}
