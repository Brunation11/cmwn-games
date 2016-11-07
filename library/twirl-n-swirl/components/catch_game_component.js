import MediaCollection from 'shared/components/media_collection/0.1';
import RevealPrompt from 'shared/components/reveal_prompt/0.1';
import Score from 'shared/components/score/0.1';
import Catcher from 'shared/components/catcher/0.1';
import Timer from 'shared/components/timer/0.1';

export default function (props, ref, key, opts = {}) {
  var getTime,
      onTimerComplete,
      onOpenReveal,
      onCloseReveal,
      increaseScore,
      decreaseScore,
      updateLevel,
      completeLevel,
      onPlaySFX,
      onMove,
      onCorrectCatch,
      onIncorrectCatch;

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
    if (_.get(props, 'data.prompt')) return;
    this.updateGameState({
      path: 'prompt',
      data: 'try-again'
    });
  };

  onOpenReveal = function () {
    this.updateGameState({
      path: 'game',
      data: {
        stop: true,
        start: false
      },
    });
  };

  onCloseReveal = function (prevMessage) {
    this.updateGameState({
      path: 'game',
      data: {
        stop: false,
        start: true
      },
    });
    this.updateGameState({
      path: 'reveal',
      data: {
        close: false
      }
    });
    this.updateGameState({
      path: 'prompt',
      data: null
    });
    this.updateGameState({
      path: 'score',
      data: {
        correct: 0
      }
    });
  };

  onMove = function (e) {
    var rect, styles;

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

  increaseScore = function () {
    var score = _.get(props, 'data.score.correct', 0);
    if (score < 50) {
      score += 5;
      this.updateGameState({
        path: 'score',
        data: {
          correct: score
        }
      });
    }

    if (score >= 50) completeLevel.call(this);
  };

  decreaseScore = function () {
    var score = _.get(props, 'data.score.correct', 0);
    score -= 10;
    this.updateGameState({
      path: 'score',
      data: {
        correct: score
      }
    });
  };

  onPlaySFX = function () {
    this.updateGameState({
      path: 'sfx',
      data: {
        playing: null,
      }
    });
  };

  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id={opts.id}
    >
      <MediaCollection
        play={_.get(props, 'data.reveal.open', null)}
        children={opts.vos}
      />

      <MediaCollection
        play={_.get(props, 'data.sfx.playing', null)}
        onPlay={onPlaySFX}
        children={opts.sfx}
      />

      <Score
        ref="score"
        max={50}
        correct={_.get(props, 'data.score.correct', 0)}
      />

      <Timer
        countDown={true}
        timeout={opts.timeout}
        getTime={getTime}
        stop={_.get(props, 'data.game.complete', false)}
        complete={_.get(props, 'data.game.complete', false)}
        checkComplete={_.get(props, 'data.game.start', false)}
        restart={_.get(props, 'data.game.start', false)}
        onComplete={onTimerComplete}
      />

      <Catcher
        completeOnStart
        checkComplete={false}
        start={_.get(props, 'data.game.start', false)}
        canCatch={_.get(props, 'data.game.start', false)}
        moveBuckets
        onMove={onMove}
        bucket={[
          <skoash.Component className="bucket" message="trash" />,
        ]}
        catchableRefs={_.get(props, 'data.dropper.refs', [])}
        onCorrect={onCorrectCatch}
        onIncorrect={onIncorrectCatch}
      />

      <RevealPrompt
        ref="reveal-prompt"
        openOnStart={opts.openOnStart}
        openReveal={_.get(props, 'data.prompt.open', null)}
        closeReveal={_.get(props, 'data.prompt.close', false)}
        onOpen={onOpenReveal}
        onClose={onCloseReveal}
        list={opts.prompts}
      />
    </skoash.Screen>
  );
}
