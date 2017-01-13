import defaultGameOpts from './default_game_opts';

export default _.defaults({
    gameName: 'priceless-pourer',
    dropperAmount: 4,
    binNames: [
        'liquids',
        'recycle',
        'landfill',
        'compost',
    ],
    getSelectableProps(opts) {
        return {
            onSelect: function (binRefKey) {
                this.updateScreenData({
                    key: 'manual-dropper',
                    data: {
                        drop: true,
                        dropClass: _.toUpper(opts.binNames[binRefKey])
                    }
                });
            },
        };
    },
    getCatcherProps(opts) {
        var props = defaultGameOpts.getCatcherProps.call(this, opts);

        props.onCorrect = function () {
            this.updateGameData({
                keys: ['recyclingChampion', 'levels', opts.level, 'score'],
                data: opts.score + 50,
            });
            this.updateScreenData({
                keys: ['manual-dropper', 'next'],
                data: true,
            });
        };

        return props;
    },
    itemsToSort: {
        emptyBottle: {
            bin: 'recycle'
        },
        eatenApple: {
            bin: 'compost'
        },
        candyBag: {
            bin: 'landfill'
        },
        fullBottle: {
            bin: 'liquids', becomes: 'bottle'
        },
    },
}, defaultGameOpts);
