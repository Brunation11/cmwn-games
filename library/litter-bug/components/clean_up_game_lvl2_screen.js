import MediaCollection from 'shared/components/media_collection/0.1';
import RevealPrompt from 'shared/components/reveal_prompt/0.1';
import Carousel from 'shared/components/carousel/0.1';
import Cannon from 'shared/components/cannon/0.2';
import Randomizer from 'shared/components/randomizer/0.1';
import Timer from 'shared/components/timer/0.1';
import Score from 'shared/components/score/0.1';

const CONFIG = {
    LVL: 2,
    POINTS: 150,
    TIMER: 45000,
};

export default function (props, ref, key) {
    var getTime = function () {
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

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="clean-up-game-lvl-2"
        >
            <skoash.MediaSequence ref="instructions">
                <skoash.Audio ref="vo-1" type="voiceOver" src="media/_assets/_sounds/_vos/Instructions.mp3" />
                <skoash.Audio ref="vo-2" type="voiceOver" src="media/_assets/_sounds/_vos/TossLitter.mp3" />
                <skoash.Audio ref="vo-3" type="voiceOver" src="media/_assets/_sounds/_vos/Get150.mp3" />
            </skoash.MediaSequence>

            <MediaCollection
                play={_.get(props, 'data.reveal.play', null)}
                onPlay={function () {
                    this.updateGameState({
                        path: 'reveal',
                        data: {
                            play: null
                        }
                    });

                    this.updateGameState({
                        path: 'reveal',
                        data: {
                            open: null
                        }
                    });
                }}
            >
                <skoash.MediaSequence ref="complete" silentOnStart>
                    <skoash.Audio
                        ref="vo-4"
                        type="voiceOver"
                        src="media/_assets/_sounds/_vos/Level2.mp3"
                    />
                    <skoash.Audio
                        ref="vo-5"
                        type="voiceOver"
                        src="media/_assets/_sounds/_vos/AmazingJob.mp3"
                    />
                    <skoash.Audio
                        ref="vo-6"
                        type="voiceOver"
                        src="media/_assets/_sounds/_vos/ThankYouCaring.mp3"
                    />
                </skoash.MediaSequence>
                <skoash.MediaSequence ref="try-again" silentOnStart complete>
                    <skoash.Audio
                        ref="vo-7"
                        type="voiceOver"
                        src="media/_assets/_sounds/_vos/LevelLost.mp3"
                        complete
                    />
                    <skoash.Audio
                        ref="vo-8"
                        type="voiceOver"
                        src="media/_assets/_sounds/_vos/OhNo.mp3"
                        complete
                    />
                    <skoash.Audio
                        ref="vo-9"
                        type="voiceOver"
                        src="media/_assets/_sounds/_vos/ParkStill.mp3"
                        complete
                    />
                </skoash.MediaSequence>
                <skoash.MediaSequence ref="throw" silentOnStart>
                    <skoash.Audio
                        ref="vo-10"
                        type="voiceOver"
                        src="media/_assets/_sounds/_effects/FastSwish.mp3"
                    />
                    <skoash.Audio
                        ref="vo-11"
                        type="voiceOver"
                        src="media/_assets/_sounds/_effects/WinPoints.mp3"
                    />
                </skoash.MediaSequence>
            </MediaCollection>

            <RevealPrompt
                ref="reveal"
                openOnStart="instructions"
                openReveal={_.get(props, 'data.reveal.open', null)}
                onOpen={function () {
                    this.updateGameState({
                        path: 'game',
                        data: {
                            stop: true,
                            start: false,
                        },
                    });
                }}
                onClose={function () {
                    this.updateGameState({
                        path: 'game',
                        data: {
                            stop: false,
                            start: true,
                        },
                    });
                }}
                list={[
                    <skoash.Component data-ref="instructions">
                        <skoash.Component className="frame instructions-lvl-2">
                            <div className="banner" />
                            <span>
                                Toss the litter in the cans to<br />
                                clean up by clicking, aiming,<br />
                                and letting go!
                            </span>
                            <span>
                                Get
                            </span>
                            <div className="hundred" />
                            <span>
                                points before the time
                            </span>
                            <span>
                                runs out to win!
                            </span>
                        </skoash.Component>
                    </skoash.Component>,
                    <skoash.Component data-ref="complete">
                        <skoash.Component className="frame complete-lvl-2">
                            <div className="banner" />
                            <div className="banner-2" />
                            <span>
                                Thank you for caring so much<br />
                                about the environment!
                            </span>
                        </skoash.Component>
                    </skoash.Component>,
                    <skoash.Component data-ref="try-again">
                        <skoash.Component className="frame">
                            <div className="banner" />
                            <div className="banner-2" />
                            <span>
                                The park is still covered with trash<br />
                                but you still have a chance to clean<br />
                                and beat the Litterbug!
                            </span>
                        </skoash.Component>
                    </skoash.Component>
                ]}
            />

            <Carousel
                ref="carousel"
                completeOnStart={true}
                checkComplete={false}
                showNum={5}
                targetIndex={2}
                selected={_.get(props, 'data.cannon.fire')}
                onSelect={function (target) {
                    var score = _.get(props, 'data.score.points', 0);
                    var classes = this.state.classes;
                    classes[target.props['data-key']] = 'SELECTED';

                    this.setState({
                        classes
                    }, () => {
                        setTimeout(() => {
                            classes[target.props['data-key']] = '';
                        }, 1000);
                    });

                    if (score < CONFIG.POINTS) score += target.props.value;

                    this.updateGameState({
                        path: 'score',
                        data: {
                            points: score
                        }
                    });

                    if (score >= CONFIG.POINTS & !_.get(props, 'data.game.complete')) {
                        this.updateGameState({
                            path: 'reveal',
                            data: {
                                open: 'complete'
                            }
                        });

                        this.updateGameState({
                            path: 'reveal',
                            data: {
                                play: 'complete'
                            }
                        });

                        this.updateGameState({
                            path: 'game',
                            data: {
                                complete: true
                            }
                        });
                    }
                }}
                bin={
                    <Randomizer
                        ref="randomizer"
                        completeOnStart={true}
                        checkComplete={false}
                        bin={[
                            <skoash.Component className="five" name="five" value={5} complete />,
                            <skoash.Component className="ten" name="ten" value={10} complete />,
                            <skoash.Component className="twenty" name="twenty" value={20} complete />,
                            <skoash.Component className="thirty" name="thirty" value={30} complete />,
                        ]}
                    />
                }
            />

            <Cannon
                ref="cannon"
                completeOnStart={true}
                checkComplete={false}
                reverseReload={true}
                launchButton={true}
                reloadTime={2000}
                showNum={4}
                bin={
                    <Randomizer
                      ref="randomizer"
                      completeOnStart={true}
                      checkComplete={false}
                      bin={[
                          <skoash.Component className="plastic-bottle" complete />,
                          <skoash.Component className="soda-can" complete />,
                          <skoash.Component className="banana-peal" complete />,
                          <skoash.Component className="glass-bottle" complete />,
                          <skoash.Component className="crumbled-paper" complete />,
                          <skoash.Component className="tuna-can" complete />,
                          <skoash.Component className="tire" complete />,
                          <skoash.Component className="battery" complete/>,
                      ]}
                    />
                }
                onFire={function () {
                    this.updateGameState({
                        path: 'reveal',
                        data: {
                            play: 'throw'
                        }
                    });
                    this.updateGameState({
                        path: 'cannon',
                        data: {
                            fire: false
                        }
                    });
                }}
                onReload={function () {
                    this.updateGameState({
                        path: 'cannon',
                        data: {
                            fire: true
                        }
                    });
                }}
            />

            <skoash.Component className="grass">
                <skoash.Component className="stats">
                    <span className="level">
                        {CONFIG.LVL}
                    </span>

                    <Timer
                        ref="timer"
                        countDown={true}
                        timeout={CONFIG.TIMER}
                        getTime={getTime}
                        stop={_.get(props, 'data.game.complete', false)}
                        complete={_.get(props, 'data.game.complete', false)}
                        checkComplete={_.get(props, 'data.game.start', false)}
                        restart={_.get(props, 'data.game.start', false)}
                        onComplete={function () {
                            if (_.get(props, 'data.reveal.open')) return;
                            if (_.get(props, 'data.score.points', 0) < CONFIG.POINTS) {
                                this.updateGameState({
                                    path: 'reveal',
                                    data: {
                                        open: 'try-again'
                                    }
                                });

                                this.updateGameState({
                                    path: 'reveal',
                                    data: {
                                        play: 'try-again'
                                    }
                                });

                                this.updateGameState({
                                    path: 'score',
                                    data: {
                                        points: 0
                                    }
                                });
                            }
                        }}
                    />

                    <Score
                        ref="score"
                        max={CONFIG.POINTS}
                        correct={_.get(props, 'data.score.points', 0)}
                        checkComplete={false}
                        complete={_.get(props, 'data.score.points', 0) === CONFIG.POINTS}
                    />
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
