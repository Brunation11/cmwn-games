import Catcher from 'shared/components/catcher/0.2';

export default function (props, ref, key, opts = {}) {
    var onTimerComplete;
    var onOpenReveal;
    var onCloseReveal;
    var onCorrectCatch;
    var onIncorrectCatch;

    var start = _.get(props, `gameState.data.game.levels.${opts.level}.start`, false);
    var score = _.get(props, `gameState.data.game.levels.${opts.level}.score`, 0);
    var hits = _.get(props, `gameState.data.game.levels.${opts.level}.hits`, 0);
    var itemName = _.get(props, 'data.dropper.item.name', '');

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

    onCorrectCatch = function () {
        this.updateGameData({
            keys: ['game', 'levels', opts.level, 'score'],
            data: score + 50,
        });
    };

    onIncorrectCatch = function () {
        this.updateGameData({
            keys: ['game', 'levels', opts.level, 'hits'],
            data: hits + 1,
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
                correct={hits}
                setScore={true}
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
                    catchableRefs={_.get(props, 'data.dropper.refs', [])}
                    onCorrect={onCorrectCatch}
                    onIncorrect={onIncorrectCatch}
                    assets={[
                    ]}
                />
                <skoash.Selectable
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
