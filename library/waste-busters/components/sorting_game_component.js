import Carousel from 'shared/components/carousel/0.1';
import Cannon from 'shared/components/cannon/0.2';
import Randomizer from 'shared/components/randomizer/0.1';

var images = [];

for (let i = 1; i < 9; i++) {
    images.push(
        <skoash.Image
            key={i}
            className="hidden"
            src={`${CMWN.MEDIA.SPRITE}game2.${i}.png`}
        />
    );
}

images.push(
    <skoash.Image
        key={9}
        className="hidden"
        src={`${CMWN.MEDIA.SPRITE}slingshot.png`}
    />
);

export default function (props, ref, key, opts = {}) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={`sorting-level-${opts.level}`}
            className={'reveal-open-' + _.get(props, 'data.reveal.open', '')}
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
                        src={`${CMWN.MEDIA.VO}Waste_Sorting_Center.mp3`}
                    />
                    <skoash.Audio
                        type="voiceOver"
                        src={`${CMWN.MEDIA.VO}${opts.instructionsVO}.mp3`}
                    />
                </skoash.MediaSequence>
                <skoash.Audio
                    ref="complete"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}${opts.completeVO}.mp3`}
                />
                <skoash.Audio
                    ref="retry"
                    type="voiceOver"
                    src={CMWN.MEDIA.VO + 'Keep_Sorting.mp3'}
                    complete
                />
            </skoash.MediaCollection>
            <skoash.MediaCollection
                play={_.get(props, 'data.game.play', _.get(props, 'data.reveal.open', null))}
            >
                <skoash.Audio
                    ref="correct"
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}Correct.mp3`}
                    complete
                />
                <skoash.Audio
                    ref="incorrect"
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}WrongBinForItem.mp3`}
                    complete
                />
                <skoash.Audio
                    ref="warning"
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}TenSecondsWarning.mp3`}
                    complete
                />
                <skoash.Audio
                    ref="fire"
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}SlingshotRelease_sortButton.mp3`}
                    complete
                />
                <skoash.Audio
                    ref="complete"
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}${opts.completeSFX}.mp3`}
                    complete
                />
            </skoash.MediaCollection>
            <skoash.Component>
                {images}
            </skoash.Component>
            <skoash.SpriteAnimation
                className="slingshot"
                src={`${CMWN.MEDIA.SPRITE}slingshot.png`}
                animate={_.get(props, 'data.game.firing', false)}
                animateOnStart={false}
                frames={6}
                complete
            />
            <Carousel
                ref="carousel"
                completeOnStart={true}
                checkComplete={false}
                showNum={7}
                targetIndex={4}
                selected={_.get(props, 'data.game.fired')}
                onSelect={function (target) {
                    var correct = _.get(props, 'data.game.correct', 0);
                    var incorrect = _.get(props, 'data.game.incorrect', 0);
                    var classes = this.state.classes;
                    var play;

                    classes[target.props['data-key']] = 'SELECTED';

                    this.setState({
                        classes
                    }, () => {
                        setTimeout(() => {
                            classes[target.props['data-key']] = '';
                        }, 1000);
                    });

                    if (target.props.name === _.get(props, 'data.game.fired.props.message')) {
                        correct++;
                        play = 'correct';
                    } else {
                        incorrect++;
                        play = 'incorrect';
                    }

                    this.updateGameState({
                        path: 'game',
                        data: {
                            correct,
                            incorrect,
                            play
                        }
                    });
                }}
                bin={
                    <Randomizer
                        ref="randomizer"
                        completeOnStart={true}
                        checkComplete={false}
                        remain={true}
                        bin={[
                            <skoash.Component className="recycle" name="recycle"/>,
                            <skoash.Component className="landfill" name="landfill" />,
                            <skoash.Component className="compost" name="compost" />,
                            <skoash.Component className="recycle" name="recycle"/>,
                            <skoash.Component className="landfill" name="landfill" />,
                            <skoash.Component className="compost" name="compost" />,
                            <skoash.Component className="recycle" name="recycle"/>,
                            <skoash.Component className="landfill" name="landfill" />,
                            <skoash.Component className="compost" name="compost" />,
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
                dataDelay={1000}
                showNum={0}
                bin={
                  <Randomizer
                    completeOnStart={true}
                    checkComplete={false}
                    bin={[
                        <skoash.Component className="flowers" message="compost" />,
                        <skoash.Component className="paper" message="recycle" />,
                        <skoash.Component className="newspaper" message="recycle" />,
                        <skoash.Component className="napkin" message="landfill" />,
                        <skoash.Component className="lettuce" message="compost" />,
                        <skoash.Component className="juice" message="recycle" />,
                        <skoash.Component className="eggshell" message="compost" />,
                        <skoash.Component className="diaper" message="landfill" />,
                        <skoash.Component className="mug" message="landfill" />,
                        <skoash.Component className="coffee" message="compost" />,
                        <skoash.Component className="box" message="recycle" />,
                        <skoash.Component className="can" message="recycle" />,
                        <skoash.Component className="bottle" message="recycle" />,
                        <skoash.Component className="banana" message="compost" />,
                        <skoash.Component className="apple" message="compost" />,
                    ]}
                  />
                }
            />
            <skoash.Component className="stats">
                <div className="level">
                    <p>level</p>
                    {opts.level}
                </div>
                <skoash.Timer
                    ref="timer"
                    countDown={true}
                    timeout={opts.timer}
                    stop={_.get(props, 'data.game.complete', false)}
                    complete={_.get(props, 'data.game.complete', false)}
                    checkComplete={_.get(props, 'data.game.start', false)}
                    restart={_.get(props, 'data.game.start', false)}
                    leadingContent={<p>time</p>}
                    onComplete={function () {
                        if (_.get(props, 'data.game.complete')) return;
                        this.updateGameState({
                            path: 'reveal',
                            data: {
                                open: 'retry'
                            }
                        });

                        this.updateGameState({
                            path: 'game',
                            data: {
                                correct: 0,
                                incorrect: 0,
                            }
                        });
                    }}
                />
                <skoash.Score
                    ref="score"
                    max={opts.points}
                    increment={10}
                    correct={_.get(props, 'data.game.correct', 0)}
                    incorrect={_.get(props, 'data.game.incorrect', 0)}
                    leadingContent={<p>score</p>}
                    onComplete={function () {
                        this.updateGameState({
                            path: 'reveal',
                            data: {
                                open: 'complete'
                            }
                        });
                        this.updateGameState({
                            path: 'game',
                            data: {
                                complete: true
                            }
                        });
                    }}
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
