import addItems from 'shared/phaser/methods/add_items/0.1';

export default function () {
    var h = 80;
    var platformOpts = [];

    function addPlatform(location, i) {
        platformOpts.push({
            left: location[0],
            top: location[1],
            crop: crops[i],
            body: bodies[i],
        });
    }

    // 1936 x 96 pixels
    let crops = [
        [200, 0, 240, 96],
        [790, 0, 350, 96],
        [1290, 0, 645, 96],
    ];

    let bodies = [
        [200, 28, 0, 80],
        [310, 28, 0, 80],
        [605, 28, 0, 80],
    ];

    let locations = [
        [100, 3 * h],
        [600, 3 * h],
        [650, 1 * h],
        [1350, 1 * h],
        [1400, 3 * h],
    ];

    addPlatform([130, 1 * h], 0);
    addPlatform([350, 2 * h], 1);
    addPlatform([950, 2 * h], 2);
    addPlatform([1050, 3 * h], 0);

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
