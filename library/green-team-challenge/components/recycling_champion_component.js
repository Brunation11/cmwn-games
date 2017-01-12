import Catcher from 'shared/components/catcher/0.3';
import Catchable from 'shared/components/catchable/0.1';
import Randomizer from 'shared/components/randomizer/0.1';
import ManualDropper from 'shared/components/manual_dropper/0.1';

export default function (props, ref, key, opts = {}) {
    var screenProps;
    var timerProps;
    var revealProps;
    var selectableProps;
    var dropperProps;
    var catcherProps;

    const levelPath = `gameState.data.recyclingChampion.levels.${opts.level}`;

    var arrayOfCatchables = _.map(opts.itemsToSort, (v, k) =>
        <Catchable className={k} message={v.bin} reCatchable={true} becomes={v.becomes} />,
    );

    var start = _.get(props, `${levelPath}.start`, false);
    var gameComplete = _.get(props, `${levelPath}.complete`, false);
    var drop = _.get(props, 'data.manual-dropper.drop', false);
    var next = _.get(props, 'data.manual-dropper.next', false);
    var pickUp = _.get(props, 'data.manual-dropper.pickUp', false);
    var catchableRefs = _.get(props, 'data.manual-dropper.refs', []);
    var itemName = _.get(props, 'data.manual-dropper.itemName', '');
    var caught = _.get(props, 'data.catcher.caught', '');

    opts.score = _.get(props, `${levelPath}.score`, 0);
    opts.highScore = _.get(props, `${levelPath}.highScore`, 0);
    opts.left = _.get(props, 'data.manual-dropper.left', 0);
    opts.hits = _.get(props, `${levelPath}.hits`, 0);

    screenProps = opts.getScreenProps(opts);
    timerProps = opts.getTimerProps(opts);
    revealProps = opts.getRevealProps(opts);
    selectableProps = opts.getSelectableProps(opts);
    dropperProps = opts.getDropperProps(opts);
    catcherProps = opts.getCatcherProps(opts);

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={`recycling-champion-${opts.level}`}
            complete={gameComplete}
            checkComplete={!gameComplete}
            {...screenProps}
        >
            <skoash.Component
                className="top-left"
            >
                <skoash.Score
                    className="level-score"
                    correct={opts.score}
                    setScore={true}
                >
                    pts
                </skoash.Score>
                <skoash.Timer
                    countDown
                    format="mm:ss"
                    timeout={opts.timeout}
                    complete={gameComplete}
                    pause={_.get(props, 'data.reveal.open', false)}
                    resume={!_.get(props, 'data.reveal.open', false)}
                    restart={start}
                    {...timerProps}
                />
            </skoash.Component>
            <skoash.Component
                className="item-name"
            >
                <span>
                    {itemName}
                </span>
            </skoash.Component>
            <skoash.Score
                className="life"
                max={0}
                incorrect={5}
                correct={opts.hits}
                setScore={true}
            />
            <ManualDropper
                amount={3}
                drop={drop}
                pickUp={pickUp}
                next={next}
                bin={
                    <Randomizer
                        bin={arrayOfCatchables}
                    />
                }
                style={{
                    transform: `translateX(${opts.left}px)`
                }}
                caught={caught}
                {...dropperProps}
            />
            <skoash.Component
                className="bins"
            >
                <Catcher
                    completeOnStart
                    checkComplete={false}
                    start={start}
                    bucket={[
                        <skoash.Component className="recycle" message="recycle" />,
                        <skoash.Component className="landfill" message="landfill" />,
                        <skoash.Component className="compost" message="compost" />,
                    ]}
                    catchableRefs={catchableRefs}
                    pause={caught}
                    resume={drop}
                    assets={[
                    ]}
                    {...catcherProps}
                />
                <skoash.Selectable
                    {...selectableProps}
                    list={[
                        <skoash.Component message="recycle" />,
                        <skoash.Component message="landfill" />,
                        <skoash.Component message="compost" />,
                    ]}
                />
            </skoash.Component>
            <skoash.Reveal
                openTarget="reveal"
                openReveal={_.get(props, 'data.reveal.open', false)}
                closeReveal={_.get(props, 'data.reveal.close', false)}
                {...revealProps}
                list={[
                    <skoash.Component
                        ref="resort"
                        type="li"
                    >
                    </skoash.Component>,
                    <skoash.Component
                        ref="retry"
                        type="li"
                    >
                        <p>RETRY</p>
                    </skoash.Component>,
                    <skoash.Component
                        ref="complete"
                        type="li"
                    >
                        <p>COMPLETE</p>
                    </skoash.Component>,
                ]}
            />
        </skoash.Screen>
    );
}
