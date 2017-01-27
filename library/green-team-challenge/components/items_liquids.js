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

export default _.map(names, (name, key) => ({
    name,
    bin,
    frame: key + 1,
}));
