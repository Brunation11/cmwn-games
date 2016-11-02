import MediaCollection from 'shared/components/media_collection/0.1';

import Score from 'shared/components/score/0.1';
import Timer from 'shared/components/timer/0.1';

import Dropper from 'shared/components/dropper/0.1';
import Randomizer from 'shared/components/randomizer/0.1';
import Catcher from 'shared/components/catcher/0.1';
import Catchable from 'shared/components/catchable/0.1';

import Reveal from 'shared/components/reveal/0.1';

export default function (props, ref, key, opts = {}) {
  var onCloseReveal,
    onScoreComplete,
    getTime,
    onTimerComplete,
    onAddClassName,
    onCorrectCatch,
    onIncorrectCatch,
    onMove,
    bin;

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

  getTime = function () {
    var timeLeft, minutesLeft, secondsLeft;
    timeLeft = this.props.timeout / 1000 - this.state.time;
    minutesLeft = Math.floor(timeLeft / 60);
    minutesLeft = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    secondsLeft = timeLeft % 60;
    secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    return `${minutesLeft}:${secondsLeft}`;
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

  onMove = function (e) {
    var rect, styles;

    if (e.target !== this.refs.catcher) return;

    if (e.targetTouches && e.targetTouches[0]) {
      rect = e.target.getBoundingClientRect();
      e = e.targetTouches[0];
      e.offsetY = e.pageY - rect.top;
    }

    styles = this.state.styles;

    styles[0] = {
      top: Math.min(e.offsetY, 360),
    };

    this.setState({
      styles,
    });
  };

  bin = [];
  for (let i = 0; i < opts.bin.length; i++) {
    for (let j = 0; j < opts.rows; j++) {
      bin.push(
        <Catchable
          className={opts.bin[i].className}
          message={opts.bin[i].message}
          style={{
            top: 400 * (j + .5) / opts.rows,
          }}
        />
      );
    }
  }

  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id={opts.id}
    >
      <skoash.Image
        className="hidden"
        src={'media/_assets/_sprites/sprites.game2.4-01.png'}
      />
      <skoash.Image
        className="hidden"
        src={'media/_assets/_images/thick.border.png'}
      />
      <skoash.Image
        className="hidden"
        src={'media/_assets/_sprites/sprites.game2.1-01.png'}
      />
      <skoash.Image
        className="hidden"
        src={'media/_assets/_sprites/sprites.game2.2-01.png'}
      />
      <MediaCollection
        play={_.get(props, 'data.reveal.open')}
        children={opts.vos}
      />
      <MediaCollection
        play={_.get(props, 'data.sfx.playing')}
        children={opts.sfx}
      />
      <skoash.Component className="bottom">
        <div className="level">
          {opts.level}
        </div>
        <Score
          className="mr-eco-score"
          max={100}
          increment={10}
          correct={_.get(props, 'data.score.correct', 0)}
          onComplete={onScoreComplete}
        >
          <div />
        </Score>
        <Score
          className="litter-bug-score"
          max={100}
          increment={10}
          correct={_.get(props, 'data.score.incorrect', 0)}
          onComplete={onTimerComplete}
        >
          <div />
        </Score>
        <Timer
          countDown
          timeout={opts.timeout}
          leadingContent="TIME LEFT"
          getTime={getTime}
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
          src={'media/_assets/_images/plus.png'}
        />
        <Dropper
          leftBound={70}
          rightBound={820}
          on={_.get(props, 'data.game.start', false)}
          start={_.get(props, 'data.game.start', false)}
          stop={_.get(props, 'data.game.complete', false)}
          prepClasses={['ready', 'go']}
          prepTimeout={opts.prepTimeout}
          onAddClassName={onAddClassName}
          bin={
            <Randomizer
              completeOnStart
              checkComplete={false}
              bin={bin}
            />
          }
        >
        </Dropper>
        <Catcher
          completeOnStart
          checkComplete={false}
          start={_.get(props, 'data.game.start', false)}
          moveBuckets
          onMove={onMove}
          bucket={[
            <skoash.Component className="mr-eco" message="trash" />,
          ]}
          catchableRefs={_.get(props, 'data.dropper.refs', [])}
          onCorrect={onCorrectCatch}
          onIncorrect={onIncorrectCatch}
          assets={[
            // <skoash.Audio
            //   type="voiceOver"
            //   ref="correct"
            //   src={'media/_assets/SoundAssets/effects/Correct.mp3'}
            // />,
            // <skoash.Audio
            //   type="voiceOver"
            //   ref="incorrect"
            //   src={'media/_assets/SoundAssets/effects/Incorrect.mp3'}
            // />,
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
