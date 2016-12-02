import addItems from 'shared/phaser/methods/add_items/0.1';

export default function () {
    const h = 80;

    const crops = [
        [200, 0, 240, 96],
        [790, 0, 350, 96],
        [1290, 0, 645, 96],
    ];

    const bodies = [
        [200, 28, 0, 80],
        [310, 28, 0, 80],
        [605, 28, 0, 80],
    ];

    const platformParams = [
        [[130, 1 * h], 0],
        [[350, 2 * h], 1],
        [[950, 2 * h], 2],
        [[1050, 3 * h], 0],
        [[2650, 1 * h], 2],
        [[3600, 3 * h], 0],
    ];

    const locations = [
        [100, 3 * h],
        [600, 3 * h],
        [650, 1 * h],
        [1350, 1 * h],
        [1400, 3 * h],
        [1700, 2 * h],
        [1900, 1 * h],
        [2050, 3 * h],
        [2300, 2 * h],
        [2550, 3 * h],
        [2800, 2 * h],
        [3000, 3 * h],
        [3300, 2 * h],
    ];

    var platformOpts = [];

    function addPlatform(location, i) {
        platformOpts.push({
            left: location[0],
            top: location[1],
            crop: crops[i],
            body: bodies[i],
        });
    }

    _.each(platformParams, params => {
        addPlatform(...params);
    });

    _.each(locations, location => {
        addPlatform(location, _.random(crops.length - 1));
    });

    addItems.call(this, {
        group: 'platforms', defaultOpts: {
            top: 300,
            collideWorldBounds: false,
            image: 'platforms',
            scale: [.5, .5],
        }
    }, platformOpts);
}
