export default {
    gameName: 'recycling-champion',
    level: 1,
    timeout: 120000,
    scoreToWin: 100,
    maxHits: 5,
    dropperAmount: 3,
    pointsPerItem: 50,
    collideFraction: .4,
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
                if (opts.left === ReactDOM.findDOMNode(this.refs[binRefKey]).offsetLeft) {
                    this.updateScreenData({
                        keys: ['manual-dropper', 'drop'],
                        data: true,
                    });
                } else {
                    this.updateScreenData({
                        keys: ['manual-dropper', 'left'],
                        data: ReactDOM.findDOMNode(this.refs[binRefKey]).offsetLeft,
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
                    keys: ['manual-dropper', 'itemName'],
                    data: _.startCase(this.getFirstItem().props.className),
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
                this.updateGameData({
                    keys: [_.camelCase(opts.gameName), 'levels', opts.level],
                    data: {
                        start: false,
                        hits: opts.hits + 1,
                    }
                });

                if (opts.hits + 1 === opts.maxHits) {
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
    binNames: [
        'recycle',
        'landfill',
        'compost',
    ],
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
    },
};
