import defaultGameOpts from './default_game_opts';
import Catchable from 'shared/components/catchable/0.1';
import itemsToSort from './items_to_sort';

const binNames = [
    'liquids',
    'food-share',
    'recycle',
    'landfill',
    'compost',
    'tray-stacking',
];

const mapItems = function (itemNames) {
    const items = _.filter(itemsToSort, item => _.includes(itemNames, item.name));

    return _.map(items, item =>
        <Catchable
            className={item.name}
            message={item.bin}
            reCatchable={true}
            becomes={item.becomes}
        />
    );
};

const resort = function () {
    this.updateScreenData({
        keys: ['reveal', 'open'],
        data: 'resort',
        callback: () => {
            setTimeout(() => {
                this.updateScreenData({
                    data: {
                        reveal: {
                            open: null,
                            close: true,
                        },
                        'manual-dropper': {
                            pickUp: true,
                        },
                        catcher: {
                            caught: false,
                        }
                    }
                });
            }, 1000);
        }
    });
};

export default _.defaults({
    gameName: 'master-sorter',
    dropperAmount: 2,
    binNames,
    getSelectableProps(opts) {
        return {
            onSelect: function (binRefKey) {
                var dropClass = _.toUpper(opts.binNames[binRefKey]);
                if (opts.itemRef) {
                    this.updateScreenData({
                        keys: ['item', 'className'],
                        data: dropClass,
                    });
                    return;
                }

                this.updateScreenData({
                    key: 'manual-dropper',
                    data: {
                        drop: true,
                        dropClass,
                    }
                });
            },
        };
    },
    getDropperProps(opts) {
        return {
            onTransitionEnd: function (e) {
                let tray = this.refs['items-' + this.firstItemIndex];
                let itemIndex = _.indexOf(tray.refs['children-0'].state.classes, 'SELECTED');
                let itemRef = !opts.itemRef ? tray : tray.refs['children-0'].refs[itemIndex];
                let DOMNode;
                let onAnimationEnd;

                if (!opts.itemRef ||
                    e.propertyName !== 'top' ||
                    (
                        !_.includes(opts.itemClassName, 'LIQUIDS') &&
                        !_.includes(this.props.dropClass, 'LIQUIDS')
                    )
                ) {
                    return;
                }

                if (itemRef.props.message !== 'liquids') {
                    let hits = opts.hits + 1;

                    this.updateGameData({
                        keys: [_.camelCase(opts.gameName), 'levels', opts.level],
                        data: {
                            start: false,
                            hits,
                        }
                    });

                    this.updateScreenData({
                        key: 'item',
                        data: {
                            removeClassName: true,
                            className: null,
                        },
                    });

                    resort.call(this);

                    return;
                }

                DOMNode = ReactDOM.findDOMNode(itemRef);

                if (DOMNode !== e.target) return;

                onAnimationEnd = () => {
                    let items = this.state.items;
                    let index = this.firstItemIndex;
                    let item = items[index];
                    let newBin = _.find(itemsToSort, itemToSort =>
                        itemToSort.name === itemRef.props.becomes
                    ).bin;
                    let selectable = item.props.children[0];
                    let selectedItem = selectable.props.list[itemIndex];
                    selectedItem.props.className = selectedItem.props.becomes;
                    selectedItem.props.message = newBin;
                    selectedItem.props['data-message'] = newBin;
                    items[index] = item;
                    this.setState({items});

                    this.updateGameData({
                        keys: [_.camelCase(opts.gameName), 'levels', opts.level, 'score'],
                        data: opts.score + opts.pointsPerItem,
                    });

                    this.updateScreenData({
                        key: 'item',
                        data: {
                            removeClassName: true,
                            className: null,
                            amount: opts.itemAmount - 1,
                        },
                        callback: () => {
                            tray.refs['children-0'].setState({classes: {}});
                            this.updateScreenData({
                                key: 'item',
                                data: {
                                    name: null,
                                    ref: null,
                                    className: null,
                                }
                            });
                        }
                    });

                    DOMNode.removeEventListener('animationend', onAnimationEnd);
                };

                if (!_.includes(opts.itemClassName, 'POUR')) {
                    DOMNode.addEventListener('animationend', onAnimationEnd);
                    this.updateScreenData({
                        keys: ['item', 'className'],
                        data: 'POUR',
                    });
                }
            },
            onComponentWillReceiveProps: function (nextProps) {
                if (nextProps.itemRef != null) {
                    if (nextProps.itemClassName != null &&
                        nextProps.itemClassName !== this.props.itemClassName) {
                        let selectable = this.refs['items-' + this.firstItemIndex].refs['children-0'];
                        let itemIndex = _.indexOf(selectable.state.classes, selectable.props.selectClass);
                        let item = selectable.refs[itemIndex];
                        item.addClassName(nextProps.itemClassName);
                    }

                    if (nextProps.removeItemClassName &&
                        nextProps.removeItemClassName !== this.props.itemClassName) {
                        let selectable = this.refs['items-' + this.firstItemIndex].refs['children-0'];
                        let itemIndex = _.indexOf(selectable.state.classes, selectable.props.selectClass);
                        let item = selectable.refs[itemIndex];
                        item.removeAllClassNames();
                        this.updateScreenData({
                            key: 'item',
                            data: {
                                className: null,
                                removeClassName: false,
                            }
                        });
                    }
                }

                if (nextProps.selectItem &&
                    nextProps.selectItem !== this.props.selectItem) {
                    let tray = this.getFirstItem();
                    let rect = ReactDOM.findDOMNode(tray).getBoundingClientRect();
                    let name = _.startCase(tray.props.className);
                    let left = rect.left;
                    let top = rect.top;

                    this.updateScreenData({
                        key: 'item',
                        data: {
                            name,
                            top,
                            left,
                        },
                    });
                }
            },
            onNext: function () {
                this.updateScreenData({
                    keys: ['item', 'amount'],
                    data: _.reduce(this.getFirstItem().refs['children-0'].refs, (a, ref) =>
                        a + (ref.props.message === 'liquids' ? 2 : 1)
                    , 0),
                });
            },
        };
    },
    getCatcherProps(opts) {
        return {
            onCorrect: function (bucketRef) {
                let amount = opts.itemAmount - 1;

                this.updateGameData({
                    keys: [_.camelCase(opts.gameName), 'levels', opts.level, 'score'],
                    data: opts.score + opts.pointsPerItem,
                });

                if (opts.itemRef) {
                    this.updateScreenData({
                        key: 'item',
                        data: {
                            className: 'CAUGHT',
                            amount,
                        },
                        callback: () => {
                            this.updateScreenData({
                                key: 'item',
                                data: {
                                    name: null,
                                    ref: null,
                                    className: null,
                                },
                                callback: () => {
                                    if (!amount) {
                                        this.updateScreenData({
                                            keys: ['manual-dropper', 'selectItem'],
                                            data: true,
                                        });
                                    }
                                }
                            });
                        }
                    });

                    return;
                }

                if (_.get(bucketRef, 'props.message') !== 'liquids') {
                    this.updateScreenData({
                        keys: ['manual-dropper', 'next'],
                        data: true,
                    });
                    return;
                }
            },
            onIncorrect: function () {
                let hits = opts.hits + 1;

                this.updateGameData({
                    keys: [_.camelCase(opts.gameName), 'levels', opts.level],
                    data: {
                        start: false,
                        hits,
                    }
                });

                this.updateScreenData({
                    key: 'item',
                    data: {
                        removeClassName: true,
                        className: null,
                    }
                });

                // if (hits === opts.maxHits) {
                //     setTimeout(() => {
                //         this.updateScreenData({
                //             keys: ['manual-dropper', 'pickUp'],
                //             data: true,
                //         });
                //     }, 1000);
                //     return;
                // }

                resort.call(this);
            },
        };
    },
    itemsToSort: [
        {
            name: 'tray',
            bin: 'tray-stacking',
            children: [
                <skoash.Selectable
                    onSelect={function (key) {
                        let ref = this.refs[key];
                        let rect = ReactDOM.findDOMNode(ref).getBoundingClientRect();
                        this.updateScreenData({
                            key: 'item',
                            data: {
                                name: _.startCase(ref.props.className),
                                ref,
                                top: rect.top,
                                left: rect.left,
                            }
                        });
                    }}
                    list={mapItems([
                        'emptyBottle',
                        'appleCore',
                        'candyBag',
                        'fullBottle',
                        'wrappedSnack',
                    ])}
                />
            ]
        }
    ],
}, defaultGameOpts);
