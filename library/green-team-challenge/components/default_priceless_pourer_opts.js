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

        props.onCorrect = function (bucketRef, catchableRefKey) {
            this.updateGameData({
                keys: ['recyclingChampion', 'levels', opts.level, 'score'],
                data: opts.score + opts.pointsPerItem,
            });

            if (bucketRef.props.message !== 'liquids') {
                this.updateScreenData({
                    keys: ['manual-dropper', 'next'],
                    data: true,
                });
                return;
            }

            this.updateScreenData({
                keys: ['manual-dropper'],
                data: {
                    pickUp: true,
                    onPickUp: function () {
                        var items = this.state.items;
                        var index = parseInt(catchableRefKey.replace('items-', ''), 10);
                        var item = items[index];
                        var newBin = opts.itemsToSort[item.props.becomes].bin;
                        item.props.className = item.props.becomes;
                        item.props.message = newBin;
                        item.props['data-message'] = newBin;
                        items[index] = item;
                        this.setState({items});
                    }
                },
            });
        };

        return props;
    },
    itemsToSort: {
        emptyBottle: {
            bin: 'recycle'
        },
        appleCore: {
            bin: 'compost'
        },
        candyBag: {
            bin: 'landfill'
        },
        fullBottle: {
            bin: 'liquids', becomes: 'emptyBottle'
        },
    },
}, defaultGameOpts);
