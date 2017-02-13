let bin = 'liquids';
let names = [
    'full-plastic-water-bottle-1',
    'full-plastic-water-bottle-2',
    'full-plastic-water-bottle-3',
    'full-plastic-water-bottle-4',
    'half-full-chocolate-milk-carton',
    'half-full-chocolate-milk',
    'half-full-energy-drink-bottle',
    'half-full-lemonade-box-1',
    'half-full-lemonade-box-4',
    'half-full-milk-carton-1',
    'half-full-milk-carton-2',
    'half-full-milk-carton-3',
    'half-full-milk-carton-4',
    'half-full-milk-carton-5',
    'half-full-milk-carton-6',
    'half-full-milk-carton-7',
    'half-full-milk-carton-8',
    'half-full-orange-juice-2',
];

let becomes = [
    {
        name: 'empty-plastic-water-bottle-1',
        bin: 'recycle',
    },
    {
        name: 'empty-plastic-water-bottle-2',
        bin: 'recycle',
    },
    {
        name: 'empty-plastic-water-bottle-3',
        bin: 'recycle',
    },
    {
        name: 'empty-plastic-water-bottle-4',
        bin: 'recycle',
    },
    {
        name: 'empty-chocolate-milk-carton',
        bin: 'recycle',
    },
    {
        name: 'empty-chocolate-milk',
        bin: 'recycle',
    },
    {
        name: 'empty-energy-drink-bottle',
        bin: 'recycle',
    },
    {
        name: 'empty-lemonade-box-1',
        bin: 'landfill',
    },
    {
        name: 'empty-lemonade-box-4',
        bin: 'landfill',
    },
    {
        name: 'empty-milk-carton-1',
        bin: 'recycle',
    },
    {
        name: 'empty-milk-carton-2',
        bin: 'recycle',
    },
    {
        name: 'empty-milk-carton-3',
        bin: 'recycle',
    },
    {
        name: 'empty-milk-carton-4',
        bin: 'recycle',
    },
    {
        name: 'empty-milk-carton-5',
        bin: 'recycle',
    },
    {
        name: 'empty-milk-carton-6',
        bin: 'recycle',
    },
    {
        name: 'empty-milk-carton-7',
        bin: 'recycle',
    },
    {
        name: 'empty-milk-carton-8',
        bin: 'recycle',
    },
    {
        name: 'empty-orange-juice-2',
        bin: 'recycle',
    },
];

export default _.map(names, (name, frame) => ({
    name,
    bin,
    frame,
    becomes: becomes[frame],
}));
