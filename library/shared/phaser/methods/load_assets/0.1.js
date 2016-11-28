export default function (fn = 'image', optsArray) {
    _.each(optsArray, opts => {
        opts = _.defaults(opts, [
            'sky',
            'media/sky.png',
            32,
            48,
        ]);
        this.game.load[fn](...opts);
    });
}
