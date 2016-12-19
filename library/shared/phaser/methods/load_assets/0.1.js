export default function (fn = 'image', optsArray) {
    _.each(optsArray, opts => {
        opts = _.defaults(opts, [
            'sky',
            'media/sky.png',
        ]);
        this.game.load[fn](...opts);
    });
}
