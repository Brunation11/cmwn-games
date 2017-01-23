export default [
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
        name: 'fullBottle',
        bin: 'liquids',
        becomes: 'emptyBottle'
    },
    {
        name: 'wrappedSnack',
        bin: 'food-share'
    }
];
