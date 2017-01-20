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
    getDropperProps(opts) {
        let props = defaultGameOpts.getDropperProps.call(this, opts);

        props.onTransitionEnd = function (e) {
            let itemRef = this.refs['items-' + this.firstItemIndex];
            let DOMNode;
            let onAnimationEnd;

            if (this.props.dropClass !== 'LIQUIDS') return;
            if (itemRef.props.message !== 'liquids') return;

            DOMNode = ReactDOM.findDOMNode(itemRef);

            if (DOMNode !== e.target) return;

            onAnimationEnd = () => {
                this.pickUp(_.defaults({
                    onPickUp: function () {
                        let items = this.state.items;
                        let index = this.firstItemIndex;
                        let item = items[index];
                        let newBin = opts.itemsToSort[item.props.becomes].bin;
                        item.props.className = item.props.becomes;
                        item.props.message = newBin;
                        item.props['data-message'] = newBin;
                        items[index] = item;
                        this.setState({items});
                        DOMNode.removeEventListener('animationend', onAnimationEnd);
                    }
                }, this.props));
            };

            if (!itemRef.state.className || itemRef.state.className.indexOf('POUR') === -1) {
                DOMNode.addEventListener('animationend', onAnimationEnd);
                itemRef.addClassName('POUR');
            }
        };

        return props;
    },
    getCatcherProps(opts) {
        var props = defaultGameOpts.getCatcherProps.call(this, opts);

        props.onCorrect = function (bucketRef) {
            this.updateGameData({
                keys: [_.camelCase(opts.gameName), 'levels', opts.level, 'score'],
                data: opts.score + opts.pointsPerItem,
            });

            if (bucketRef.props.message !== 'liquids') {
                this.updateScreenData({
                    keys: ['manual-dropper', 'next'],
                    data: true,
                });
                return;
            }
        };

        return props;
    },
    itemsToSort: [
        {
            name: 'emptyBottle',
            bin: 'recycle'
        },
        {
            name: 'appleCore',
            bin: 'compost'
        },
        {
            name: 'candyBag',
            bin: 'landfill'
        },
        {
            name: 'fullBottle',
            bin: 'liquids',
            becomes: 'emptyBottle'
        },
    ],
}, defaultGameOpts);
