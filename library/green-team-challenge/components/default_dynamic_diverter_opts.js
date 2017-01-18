import defaultGameOpts from './default_game_opts';

export default _.defaults({
    gameName: 'dynamic-diverter',
    getCarouselProps() {
        return {
            onStart: function () {
                this.updateScreenData({
                    keys: ['carousel', 'binName'],
                    data: _.capitalize(this.state.list[0].props.message),
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
