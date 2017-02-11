import addItems from 'shared/phaser/methods/add_items/0.1';

export default function () {
    var locations = [];
    for (let left = 0; left < this.game.world.width; left += 2880) {
        locations.push({ left });
    }

    addItems.call(this, {
        group: 'sky', enableBody: false, defaultOpts: {
            collideWorldBounds: false,
            top: 0,
            image: 'sky',
            scale: [.5, .5],
        }
    }, locations);

    if (this.opts.level === 1) {
        addItems.call(this, {
            group: 'sky', enableBody: false, defaultOpts: {
                collideWorldBounds: false,
                top: 0,
                image: 'buildings',
                scale: [.5, .5],
            }
        }, locations);
    }

    if (this.opts.level === 2) {
        addItems.call(this, {
            group: 'sky', enableBody: false, defaultOpts: {
                collideWorldBounds: false,
                top: 0,
                image: 'houses',
                scale: [.5, .5],
            }
        }, locations);
    }

    if (this.opts.level === 3) {
        addItems.call(this, {
            group: 'sky', enableBody: false, defaultOpts: {
                collideWorldBounds: false,
                top: 0,
                image: 'ground',
                scale: [.5, .5],
            }
        }, locations);
    }
}
