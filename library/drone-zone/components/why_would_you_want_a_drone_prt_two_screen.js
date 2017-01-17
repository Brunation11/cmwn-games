import classNames from 'classnames';

import Dropzone from 'shared/components/dropzone/0.5';
import Draggable from 'shared/components/draggable/0.4';

export default function (props, ref, key) {
    var onPlay;
    var onDrag;
    var onDrop;
    var onCorrect;
    var onIncorrect;

    onPlay = function () {
        this.updateGameState({
            path: 'reveal',
            data: {
                open: null
            }
        });
    };

    onDrag = function () {
        this.setState({
            correct: false,
            return: false,
        });
        this.updateGameState({
            path: 'sfx',
            data: {
                playing: 'drag',
            },
        });
    };

    onDrop = function () {
        this.returnToStart();
    };

    onCorrect = function (dropped, dropzoneRef) {
        this.updateGameState({
            path: 'dropzone',
            data: {
                [dropzoneRef.props['data-ref']]: true
            }
        });
    }

    onIncorrect = function () {
        this.updateGameState({
            path: 'reveal',
            data: {
                open: 'incorrect'
            }
        });
    }

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="why-would-you-want-a-drone-prt-two"
        >
            <skoash.Component className="header">
                <h1>WHY WOULD YOU WANT A DRONE?</h1>
            </skoash.Component>

            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open', null)}
                onPlay={onPlay}
            >
                {/*
                <skoash.Audio
                    ref="instructions"
                    type="voiceOver"
                    src={`${MEDIA.VO}LetsPutKnowTest.mp3`}
                />
                <skoash.Audio
                    ref="construction"
                    type="voiceOver"
                    src={`${MEDIA.VO}`}
                />
                <skoash.Audio
                    ref="sports"
                    type="voiceOver"
                    src={`${MEDIA.VO}`}
                />
                <skoash.Audio
                    ref="police-duties"
                    type="voiceOver"
                    src={`${MEDIA.VO}`}
                />
                <skoash.Audio
                    ref="fire-fighting"
                    type="voiceOver"
                    src={`${MEDIA.VO}`}
                />
                <skoash.Audio
                    ref="photography"
                    type="voiceOver"
                    src={`${MEDIA.VO}`}
                />
                <skoash.Audio
                    ref="delivery"
                    type="voiceOver"
                    src={`${MEDIA.VO}`}
                />
                <skoash.Audio
                    ref="farming"
                    type="voiceOver"
                    src={`${MEDIA.VO}`}
                />
                */}
            </skoash.MediaCollection>

            <skoash.Reveal
                openTarget="reveal"
                closeTarget="reveal"
                openOnStart="instructions"
                openReveal={_.get(props, 'data.reveal.open', null)}
                list={[
                    <skoash.Component
                        ref="instructions"
                        className="frame job-round instructions"
                    >
                        <span className="copy">
                            Let's put your
                            <br />
                            knowledge to the test!
                            <br />
                            Click and drag these
                            <br />
                            tasks to the proper
                            <br />
                            scenario where the
                            <br />
                            drone could be used!
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="incorrect"
                        className="frame incorrect"
                    >
                        <h2>TRY AGAIN</h2>
                        <span className="copy">
                            That's not quite
                            <br />
                            right, but don't
                            <br />
                            worry, you have
                            <br />
                            another chance!
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="complete"
                        className="frame complete"
                    >
                        <span className="copy">
                            Excellent Job!
                            <br />
                            You are now an
                            <br />
                            expert at drones!
                            <br />
                            Now what will you
                            <br />
                            use a drone for?
                        </span>
                    </skoash.Component>
                ]}
            />

            <Dropzone
                checkComplete={false}
                dropped={_.get(props, 'data.draggable.dropped')}
                dragging={_.get(props, 'data.draggable.dragging')}
                onCorrect={onCorrect}
                onIncorrect={onIncorrect}
                dropzones={[
                    <skoash.Component
                        ref="construction"
                        className={classNames(
                            'job-round construction', {
                                'CORRECT CONSTRUCTION':_.get(props, 'data.dropzone.construction')
                            }
                        )}
                        answers={['construction']}
                    />,
                    <skoash.Component
                        ref="sports"
                        className="job-round sports"
                        className={classNames(
                            'job-round sports', {
                                'CORRECT SPORTS': _.get(props, 'data.dropzone.sports')
                            }
                        )}
                        answers={['sports']}
                    />,
                    <skoash.Component
                        ref="police-duties"
                        className="job-round police-duties"
                        className={classNames(
                            'job-round police-duties', {
                                'CORRECT POLICE-DUTIES': _.get(props, 'data.dropzone[police-duties]')
                            }
                        )}
                        answers={['police-duties']}
                    />,
                    <skoash.Component
                        ref="fire-fighting"
                        className="job-round fire-fighting"
                        className={classNames(
                            'job-round fire-fighting', {
                                'CORRECT FIRE-FIGHTING': _.get(props, 'data.dropzone[fire-fighting]')
                            }
                        )}
                        answers={['fire-fighting']}
                    />,
                    <skoash.Component
                        ref="photography"
                        className={classNames(
                            'job-round photography', {
                                'CORRECT PHOTOGRAPHY': _.get(props, 'data.dropzone.photography')
                            }
                        )}
                        answers={['photography']}
                    />,
                    <skoash.Component
                        ref="delivery"
                        className={classNames(
                            'job-round delivery', {
                                'CORRECT DELIVERY': _.get(props, 'data.dropzone.delivery')
                            }
                        )}
                        answers={['delivery']}
                    />,
                    <skoash.Component
                        ref="farming"
                        className={classNames(
                            'job-round farming', {
                                'CORRECT FARMING': _.get(props, 'data.dropzone.farming')
                            }
                        )}
                        answers={['farming']}
                    />
                ]}
            />

            <skoash.Repeater
                className="draggables"
                amount={13}
                item={
                    <Draggable
                      return
                      returnOnIncorrect
                      stayOnCorrect={false}
                      onDrag={onDrag}
                      onDrop={onDrop}
                    />
                }
                props={[
                    {
                        message: 'construction',
                        className: 'construction'
                    },
                    {
                        message: 'farming',
                        className: 'farming'
                    },
                    {
                        message: 'delivery',
                        className: 'delivery'
                    },
                    {
                        message: 'fire-fighting',
                        className: 'fire-fighting'
                    },
                    {
                        message: 'police-duties',
                        className: 'police-duties'
                    },
                    {
                        message: 'photography',
                        className: 'photography'
                    },
                    {
                        message: 'sports',
                        className: 'sports'
                    }
                ]}
            />
        </skoash.Screen>
    );
}
