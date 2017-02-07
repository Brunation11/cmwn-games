import defaultGameOpts from './default_game_opts';

import itemsCompost from './items_compost';
import itemsLandfill from './items_landfill';
import itemsRecycle from './items_recycle';

let shuffledItemsCompost = _.shuffle(itemsCompost);
let shuffledItemsLandfill = _.shuffle(itemsLandfill);
let shuffledItemsRecycle = _.shuffle(itemsRecycle);

export default _.defaults({
    gameName: 'dynamic-diverter',
    gameNumber: 4,
    pointsPerBin: 400,
    scoreToWin: 1200,
    dropperAmount: 2,
    getDropperProps() {
        return {
            onNext: function () {
                this.updateScreenData({
                    keys: ['manual-dropper', 'binName'],
                    data: this.state.items[this.firstItemIndex].props.message,
                });
            },
        };
    },
    getDraggableProps() {
        return {
            onReady: function () {
                this.setState({
                    style: {
                        top: _.random(30, 70) + '%',
                        left: _.random(30, 70) + '%',
                    },
                    scale: _.random(1, 1.5),
                    rotate: _.random(-30, 30),
                });
            },
        };
    },
    getDropzoneProps(opts) {
        return {
            onCorrect: function (draggable) {
                let score = opts.score + opts.pointsPerItem;

                draggable.markCorrect();

                this.updateGameData({
                    keys: [_.camelCase(opts.gameName), 'levels', opts.level],
                    data: {
                        score
                    }
                });

                if ((score % opts.pointsPerBin) === 0) {
                    this.updateScreenData({
                        keys: ['manual-dropper', 'next'],
                        data: true,
                    });
                }
            },
            onIncorrect: function (draggable, dropzoneArray) {
                if (!dropzoneArray) return;

                draggable.setState({
                    endX: draggable.state.endX + 200,
                    endY: draggable.state.endY + 200,
                });

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
                                }
                            });
                        }, 1000);
                    }
                });

                this.updateGameData({
                    keys: [_.camelCase(opts.gameName), 'levels', opts.level],
                    data: {
                        hits: opts.hits + 1,
                    }
                });
            },
        };
    },
    binItems: [
        {
            name: 'recycle',
            objects: []
                .concat(shuffledItemsCompost.splice(0, 2))
                .concat(shuffledItemsLandfill.splice(0, 2))
                .concat(shuffledItemsRecycle.splice(0, 6)),
        },
        {
            name: 'landfill',
            objects: []
                .concat(shuffledItemsCompost.splice(0, 2))
                .concat(shuffledItemsLandfill.splice(0, 6))
                .concat(shuffledItemsRecycle.splice(0, 2)),
        },
        {
            name: 'compost',
            objects: []
                .concat(shuffledItemsCompost.splice(0, 6))
                .concat(shuffledItemsLandfill.splice(0, 2))
                .concat(shuffledItemsRecycle.splice(0, 2)),
        },
    ]
}, defaultGameOpts);
