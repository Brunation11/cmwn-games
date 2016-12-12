import MediaCollection from 'shared/components/media_collection/0.1';

import Score from 'shared/components/score/0.1';
import Timer from 'shared/components/timer/0.1';

import Dropper from 'shared/components/dropper/0.3';
import Randomizer from 'shared/components/randomizer/0.1';
import Catcher from 'shared/components/catcher/0.2';
import Catchable from 'shared/components/catchable/0.1';

import Reveal from 'shared/components/reveal/0.1';

export default function (props, ref, key, opts = {}) {
    var onCloseReveal;
    var onScoreComplete;
    var onTimerComplete;
    var onAddClassName;
    var onCorrectCatch;
    var onIncorrectCatch;

    onCloseReveal = function () {
        this.updateGameState({
            path: 'game',
            data: {
                stop: false,
                start: true,
                restart: false,
            },
        });
        this.updateGameState({
            path: 'closeReveal',
            data: false,
        });
        this.updateGameState({
            path: 'openReveal',
            data: null,
        });
        this.updateGameState({
            path: 'score',
            data: {
                correct: 0,
                incorrect: 0,
            }
        });
    };

    onScoreComplete = function () {
        this.updateGameState({
            path: 'openReveal',
            data: 'level-up',
        });
        this.updateGameState({
            path: 'game',
            data: {
                complete: true,
            },
        });
    };

    onTimerComplete = function () {
        if (_.get(props, 'data.openReveal') === 'level-up') return;
        this.updateGameState({
            path: 'openReveal',
            data: 'try-again',
        });
        this.updateGameState({
            path: 'game',
            data: {
                start: false,
            },
        });
    };

    onAddClassName = function (className) {
        if (className === 'go') return;
        this.updateGameState({
            path: 'sfx',
            data: {
                playing: 'print'
            }
        });
    };

    onCorrectCatch = function (bucketRef) {
        bucketRef.addClassName('correct');
        setTimeout(() => {
            bucketRef.removeClassName('correct');
        }, 1000);
        this.updateGameState({
            path: 'score',
            data: {
                correct: _.get(props, 'data.score.correct', 0) + 1,
            },
        });
    };

    onIncorrectCatch = function (bucketRef) {
        bucketRef.addClassName('incorrect');
        setTimeout(() => {
            bucketRef.removeClassName('incorrect');
        }, 1000);
        this.updateGameState({
            path: 'score',
            data: {
                incorrect: _.get(props, 'data.score.incorrect', 0) + 1,
            },
        });
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={opts.id}
        >
            <skoash.Image
                className="hidden"
                src={ENVIRONMENT.MEDIA + 'ImageAssets/thick.border.png'}
            />
            <MediaCollection
                play={_.get(props, 'data.reveal.open')}
                children={opts.vos}
            />
            <MediaCollection
                play={_.get(props, 'data.sfx.playing')}
                children={opts.sfx}
            />
            <skoash.Component className="left">
                <Score
                    max={100}
                    increment={10}
                    correct={_.get(props, 'data.score.correct', 0)}
                    incorrect={_.get(props, 'data.score.incorrect', 0)}
                    onComplete={onScoreComplete}
                >
                  <div />
                </Score>
                <Timer
                    countDown
                    timeout={opts.timeout}
                    leadingContent="TIME LEFT"
                    stop={_.get(props, 'data.game.complete', false)}
                    complete={_.get(props, 'data.game.complete', false)}
                    checkComplete={_.get(props, 'data.game.start', false)}
                    restart={_.get(props, 'data.game.start', false)}
                    onComplete={onTimerComplete}
                />
            </skoash.Component>
            <skoash.Component className="main">
                <skoash.Image
                    className="hidden"
                    src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.game1.bins.png'}
                />
                <skoash.Image
                    className="hidden"
                    src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.game1.png'}
                />
                <skoash.Image
                    className="hidden"
                    src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.game1.printer.png'}
                />
                <skoash.Image
                    className="hidden"
                    src={ENVIRONMENT.MEDIA + 'ImageAssets/plus.png'}
                />
                <Dropper
                    on={_.get(props, 'data.game.start', false) && !_.get(props, 'gameState.paused')}
                    start={_.get(props, 'data.game.start', false)}
                    stop={_.get(props, 'data.game.complete', false)}
                    prepClasses={['starting', 'ready', 'set', 'go']}
                    prepTimeout={opts.prepTimeout}
                    onAddClassName={onAddClassName}
                    bin={
                      <Randomizer
                          completeOnStart
                          checkComplete={false}
                          bin={[
                              <Catchable
                                  className="milk"
                                  message="other"
                              />,
                              <Catchable
                                  className="shoes"
                                  message="other"
                              />,
                              <Catchable
                                  className="box"
                                  message="other"
                              />,
                              <Catchable
                                  className="milk"
                                  message="other"
                              />,
                              <Catchable
                                  className="shoes"
                                  message="other"
                              />,
                              <Catchable
                                  className="box"
                                  message="other"
                              />,
                              <Catchable
                                  className="cup"
                                  message="plastic"
                              />,
                              <Catchable
                                  className="lego"
                                  message="plastic"
                              />,
                              <Catchable
                                  className="cup"
                                  message="plastic"
                              />,
                              <Catchable
                                  className="lego"
                                  message="plastic"
                              />,
                              <Catchable
                                  className="cup"
                                  message="plastic"
                              />,
                              <Catchable
                                  className="lego"
                                  message="plastic"
                              />,
                              <Catchable
                                  className="glasses"
                                  message="metal"
                              />,
                              <Catchable
                                  className="whistle"
                                  message="metal"
                              />,
                              <Catchable
                                  className="car"
                                  message="metal"
                              />,
                              <Catchable
                                  className="silver"
                                  message="metal"
                              />,
                              <Catchable
                                  className="slinky"
                                  message="metal"
                              />,
                              <Catchable
                                  className="gears"
                                  message="metal"
                              />,
                              <Catchable
                                  className="nails"
                                  message="metal"
                              />,
                          ]}
                      />
                    }
                >
                    <div className="left">
                        <div />
                        <div />
                        <div />
                    </div>
                    <div className="right">
                        <div />
                        <div />
                        <div />
                    </div>
                </Dropper>
                <Catcher
                  completeOnStart
                  checkComplete={false}
                  start={_.get(props, 'data.game.start', false)}
                  bucket={[
                      <skoash.Component className="plastic" message="plastic" />,
                      <skoash.Component className="metal" message="metal" />,
                      <skoash.Component className="other" message="other" />,
                  ]}
                  catchableRefs={_.get(props, 'data.dropper.refs', [])}
                  onCorrect={onCorrectCatch}
                  onIncorrect={onIncorrectCatch}
                  assets={[
                      <skoash.Audio
                      type="voiceOver"
                      ref="correct"
                      src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/Correct.mp3'}
                    />,
                      <skoash.Audio
                      type="voiceOver"
                      ref="incorrect"
                      src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/Incorrect.mp3'}
                    />,
                  ]}
                />
            </skoash.Component>
            <Reveal
                openOnStart={opts.openOnStart}
                openTarget="reveal"
                openReveal={_.get(props, 'data.openReveal', false)}
                closeReveal={_.get(props, 'data.reveal.close', false)}
                onClose={onCloseReveal}
                list={opts.revealList}
            />
        </skoash.Screen>
    );
}
