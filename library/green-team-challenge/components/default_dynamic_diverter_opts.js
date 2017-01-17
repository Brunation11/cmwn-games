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
}, defaultGameOpts);
