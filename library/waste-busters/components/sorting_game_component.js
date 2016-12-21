import classNames from 'classnames';

import Carousel from 'shared/components/carousel/0.1';
import Cannon from 'shared/components/cannon/0.2';
import Randomizer from 'shared/components/randomizer/0.1';

var images = [];

for (let i = 1; i < 9; i++) {
    images.push(
        <skoash.Image
            key={i}
            className="hidden"
            src={`${MEDIA.SPRITE}game2.${i}.png`}
        />
    );
}

images.push(
    <skoash.Image
        key={9}
        className="hidden"
        src={`${MEDIA.SPRITE}slingshot.png`}
    />
);

export default function (props, ref, key, opts = {}) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={`sorting-level-${opts.level}`}
            className={classNames({
                'reveal-open': _.get(props, 'data.reveal.open', false)
            })}
        >
            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open', null)}
                onPlay={function () {
                    this.updateGameState({
                        path: 'reveal',
                        data: {
                            open: null
                        }
                    });
                }}
            >
                <skoash.MediaSequence
                    ref="instructions"
                    silentOnStart
                >
                    <skoash.Audio
                        type="voiceOver"
                        src={MEDIA.VO + 'Waste_Sorting_Center.mp3'}
                    />
                    <skoash.Audio
                        type="voiceOver"
                        src={MEDIA.VO + 'Launch_The_Object.mp3'}
                    />
                </skoash.MediaSequence>
                <skoash.Audio
                    ref="complete"
                    type="voiceOver"
                    src={MEDIA.VO + 'Waste_Sorting_Wizard.mp3'}
                />
                <skoash.Audio
                    ref="retry"
                    type="voiceOver"
                    src={MEDIA.VO + 'Keep_Sorting.mp3'}
                />
            </skoash.MediaCollection>
            <skoash.Component>
                {images}
            </skoash.Component>
            <Carousel
                ref="carousel"
                completeOnStart={true}
                checkComplete={false}
                showNum={7}
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

                    if (score < opts.points) score += target.props.value;

                    this.updateGameState({
                        path: 'score',
                        data: {
                            points: score
                        }
                    });

                    if (score >= opts.points & !_.get(props, 'data.game.complete')) {
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
                    completeOnStart={true}
                    checkComplete={false}
                    bin={[
                        <skoash.Component className="plastic-bottle" />,
                        <skoash.Component className="soda-can" />,
                        <skoash.Component className="banana-peal" />,
                        <skoash.Component className="glass-bottle" />,
                        <skoash.Component className="crumbled-paper" />,
                        <skoash.Component className="tuna-can" />,
                        <skoash.Component className="tire" />,
                        <skoash.Component className="battery" />,
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
            <skoash.Component className="stats">
                <span className="level">
                    {opts.level}
                </span>

                <skoash.Timer
                    ref="timer"
                    countDown={true}
                    timeout={opts.timer}
                    stop={_.get(props, 'data.game.complete', false)}
                    complete={_.get(props, 'data.game.complete', false)}
                    checkComplete={_.get(props, 'data.game.start', false)}
                    restart={_.get(props, 'data.game.start', false)}
                    onComplete={function () {
                        if (_.get(props, 'data.reveal.open')) return;
                        if (_.get(props, 'data.score.points', 0) < opts.points) {
                            this.updateGameState({
                                path: 'reveal',
                                data: {
                                    open: 'retry'
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

                <skoash.Score
                    ref="score"
                    max={opts.points}
                    correct={_.get(props, 'data.score.points', 0)}
                    checkComplete={false}
                    complete={_.get(props, 'data.score.points', 0) === opts.points}
                />
            </skoash.Component>
            <skoash.Reveal
                openOnStart="instructions"
                openTarget="reveal"
                closeTarget="reveal"
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
                    <skoash.Component
                        ref="instructions"
                        className="instructions frame round"
                    >
                        <div className="content">
                            {opts.instructions}
                        </div>
                    </skoash.Component>,
                    <skoash.Component
                        ref="complete"
                        className="complete frame round"
                    >
                        <div className="content">
                            {opts.complete}
                        </div>
                    </skoash.Component>,
                    <skoash.Component
                        ref="retry"
                        className="retry frame round"
                    >
                        <div className="content">
                            <p>
                                Keep Sorting!<br/>
                                If you don't succeed,<br/>
                                try again!
                            </p>
                        </div>
                    </skoash.Component>,
                ]}
            />
        </skoash.Screen>
    );
}
