let levelKeys = [
    'recyclingChampion',
    'pricelessPourer',
    'fantasticFoodSharer',
    'dynamicDiverter',
    'masterSorter',
];

let levelNames = [
    <p>Recycling<br/>Champion</p>,
    <p>Priceless<br/>Pourer</p>,
    <p>Fantastic<br/>Food Sharer</p>,
    <p>Dynamic<br/>Diverter</p>,
    <p>Master<br/>Sorter</p>,
];

export default function (levelNumber) {
    let levelInt = _.floor(levelNumber);
    let levelKey = levelKeys[levelInt - 1];
    let levelName = levelNames[levelInt - 1];

    return function (props, ref, key, opts = {}) {
        let levelData = _.get(props, `gameState.data.${levelKey}.levels`, {});
        let classNames = _.map(levelData, level =>
            ({className: level.complete ? 'earned' : ''})
        );

        return (
            <skoash.Screen
                {...props}
                ref={ref}
                key={key}
                id={`pre-level-${levelNumber}`}
                className={opts.className}
            >
                <skoash.MediaSequence>
                    <skoash.Audio type="sfx" src={`${CMWN.MEDIA.EFFECT}LevelComplete.mp3`} />
                </skoash.MediaSequence>
                <skoash.Repeater
                    className="stars"
                    amount={5}
                    props={classNames}
                />
                <div className="frame">
                    <h3>Level {levelInt}</h3>
                    {levelName}
                </div>
            </skoash.Screen>
        );
    };
}
