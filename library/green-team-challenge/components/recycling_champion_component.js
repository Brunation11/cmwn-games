import Catcher from 'shared/components/catcher/0.3';
import Catchable from 'shared/components/catchable/0.1';
import Randomizer from 'shared/components/randomizer/0.1';
import ManualDropper from 'shared/components/manual_dropper/0.1';

const itemsToSort = {
    bottle: {
        bin: 'recycle'
    },
    // fullBottle: {
    //     bin: 'liquid', reCatchable: true, becomes: 'bottle'
    // },
};

export default function (props, ref, key, opts = {}) {
    var onTimerComplete;
    var onOpenReveal;
    var onCloseReveal;
    var onSelect;
    var onTransitionEnd;
    var onCorrectCatch;
    var onIncorrectCatch;

    var start = _.get(props, `gameState.data.game.levels.${opts.level}.start`, false);
    var score = _.get(props, `gameState.data.game.levels.${opts.level}.score`, 0);
    var hits = _.get(props, `gameState.data.game.levels.${opts.level}.hits`, 0);
    var left = _.get(props, 'data.manual-dropper.left', 0);
    var drop = _.get(props, 'data.manual-dropper.drop', false);
    var next = _.get(props, 'data.manual-dropper.next', false);
    var pickUp = _.get(props, 'data.manual-dropper.pickUp', false);
    var itemName = _.get(props, 'data.manual-dropper.item.name', '');
    var catchableRefs = _.get(props, 'data.manual-dropper.refs', []);
    var caught = _.get(props, 'data.catcher.caught', '');

    var arrayOfCatchables = _.map(itemsToSort, (v, k) =>
        <Catchable className={k} message={v.bin} reCatchable={true} becomes={v.becomes} />,
    );

    onTimerComplete = function () {
        if (score >= opts.scoreToWin) {
            this.updateGameData({
                keys: ['game', 'levels', opts.level, 'complete'],
                data: true,
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
            keys: ['game', 'levels', opts.level, 'start'],
            data: false,
        });
    };

    onCloseReveal = function (prevMessage) {
        var data = {
            start: true,
        };

        if (!prevMessage) return;

        if (prevMessage === 'retry') {
            data.score = 0;
        }

        this.updateGameData({
            keys: ['game', 'levels', opts.level],
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
            keys: ['game', 'levels', opts.level, 'score'],
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
            keys: ['game', 'levels', opts.level, 'hits'],
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

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={`recycling-champion-${opts.level}`}
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
                    pause={_.get(props, 'data.reveal.open', false)}
                    resume={!_.get(props, 'data.reveal.open', false)}
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
                correct={5 - hits}
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
                    </skoash.Component>,
                ]}
            />
        </skoash.Screen>
    );
}
