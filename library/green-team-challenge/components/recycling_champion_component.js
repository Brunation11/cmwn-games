import Catcher from 'shared/components/catcher/0.3';
import Catchable from 'shared/components/catchable/0.1';
import Randomizer from 'shared/components/randomizer/0.1';
import ManualDropper from 'shared/components/manual_dropper/0.1';

export default function (props, ref, key, opts = {}) {
    var onScreenStart;
    var onScreenStop;
    var onTimerComplete;
    var onOpenReveal;
    var onCloseReveal;
    var onSelect;
    var onTransitionEnd;
    var onCorrectCatch;
    var onIncorrectCatch;
    var onNextItem;

    const levelPath = `gameState.data.recyclingChampion.levels.${opts.level}`;

    var start = _.get(props, `${levelPath}.start`, false);
    var score = _.get(props, `${levelPath}.score`, 0);
    var highScore = _.get(props, `${levelPath}.highScore`, 0);
    var hits = _.get(props, `${levelPath}.hits`, 0);
    var gameComplete = _.get(props, `${levelPath}.complete`, false);
    var left = _.get(props, 'data.manual-dropper.left', 0);
    var drop = _.get(props, 'data.manual-dropper.drop', false);
    var next = _.get(props, 'data.manual-dropper.next', false);
    var pickUp = _.get(props, 'data.manual-dropper.pickUp', false);
    var catchableRefs = _.get(props, 'data.manual-dropper.refs', []);
    var itemName = _.get(props, 'data.manual-dropper.itemName', '');
    var caught = _.get(props, 'data.catcher.caught', '');

    var arrayOfCatchables = _.map(opts.itemsToSort, (v, k) =>
        <Catchable className={k} message={v.bin} reCatchable={true} becomes={v.becomes} />,
    );

    onScreenStart = function () {
        this.updateGameData({
            keys: ['recyclingChampion', 'levels', opts.level],
            data: {
                start: true,
                score: 0,
                hits: 0,
            }
        });
    };

    onScreenStop = function () {
        this.updateGameData({
            keys: ['recyclingChampion', 'levels', opts.level, 'start'],
            data: false,
        });
    };

    onTimerComplete = function () {
        if (score >= opts.scoreToWin) {
            this.updateGameData({
                keys: ['recyclingChampion', 'levels', opts.level],
                data: {
                    complete: true,
                    highScore: Math.max(score, highScore)
                },
            });
            this.updateScreenData({
                keys: ['reveal', 'open'],
                data: 'complete',
            });
        } else {
            this.updateScreenData({
                keys: ['reveal', 'open'],
                data: 'retry',
            });
        }
    };

    onOpenReveal = function () {
        this.updateGameData({
            keys: ['recyclingChampion', 'levels', opts.level, 'start'],
            data: false,
        });
    };

    onCloseReveal = function (prevMessage) {
        var data = {
            start: true,
        };

        if (!prevMessage || prevMessage === 'resort') return;

        if (prevMessage === 'retry') {
            data.score = 0;
        }

        this.updateGameData({
            keys: ['recyclingChampion', 'levels', opts.level],
            data,
        });
    };

    onSelect = function (binRefKey) {
        if (left === ReactDOM.findDOMNode(this.refs[binRefKey]).offsetLeft) {
            this.updateScreenData({
                keys: ['manual-dropper', 'drop'],
                data: true,
            });
        } else {
            this.updateScreenData({
                keys: ['manual-dropper', 'left'],
                data: ReactDOM.findDOMNode(this.refs[binRefKey]).offsetLeft,
            });
        }
    };

    onTransitionEnd = function (e) {
        if (this.DOMNode !== e.target) return;
        this.updateScreenData({
            keys: ['manual-dropper', 'drop'],
            data: true,
        });
    };

    onCorrectCatch = function () {
        console.log('onCorrectCatch'); // eslint-disable-line
        this.updateGameData({
            keys: ['recyclingChampion', 'levels', opts.level, 'score'],
            data: score + 50,
        });
        this.updateScreenData({
            keys: ['manual-dropper', 'next'],
            data: true,
        });
    };

    onIncorrectCatch = function () {
        console.log('onIncorrectCatch'); // eslint-disable-line
        this.updateGameData({
            keys: ['recyclingChampion', 'levels', opts.level, 'hits'],
            data: hits + 1,
        });
        this.updateScreenData({
            keys: ['reveal', 'open'],
            data: 'resort',
            callback: () => {
                setTimeout(() => {
                    this.updateScreenData({
                        data: {
                            reveal: {
                                open: null,
                                close: true,
                            },
                            'manual-dropper': {
                                pickUp: true,
                            },
                            catcher: {
                                caught: false,
                            }
                        }
                    });
                }, 1000);
            }
        });
    };

    onNextItem = function () {
        this.updateScreenData({
            keys: ['manual-dropper', 'itemName'],
            data: _.startCase(this.getFirstItem().props.className),
        });
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={`recycling-champion-${opts.level}`}
            complete={gameComplete}
            checkComplete={!gameComplete}
            onStart={onScreenStart}
            onStop={onScreenStop}
        >
            <skoash.Component
                className="top-left"
            >
                <skoash.Score
                    className="level-score"
                    correct={score}
                    setScore={true}
                >
                    pts
                </skoash.Score>
                <skoash.Timer
                    countDown
                    format="mm:ss"
                    timeout={opts.timeout}
                    onComplete={onTimerComplete}
                    complete={gameComplete}
                    pause={_.get(props, 'data.reveal.open', false)}
                    resume={!_.get(props, 'data.reveal.open', false)}
                    restart={start}
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
                correct={hits}
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
                onTransitionEnd={onTransitionEnd}
                style={{
                    transform: `translateX(${left}px)`
                }}
                caught={caught}
                onNext={onNextItem}
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
                    onCorrect={onCorrectCatch}
                    onIncorrect={onIncorrectCatch}
                    pause={caught}
                    resume={drop}
                    assets={[
                    ]}
                />
                <skoash.Selectable
                    onSelect={onSelect}
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
                onClose={onCloseReveal}
                onOpen={onOpenReveal}
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
