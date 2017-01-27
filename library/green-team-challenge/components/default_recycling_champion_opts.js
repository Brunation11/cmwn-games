import defaultGameOpts from './default_game_opts';
import itemsToSort from './items_to_sort';

const binNames = [
    'recycle',
    'landfill',
    'compost',
];

export default _.defaults({
    binNames,
    itemsToSort: _.filter(itemsToSort, item => _.includes(binNames, item.bin)),
    extraComponents: [
        <skoash.Image className="hidden" scr={`${CMWN.MEDIA.IMAGE}pipe01.png`} />,
    ],
}, defaultGameOpts);
