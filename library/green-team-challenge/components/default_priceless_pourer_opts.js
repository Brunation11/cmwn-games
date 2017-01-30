import defaultGameOpts from './default_game_opts';
import itemsToSort from './items_to_sort';

const binNames = [
    'liquids',
    'recycle',
    'landfill',
    'compost',
];

export default _.defaults({
    gameName: 'priceless-pourer',
    dropperAmount: 4,
    binNames,
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
                        item.props.className = item.props.becomes.name;
                        item.props.message = item.props.becomes.bin;
                        item.props['data-message'] = item.props.becomes.bin;
                        items[index] = item;
                        this.setState({items});
                        this.updateScreenData({
                            keys: ['item', 'name'],
                            data: _.startCase(_.replace(item.props.becomes.name, /\d+/g, '')),
                        });
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
    itemsToSort: _.filter(itemsToSort, item => _.includes(binNames, item.bin)),
}, defaultGameOpts);
