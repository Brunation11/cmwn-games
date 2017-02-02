/* eslint max-lines: ["error", {"max": 600}] */
import classNames from 'classnames';

import defaultGameOpts from './default_game_opts';
import Catchable from 'shared/components/catchable/0.1';
import ItemsToSort from './items_to_sort';

let onSelect = function (key) {
    let ref = this.refs[key];
    let rect = ReactDOM.findDOMNode(ref).getBoundingClientRect();
    this.updateScreenData({
        key: 'item',
        data: {
            name: _.startCase(_.replace(ref.props.className, /\d+/g, '')),
            ref,
            top: rect.top,
            left: rect.left,
        }
    });
};

let resort = function () {
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

let binNames = [
    'liquids',
    'food-share',
    'recycle',
    'landfill',
    'compost',
    'tray-stacking',
    'home',
];

let itemsToSort = _.filter(ItemsToSort, item => _.includes(binNames, item.bin));

let audioRefs = _.uniq(_.map(itemsToSort, v =>
    _.upperFirst(_.camelCase(_.replace(v.name, /\d+/g, ''))))
);

let audioArray = _.map(audioRefs, (v, k) => ({
    type: skoash.Audio,
    ref: v,
    key: k,
    props: {
        type: 'voiceOver',
        src: `${CMWN.MEDIA.GAME + 'SoundAssets/_vositems/' + v}.mp3`,
    },
}));

let getChildren = v => {
    if (v.children) return v.children;

    return (
        <skoash.Sprite
            src={`${CMWN.MEDIA.SPRITE}_${_.replace(v.bin, '-', '')}`}
            frame={v.frame || 1}
            static
        />
    );
};

let mapItems = function (itemNames) {
    let items = _.filter(ItemsToSort, item => _.includes(itemNames, item.name));

    return _.map(items, item =>
        <Catchable
            className={item.name}
            message={item.bin}
            reCatchable={true}
            becomes={item.becomes}
            children={getChildren(item)}
        />
    );
};

let traysArray = [
    {
        name: 'tray',
        bin: 'tray-stacking',
        children: [
            <skoash.Selectable
                onSelect={onSelect}
                list={mapItems([
                    'full-plastic-water-bottle-1',
                    'half-full-chocolate-milk-carton',
                    'half-full-energy-drink-bottle',
                    'half-full-lemonade-box-1',
                    'half-full-orange-juice-2',
                ])}
            />
        ]
    },
    // {
    //     name: 'tray',
    //     bin: 'tray-stacking',
    //     children: [
    //         <skoash.Selectable
    //             onSelect={onSelect}
    //             list={mapItems([
    //                 'plastic-cup-1',
    //                 'apple-core',
    //                 'empty-cracker-wrapper-2',
    //                 'full-plastic-water-bottle-2',
    //                 'whole-banana',
    //             ])}
    //         />
    //     ]
    // },
    // {
    //     name: 'tray-pink',
    //     bin: 'tray-stacking',
    //     children: [
    //         <skoash.Selectable
    //             onSelect={onSelect}
    //             list={mapItems([
    //                 'empty-yogurt-container-10',
    //             ])}
    //         />
    //     ]
    // },
    // {
    //     name: 'tray-blue',
    //     bin: 'tray-stacking',
    //     children: [
    //         <skoash.Selectable
    //             onSelect={onSelect}
    //             list={mapItems([
    //                 'empty-yogurt-container-10',
    //             ])}
    //         />
    //     ]
    // },
];

let catchablesArray = _.map(traysArray, v => ({
    type: Catchable,
    props: {
        className: v.name,
        message: v.bin,
        reCatchable: true,
        becomes: v.becomes,
        children: getChildren(v),
    },
}));

export default _.defaults({
    gameName: 'master-sorter',
    dropperAmount: 2,
    binNames,
    collideFraction: .4,
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
                let tray = this.getFirstItem();
                let itemIndex = _.indexOf(tray.refs['children-0'].state.classes, 'SELECTED');
                let itemRef = !opts.itemRef ? tray : tray.refs['children-0'].refs[itemIndex];
                let DOMNode;
                let onAnimationEnd;

                if (e.propertyName !== 'top' ||
                    (
                        !_.includes(opts.itemClassName, 'LIQUIDS') &&
                        !_.includes(this.props.dropClass, 'LIQUIDS')
                    )
                ) {
                    return;
                }

                if (!opts.itemRef) {
                    this.pickUp();
                    this.updateScreenData({
                        key: 'manual-dropper',
                        data: {
                            drop: false,
                            dropClass: '',
                        }
                    });
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

                    if (hits === opts.maxHits) {
                        setTimeout(() => {
                            this.updateScreenData({
                                data: {
                                    'manual-dropper': {
                                        next: true,
                                    },
                                    item: {
                                        name: null,
                                        ref: null,
                                        className: null,
                                    }
                                }
                            });
                        }, 1000);
                        return;
                    }

                    resort.call(this);

                    return;
                }

                DOMNode = ReactDOM.findDOMNode(itemRef);

                if (DOMNode !== e.target) return;

                onAnimationEnd = () => {
                    let items = this.state.items;
                    let index = this.firstItemIndex;
                    let item = items[index];
                    let selectable = item.props.children[0];
                    let selectedItem = selectable.props.list[itemIndex];
                    selectedItem.props.className = selectedItem.props.becomes.name;
                    selectedItem.props.message = selectedItem.props.becomes.bin;
                    selectedItem.props['data-message'] = selectedItem.props.becomes.bin;
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
                                    pour: false,
                                }
                            });
                        }
                    });

                    DOMNode.removeEventListener('animationend', onAnimationEnd);
                };

                if (!_.includes(opts.itemClassName, 'POUR')) {
                    DOMNode.addEventListener('animationend', onAnimationEnd);
                    itemRef.addClassName('POUR');
                    this.updateScreenData({
                        key: ['item', 'pour'],
                        data: true,
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
                        if (!item) return;
                        item.addClassName(nextProps.itemClassName);
                    }

                    if (nextProps.removeItemClassName &&
                        nextProps.removeItemClassName !== this.props.itemClassName) {
                        let selectable = this.refs['items-' + this.firstItemIndex].refs['children-0'];
                        let itemIndex = _.indexOf(selectable.state.classes, selectable.props.selectClass);
                        let item = selectable.refs[itemIndex];
                        if (!item) return;
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

                    if (tray.props.message === 'home') {
                        tray.addClassName('HOME');
                    } else {
                        let rect = ReactDOM.findDOMNode(tray).getBoundingClientRect();
                        let name = _.startCase(_.replace(tray.props.className, /\d+/g, ''));
                        let left = rect.left + (rect.right - rect.left) * .8 / 2;
                        let top = rect.top + (rect.bottom - rect.top) * .8 / 2;

                        this.updateScreenData({
                            key: 'item',
                            data: {
                                name,
                                top,
                                left,
                            },
                        });
                    }
                }
            },
            onNext: function () {
                this.updateScreenData({
                    data: {
                        item: {
                            amount: _.reduce(this.getFirstItem().refs['children-0'].refs, (a, ref) =>
                                a + (ref.props.message === 'liquids' ? 2 : 1)
                            , 0),
                        },
                        'manual-dropper': {
                            selectItem: false,
                        },
                    }
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
                        data: {
                            'manual-dropper': {
                                next: true,
                            },
                            item: {
                                name: null,
                                ref: null,
                                className: null,
                            },
                        }
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

                if (hits === opts.maxHits) {
                    setTimeout(() => {
                        this.updateScreenData({
                            data: {
                                'manual-dropper': {
                                    next: true,
                                },
                                item: {
                                    name: null,
                                    ref: null,
                                    className: null,
                                }
                            }
                        });
                    }, 1000);
                    return;
                }

                resort.call(this);
            },
        };
    },
    getExtraComponents(opts) {
        let color = 'milk';

        switch (true) {
            case _.includes(opts.itemName, 'Chocolate'):
                color = 'chocolate';
                break;
            case _.includes(opts.itemName, 'Orange'):
                color = 'orange';
                break;
            case _.includes(opts.itemName, 'Fruit'):
                color = 'fruit';
                break;
        }

        return (
            <skoash.Component>
                <div className="tray-stacking-title">
                    <span>
                        Tray Stacking
                    </span>
                </div>
                <skoash.Sprite
                    className={classNames('pour', {show: opts.pour && color === 'chocolate'})}
                    src={`${CMWN.MEDIA.SPRITE}level.2.chocolate.milk`}
                    animate={opts.pour}
                    loop={false}
                    duration={600}
                    frame={0}
                    onComplete={function () {
                        this.setState({frame: this.props.frame});
                    }}
                />
                <skoash.Sprite
                    className={classNames('pour', {show: opts.pour && color === 'fruit'})}
                    src={`${CMWN.MEDIA.SPRITE}level.2.fruit.juice`}
                    animate={opts.pour}
                    loop={false}
                    duration={600}
                    frame={0}
                    onComplete={function () {
                        this.setState({frame: this.props.frame});
                    }}
                />
                <skoash.Sprite
                    className={classNames('pour', {show: opts.pour && color === 'milk'})}
                    src={`${CMWN.MEDIA.SPRITE}level.2.milk`}
                    animate={opts.pour}
                    loop={false}
                    duration={600}
                    frame={0}
                    onComplete={function () {
                        this.setState({frame: this.props.frame});
                    }}
                />
                <skoash.Sprite
                    className={classNames('pour', {show: opts.pour && color === 'orange'})}
                    src={`${CMWN.MEDIA.SPRITE}level.2.orange.juice`}
                    animate={opts.pour}
                    loop={false}
                    duration={600}
                    frame={0}
                    onComplete={function () {
                        this.setState({frame: this.props.frame});
                    }}
                />
            </skoash.Component>
        );
    },
    getAudioArray() {
        return audioArray;
    },
    getCatchablesArray() {
        return catchablesArray;
    },
}, defaultGameOpts);
