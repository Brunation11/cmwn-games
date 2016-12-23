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
}
