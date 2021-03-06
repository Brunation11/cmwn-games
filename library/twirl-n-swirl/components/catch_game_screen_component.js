import classNames from 'classnames';

import MediaCollection from 'shared/components/media_collection/0.1';
import RevealPrompt from 'shared/components/reveal_prompt/0.1';
import Score from 'shared/components/score/0.1';
import Catchable from 'shared/components/catchable/0.1';
import Dropper from 'shared/components/dropper/0.1';
import Catcher from 'shared/components/catcher/0.1';
import Randomizer from 'shared/components/randomizer/0.1';
import Timer from 'shared/components/timer/0.1';

export default function (props, ref, key, opts = {}) {
    var bin = [];
    var SFXOnPlay;
    var scoreOnComplete;
    var timerGetTime;
    var timerOnComplete;
    var timerOnCheckComplete;
    var revealPromptOnOpen;
    var revealPromptOnClose;
    var dropperGetClassNames;
    var dropperOnAddClassName;
    var dropperOnTransitionEnd;
    var catcherOnMove;
    var catcherOnCorrect;
    var catcherOnIncorrect;
    var renderDropPoints;

    for (let i = 0; i < opts.bin.length; i++) {
        for (let j = 0; j < opts.rows; j++) {
            bin.push(
                <Catchable
                    className={`${opts.bin[i].className} ${opts.dropSpeed}`}
                    message={opts.bin[i].message}
                    style={{
                        top: 400 * (j + .4) / opts.rows,
                    }}
                />
            );
        }
    }

    SFXOnPlay = function () {
        this.updateGameState({
            path: 'sfx',
            data: {
                play: null
            }
        });
    };

    scoreOnComplete = function () {
        this.updateGameState({
            path: 'sfx',
            data: {
                countdown: null
            }
        });

        if (_.get(props, 'data.reveal.open') === 'level-complete') return;

        this.updateGameState({
            path: 'reveal',
            data: {
                open: 'try-again'
            }
        });
    };

    timerGetTime = function () {
        var timeLeft;
        var minutesLeft;
        var secondsLeft;
        timeLeft = this.props.timeout / 1000 - this.state.time;
        minutesLeft = Math.floor(timeLeft / 60);
        minutesLeft = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
        secondsLeft = timeLeft % 60;
        secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
        return `${minutesLeft}:${secondsLeft}`;
    };

    timerOnComplete = function () {
        this.updateGameState({
            path: 'sfx',
            data: {
                countdown: null
            }
        });

        this.updateGameState({
            path: 'score',
            data: {
                points: 0
            }
        });

        if (_.get(props, 'data.reveal.open') === 'level-complete') return;

        this.updateGameState({
            path: 'reveal',
            data: {
                open: 'try-again'
            }
        });
    };

    timerOnCheckComplete = function () {
        if (_.get(props, 'data.sfx.countdown') === 'countdown') return;
        if ((this.props.timeout - (this.state.time * 1000)) <= 10000) {
            this.updateGameState({
                path: 'sfx',
                data: {
                    countdown: 'countdown'
                }
            });
        }
    };

    revealPromptOnOpen = function () {
        this.updateGameState({
            path: 'game',
            data: {
                stop: true,
                start: false
            }
        });
    };

    revealPromptOnClose = function () {
        this.updateGameState({
            path: 'game',
            data: {
                stop: false,
                start: true
            }
        });
        this.updateGameState({
            path: 'sfx',
            data: {
                play: 'button'
            }
        });
        this.updateGameState({
            path: 'reveal',
            data: {
                open: null
            }
        });
    };

    dropperGetClassNames = function () {
        var index = this.state.itemCount;
        var classes = this.state.classes;
        classes[index] = _.sample(opts.dropPoints);
        return classes;
    };

    dropperOnAddClassName = function (className) {
        if (className === 'go') return;
        this.updateGameState({
            path: 'sfx',
            data: {
                play: 'drop'
            }
        });
    };

    dropperOnTransitionEnd = function (item) {
        if (_.get(props, 'data.reveal.open') || props.gameState.paused ||
      item.props.message !== 'trash' || !item.state.canCatch) return;

        this.updateGameState({
            path: 'score',
            data: {
                points: _.get(props, 'data.score.points', 0) + opts.points.incorrect,
            },
        });
        this.updateGameState({
            path: 'sfx',
            data: {
                play: 'incorrect-miss',
            }
        });
    };

    catcherOnMove = function (e) {
        var rect;
        var styles;
        if (e.target !== this.refs.catcher) return;
        if (e.targetTouches && e.targetTouches[0]) {
            rect = e.target.getBoundingClientRect();
            e = e.targetTouches[0];
            e.offsetX = e.pageX - rect.left;
        }

        styles = this.state.styles;

        styles[0] = {
            left: e.offsetX,
        };

        this.setState({
            styles,
        });
    };

    catcherOnCorrect = function (bucketRef, catchableRef) {
        bucketRef.addClassName('correct');
        catchableRef.addClassName('correct');

        setTimeout(() => {
            bucketRef.removeClassName('correct');
        }, 1000);

        this.updateGameState({
            path: 'score',
            data: {
                points: _.get(props, 'data.score.points', 0) + opts.points.correct,
            },
        });

        this.updateGameState({
            path: 'sfx',
            data: {
                play: 'correct',
            }
        });

        if (_.get(props, 'data.score.points') >= opts.points.goal) {
            this.updateGameState({
                path: 'game',
                data: {
                    complete: true,
                    start: false,
                    stop: true
                }
            });

            this.updateGameState({
                path: 'reveal',
                data: {
                    open: 'level-complete'
                }
            });
        }
    };

    catcherOnIncorrect = function (bucketRef, catchableRef) {
        bucketRef.addClassName('incorrect');
        catchableRef.addClassName('incorrect');

        setTimeout(() => {
            bucketRef.removeClassName('incorrect');
        }, 1000);
        this.updateGameState({
            path: 'score',
            data: {
                points: _.get(props, 'data.score.points', 0) + opts.points.incorrect,
            },
        });

        this.updateGameState({
            path: 'sfx',
            data: {
                play: 'incorrect-catch',
            }
        });
    };

    renderDropPoints = function () {
        return _.map(opts.dropPoints, (val) => {
            return (
                <skoash.Component className={`pipe ${val}`} />
            );
        });
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={opts.id}
            onStart={opts.onStart}
        >
            <skoash.Component className="misc">
                <skoash.Component
                    className={classNames(
                        'fish-1', {
                            sad: _.get(props, 'data.sfx.countdown')
                        }
                    )}
                />
                <skoash.Component
                    className={classNames(
                        'fish-2', {
                            sad: _.get(props, 'data.sfx.countdown')
                        }
                    )}
                />
                <skoash.Component
                    className={classNames(
                        'fish-3', {
                            sad: _.get(props, 'data.sfx.countdown')
                        }
                    )}
                />
                <skoash.Component
                    className={classNames(
                        'fish-4', {
                            sad: _.get(props, 'data.sfx.countdown')
                        }
                    )}
                />
            </skoash.Component>

            <skoash.Component className="drop-points" children={renderDropPoints()} />

            <MediaCollection
                play={_.get(props, 'data.reveal.open')}
                children={opts.vos}
            />

            <MediaCollection
                play={_.get(props, 'data.sfx.countdown', null)}
                onPlay={SFXOnPlay}
            >
                <skoash.Audio
                    ref="countdown"
                    type="sfx"
                    src="media/audio/Timer_Last10Sec.mp3"
                    silentOnStart
                    complete
                />
            </MediaCollection>


            <MediaCollection
                play={_.get(props, 'data.sfx.play', null)}
                onPlay={SFXOnPlay}
            >
                <skoash.Audio ref="button" type="sfx" src="media/audio/button.mp3" silentOnStart complete />
                <skoash.Audio ref="incorrect-miss" type="sfx" src="media/audio/LoosePoints.mp3" complete />
                <skoash.MediaSequence ref="correct" silentOnStart>
                    <skoash.Audio ref="catch" type="sfx" src="media/audio/basket.mp3" complete />
                    <skoash.Audio ref="earn" type="sfx" src="media/audio/GainPoints.mp3" complete />
                </skoash.MediaSequence>
                <skoash.MediaSequence ref="incorrect-catch" silentOnStart>
                    <skoash.Audio ref="catch" type="sfx" src="media/audio/basket.mp3" complete />
                    <skoash.Audio ref="lose" type="sfx" src="media/audio/LoosePoints.mp3" complete />
                </skoash.MediaSequence>
            </MediaCollection>

            <Score
                ref="score"
                className={`score lvl-${opts.level}`}
                max={opts.points}
                correct={_.get(props, 'data.score.points', 0)}
                checkComplete={false}
                complete={_.get(props, 'data.game.complete', false)}
                onComplete={scoreOnComplete}
            />

            <Timer
                ref="timer"
                countDown={true}
                timeout={opts.timeout}
                getTime={timerGetTime}
                stop={_.get(props, 'data.game.complete', false)}
                complete={_.get(props, 'data.game.complete', false)}
                checkComplete={_.get(props, 'data.game.start', false)}
                onCheckComplete={timerOnCheckComplete}
                restart={_.get(props, 'data.game.start', false)}
                onComplete={timerOnComplete}
            />

            <RevealPrompt
                ref="reveal-prompt"
                openOnStart={opts.openOnStart}
                onOpen={revealPromptOnOpen}
                onClose={revealPromptOnClose}
                openReveal={_.get(props, 'data.reveal.open', null)}
                list={opts.revealPromptList}
            />

            <Dropper
                leftBound={70}
                rightBound={820}
                on={_.get(props, 'data.game.start', false)}
                start={_.get(props, 'data.game.start', false)}
                stop={_.get(props, 'data.game.complete', false)}
                prepClasses={['ready', 'go']}
                prepTimeout={opts.dropTimeout}
                getClassNames={dropperGetClassNames}
                onAddClassName={dropperOnAddClassName}
                onTransitionEnd={dropperOnTransitionEnd}
                bin={
                    <Randomizer
                        completeOnStart
                        checkComplete={false}
                        bin={bin}
                        remain
                    />
                }
            />

            <Catcher
                completeOnStart
                checkComplete={false}
                start={_.get(props, 'data.game.start', false)}
                canCatch={_.get(props, 'data.game.start', false)}
                moveBuckets
                onMove={catcherOnMove}
                bucket={[
                    <skoash.Component className="bucket" message="trash" />,
                ]}
                catchableRefs={_.get(props, 'data.dropper.refs', [])}
                onCorrect={catcherOnCorrect}
                onIncorrect={catcherOnIncorrect}
            />
        </skoash.Screen>
    );
}
