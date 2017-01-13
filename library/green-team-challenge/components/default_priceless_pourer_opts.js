import defaultGameOpts from './default_game_opts';

export default _.defaults({
    timeout: 120000,
    binNames: [
        'liquids',
        'recycle',
        'landfill',
        'compost',
    ],
}, defaultGameOpts);
