import defaultGameOpts from './default_game_opts';

export default _.defaults({
    gameName: 'dynamic-diverter',
    pointsPerBin: 400,
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
                    }
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

                this.updateGameData({
                    keys: [_.camelCase(opts.gameName), 'levels', opts.level],
                    data: {
                        hits: opts.hits + 1,
                    }
                });
            },
        };
    },
    binItems: {
        recycle: [
            {
                name: 'emptyBottle',
                bin: 'recycle'
            },
            {
                name: 'emptyBottle',
                bin: 'recycle'
            },
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
        ],
        landfill: [
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
                name: 'candyBag',
                bin: 'landfill'
            },
            {
                name: 'candyBag',
                bin: 'landfill'
            },
        ],
        compost: [
            {
                name: 'emptyBottle',
                bin: 'recycle'
            },
            {
                name: 'appleCore',
                bin: 'compost'
            },
            {
                name: 'appleCore',
                bin: 'compost'
            },
            {
                name: 'appleCore',
                bin: 'compost'
            },
            {
                name: 'candyBag',
                bin: 'landfill'
            },
        ],
    }
}, defaultGameOpts);
