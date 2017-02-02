import Catchable from 'shared/components/catchable/0.1';

import ItemsToSort from './items_to_sort';

let binNames = [
    'recycle',
    'landfill',
    'compost',
];

let itemsToSort = _.filter(ItemsToSort, item => _.includes(binNames, item.bin));

let audioRefs = _.uniq(_.map(itemsToSort, v =>
    _.upperFirst(_.camelCase(_.replace(v.name, /\d+/g, ''))))
);

let audioArray = _.map(audioRefs, (v, k) => ({
    type: skoash.Audio,
    props: {
        type: 'voiceOver',
        ref: v,
        key: k,
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

let catchablesArray = _.map(itemsToSort, v => ({
    type: Catchable,
    props: {
        className: v.name,
        message: v.bin,
        reCatchable: true,
        becomes: v.becomes,
        children: getChildren(v),
    },
}));

export default {
    gameName: 'recycling-champion',
    level: 1,
    timeout: 120000,
    scoreToWin: 100,
    maxHits: 5,
    dropperAmount: 3,
    pointsPerItem: 50,
    collideFraction: 0,
    getScreenProps(opts) {
        return {
            onStart: function () {
                this.updateGameData({
                    keys: [_.camelCase(opts.gameName), 'levels', opts.level],
                    data: {
                        start: true,
                        score: 0,
                        hits: 0,
                    }
                });
            },
            onStop: function () {
                this.updateGameData({
                    keys: [_.camelCase(opts.gameName), 'levels', opts.level, 'start'],
                    data: false,
                });
            },
        };
    },
    getTimerProps(opts) {
        return {
            onComplete: function () {
                if (opts.score >= opts.scoreToWin) {
                    this.updateGameData({
                        keys: [_.camelCase(opts.gameName), 'levels', opts.level],
                        data: {
                            complete: true,
                            highScore: Math.max(opts.score, opts.highScore)
                        },
                    });
                    this.updateScreenData({
                        keys: ['reveal', 'open'],
                        data: 'complete',
                    });
                } else {
                    this.updateScreenData({
                        keys: ['reveal', 'open'],
                        data: 'retry',
                    });
                }
            },
        };
    },
    getRevealProps(opts) {
        return {
            onOpen: function () {
                this.updateGameData({
                    keys: [_.camelCase(opts.gameName), 'levels', opts.level, 'start'],
                    data: false,
                });
            },
            onClose: function (prevMessage) {
                var data = {
                    start: true,
                };

                if (!prevMessage || prevMessage === 'resort') return;

                if (prevMessage === 'retry') {
                    data.score = 0;
                    data.hits = 0;
                    data.start = true;
                }

                this.updateGameData({
                    keys: [_.camelCase(opts.gameName), 'levels', opts.level],
                    data,
                });
            },
        };
    },
    getSelectableProps(opts) {
        return {
            onSelect: function (binRefKey) {
                let left = ReactDOM.findDOMNode(this.refs[binRefKey]).offsetLeft - 65;
                if (opts.left === left) {
                    this.updateScreenData({
                        keys: ['manual-dropper', 'drop'],
                        data: true,
                    });
                } else {
                    this.updateScreenData({
                        keys: ['manual-dropper', 'left'],
                        data: left,
                    });
                }
            },
        };
    },
    getDropperProps() {
        return {
            onTransitionEnd: function (e) {
                if (this.DOMNode !== e.target) return;
                this.updateScreenData({
                    keys: ['manual-dropper', 'drop'],
                    data: true,
                });
            },
            onNext: function () {
                this.updateScreenData({
                    keys: ['item', 'name'],
                    data: _.startCase(_.replace(this.getFirstItem().props.className, /\d+/g, '')),
                });
            },
            onPickUp: function () {
                this.updateScreenData({
                    key: ['manual-dropper', 'dropClass'],
                    data: '',
                });
            },
        };
    },
    getCatcherProps(opts) {
        return {
            onCorrect: function () {
                this.updateGameData({
                    keys: [_.camelCase(opts.gameName), 'levels', opts.level, 'score'],
                    data: opts.score + opts.pointsPerItem,
                });
                this.updateScreenData({
                    keys: ['manual-dropper', 'next'],
                    data: true,
                });
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

                if (hits === opts.maxHits) {
                    setTimeout(() => {
                        this.updateScreenData({
                            keys: ['manual-dropper', 'pickUp'],
                            data: true,
                        });
                    }, 1000);
                    return;
                }

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
            },
        };
    },
    getLifeProps(opts) {
        return {
            onComplete: function () {
                if (opts.score >= opts.scoreToWin) {
                    this.updateGameData({
                        keys: [_.camelCase(opts.gameName), 'levels', opts.level],
                        data: {
                            complete: true,
                            highScore: Math.max(opts.score, opts.highScore)
                        },
                    });
                    this.updateScreenData({
                        keys: ['reveal', 'open'],
                        data: 'complete',
                    });
                } else {
                    this.updateScreenData({
                        keys: ['reveal', 'open'],
                        data: 'retry',
                    });
                }
            },
        };
    },
    getExtraComponents() {
        return null;
    },
    getAudioArray() {
        return audioArray;
    },
    getCatchablesArray() {
        return catchablesArray;
    },
    binNames,
    itemsToSort,
};
