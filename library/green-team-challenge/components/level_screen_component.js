const levelKeys = [
    'recyclingChampion',
    'pricelessPourer',
    'fantasticFoodSharer',
    'dynamicDiverter',
];

const levelNames = [
    <p>Recycling<br/>Champion</p>,
    <p>Priceless<br/>Pourer</p>,
    <p>Fantastic<br/>Food Sharer</p>,
    <p>Dynamic<br/>Diverter</p>,
];

export default function (props, ref, key, opts = {}) {
    var levelData = _.get(props, `gameState.data.${levelKeys[opts.level - 1]}.levels`, {});
    var classNames = _.map(levelData, level =>
        ({className: level.complete ? 'earned' : ''})
    );

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={`${opts.earned ? 'post' : 'pre'}-level-${opts.level}`}
            className={opts.className}
        >
            <skoash.Repeater
                className="stars"
                amount={5}
                props={classNames}
            />
            <div className="frame">
                <h3>Level {opts.level}</h3>
                {levelNames[opts.level - 1]}
            </div>
        </skoash.Screen>
    );
}
