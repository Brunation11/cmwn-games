import addItems from 'shared/phaser/methods/add_items/0.1';

export default function () {
    addItems.call(this, {
        group: 'sky', enableBody: false, defaultOpts: {
            collideWorldBounds: false,
            top: 0,
            image: 'sky',
            scale: [.5, .5],
        }
    }, [
        { left: 0 },
        { left: 2975.5 }
    ]);
}
