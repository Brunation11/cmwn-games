import classNames from 'classnames';
import defaultGameOpts from './default_game_opts';
import itemsToSort from './items_to_sort';

const PICKUP = 'PICKUP';
const DROPPED = 'DROPPED';
const TILT = 'TILT';
const ITEMS = 'items-';

const CLAW_SRC = CMWN.MEDIA.SPRITE + 'taking.food.assets';
const CLAW_DROP_SRC = CMWN.MEDIA.SPRITE + 'dropping.in.funnel';
const FUNNEL_SRC = CMWN.MEDIA.SPRITE + 'front.back.funnel';

const binNames = [
    'food-share',
    'recycle',
    'landfill',
    'compost',
    'liquids',
];

const onTruckTransitionEnd = function (opts, e) {
    skoash.trigger('updateScreenData', {
        data: {
            'manual-dropper': {
                drop: _.includes(e.target.className, TILT),
                dropClass: _.toUpper(_.snakeCase(opts.selectableMessage)),
            },
            'selectable': {
                message: ''
            }
        }
    });
};

const onItemPickUpTransitionEnd = function (itemRef) {
    if (_.includes(itemRef.state.className, PICKUP)) {
        itemRef.removeAllClassNames();
        skoash.trigger('updateScreenData', {
            key: 'truckClassName',
            data: '',
        });
    }
};

export default _.defaults({
    gameName: 'fantastic-food-sharer',
    binNames,
    getSelectableProps() {
        return {
            onSelect: function (dataRef) {
                this.updateScreenData({
                    data: {
                        'manual-dropper': {
                            drop: true,
                        },
                        selectable: {
                            message: this.props.list[dataRef].props.message
                        }
                    }
                });
            },
        };
    },
    getDropperProps(opts) {
        return {
            onTransitionEnd: function (e) {
                if (e.propertyName === 'top' && _.includes(e.target.className, DROPPED)) {
                    let itemRef;
                    let DOMNode;
                    let onAnimationEnd;

                    this.updateScreenData({
                        key: 'truckClassName',
                        data: TILT,
                    });

                    if (opts.selectableMessage !== 'liquids') return;

                    itemRef = this.refs[ITEMS + this.firstItemIndex];

                    DOMNode = ReactDOM.findDOMNode(itemRef);

                    if (DOMNode !== e.target) return;

                    onAnimationEnd = () => {
                        this.pickUp(_.defaults({
                            onPickUp: function () {
                                let items = this.state.items;
                                let index = this.firstItemIndex;
                                let item = items[index];
                                let newBin = _.find(opts.itemsToSort, itemToSort =>
                                    itemToSort.name === item.props.becomes
                                ).bin;
                                item.props.className = item.props.becomes;
                                item.props.message = newBin;
                                item.props['data-message'] = newBin;
                                items[index] = item;
                                this.setState({items}, () => {
                                    itemRef.removeAllClassNames();
                                    this.updateScreenData({
                                        key: 'truckClassName',
                                        data: '',
                                    });
                                });
                                DOMNode.removeEventListener('animationend', onAnimationEnd);
                            }
                        }, this.props));
                    };

                    if (!itemRef.state.className || itemRef.state.className.indexOf('POUR') === -1) {
                        DOMNode.addEventListener('animationend', onAnimationEnd);
                        itemRef.addClassName('POUR');
                    }
                }
            },
            onPickUp: function (itemRef) {
                itemRef.removeAllClassNames(() => {
                    if (!itemRef.DOMNode) itemRef.DOMNode = ReactDOM.findDOMNode(itemRef);
                    itemRef.DOMNode.addEventListener(
                        'transitionend',
                        onItemPickUpTransitionEnd.bind(null, itemRef)
                    );
                    itemRef.addClassName(PICKUP);
                });
            },
            onNext: function () {
                this.updateScreenData({
                    data: {
                        'manual-dropper': {
                            drop: !!opts.selectableMessage,
                            itemName: _.startCase(this.getFirstItem().props.className),
                        },
                        selectable: {
                            message: ''
                        },
                        truckClassName: '',
                    },
                });
            },
        };
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
    getExtraComponents(opts) {
        return (
            <skoash.Component
                className="extras"
            >
                <skoash.Sprite
                    className="claw grabber"
                    src={CLAW_SRC}
                    frame={0}
                    animate={opts.moveClaw}
                />
                <skoash.Sprite
                    className="claw dropper"
                    src={CLAW_DROP_SRC}
                    frame={0}
                    animate={opts.moveClaw}
                />
                <skoash.Component className="funnel">
                    <skoash.Sprite
                        className="back"
                        src={FUNNEL_SRC}
                        frame={0}
                        static
                    />
                    <skoash.Sprite
                        className="front"
                        src={FUNNEL_SRC}
                        frame={1}
                        static
                    />
                </skoash.Component>
                <skoash.Component
                    className={classNames('truck', opts.truckClassName)}
                    onTransitionEnd={onTruckTransitionEnd.bind(null, opts)}
                />
                <div className="truck-stand" />
            </skoash.Component>
        );
    },
    itemsToSort: _.filter(itemsToSort, item => _.includes(binNames, item.bin)),
}, defaultGameOpts);
