import defaultGameOpts from './default_game_opts';
import ItemsToSort from './items_to_sort';

const binNames = [
    'recycle',
    'landfill',
    'compost',
];

let itemsToSort = _.filter(ItemsToSort, item => _.includes(binNames, item.bin));

export default _.defaults({
    binNames,
    itemsToSort,
    extraComponents: [
        <skoash.Image className="hidden" scr={`${CMWN.MEDIA.IMAGE}pipe01.png`} />,
    ],
}, defaultGameOpts);
