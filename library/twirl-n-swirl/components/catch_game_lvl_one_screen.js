import MediaCollection from 'shared/components/media_collection/0.1';
import RevealPrompt from 'shared/components/reveal_prompt/0.1';
import Score from 'shared/components/score/0.1';
import Catchable from 'shared/components/catchable/0.1';
import Dropper from 'shared/components/dropper/0.1';
import Catcher from 'shared/components/catcher/0.1';
import Randomizer from 'shared/components/randomizer/0.1';
import Timer from 'shared/components/timer/0.1';

const opts = {
  id: 'catch-game-lvl-1',
  level: 1,
  points: 100,
  timeout: 30000000000,
  dropTimeout: 1000,
  openOnStart: 'instructions',
  catchableSpeed: 4000,
  rows: 3,
  bin: [
    {
      className: 'floss',
      message: 'trash'
    },
    {
      className: 'medecine',
      message: 'trash'
    },
    {
      className: 'diaper',
      message: 'trash'
    },
    {
      className: 'bandaid',
      message: 'trash'
    },
    {
      className: 'oil',
      message: 'trash'
    },
    {
      className: 'gum',
      message: 'trash'
    }
  ]
};

export default function (props, ref, key) {
  var bin = [];
  for (let i = 0; i < opts.bin.length; i++) {
    for (let j = 0; j < opts.rows; j++) {
      bin.push(
        <Catchable
          className={`catchable ${opts.bin[i].className}`}
          message={opts.bin[i].message}
          style={{
            top: 400 * (j + .4) / opts.rows,
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
      <skoash.Audio type="voiceOver" src="media/audio/CatchtoWin.mp3" />

      <MediaCollection
        play={_.get(props, 'data.sfx.play', null)}
        onPlay={function () {
          this.updateGameState({
            path: 'sfx',
            data: {
              playing: null,
            }
          });
        }}
      >
        <skoash.MediaSequence ref="correct" silentOnStart >
          <skoash.Audio ref="catch" type="sfx" src="media/audio/basketCatch.mp3" />
          <skoash.Audio ref="earn" type="sfx" src="media/audio/GainPoints.mp3" />
        </skoash.MediaSequence>
        <skoash.MediaSequence ref="incorrect" silentOnStart >
          <skoash.Audio ref="catch" type="sfx" src="media/audio/basketCatch.mp3" />
          <skoash.Audio ref="lose" type="sfx" src="media/audio/LoosePoints.mp3" />
        </skoash.MediaSequence>
      </MediaCollection>

      <Score
        ref="score"
        className="score"
        max={opts.points}
        correct={_.get(props, 'data.score.points', 0)}
        checkComplete={false}
        complete={_.get(props, 'data.game.complete', false)}
        onComplete={function () {
          if (_.get(props, 'data.reveal.open') === 'level-complete') return;
          this.updateGameState({
            path: 'reveal',
            data: {
              open: 'try-again'
            }
          });
        }}
      />

      <Timer
        ref="timer"
        countDown={true}
        timeout={opts.timeout}
        getTime={function () {
          var timeLeft, minutesLeft, secondsLeft;
          timeLeft = this.props.timeout / 1000 - this.state.time;
          minutesLeft = Math.floor(timeLeft / 60);
          minutesLeft = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
          secondsLeft = timeLeft % 60;
          secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
          return `${minutesLeft}:${secondsLeft}`;
        }}
        stop={_.get(props, 'data.game.complete', false)}
        complete={_.get(props, 'data.game.complete', false)}
        checkComplete={_.get(props, 'data.game.start', false)}
        restart={_.get(props, 'data.game.start', false)}
        onComplete={function () {
          if (_.get(props, 'data.reveal.open') === 'level-complete') return;

          this.updateGameState({
            path: 'reveal',
            data: {
              open: 'try-again'
            }
          });
        }}
      />

      <RevealPrompt
        ref="reveal-prompt"
        // openOnStart={opts.openOnStart}
        onOpen={function () {
          this.updateGameState({
            path: 'game',
            data: {
              stop: true,
              start: false
            }
          });
        }}
        onClose={function () {
          this.updateGameState({
            path: 'game',
            data: {
              stop: false,
              start: true
            }
          });
          this.updateGameState({
            path: 'reveal',
            data: {
              open: null
            }
          });
        }}
        openReveal={_.get(props, 'data.reveal.open', null)}
        list={[
          <skoash.Component data-ref="instructions">
            <skoash.Component className="frame">
              <span>
                Catch the pollutants by<br />using the arrow keys or<br />swiping the touch screen.
              </span>
              <span>
                Be sure not to catch any<br />animals or plants.
              </span>
            </skoash.Component>
          </skoash.Component>,
          <skoash.Component data-ref="level-complete">
            <skoash.Component className="frame">
              <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_1.png" />
              <span>
                Good Job! You are on the way<br />to saving fish lives!
              </span>
            </skoash.Component>
          </skoash.Component>
        ]}
      />

      <Dropper
        leftBound={70}
        rightBound={820}
        on={_.get(props, 'data.game.start', false)}
        start={_.get(props, 'data.game.start', false)}
        stop={_.get(props, 'data.game.complete', false)}
        prepClasses={['ready', 'go']}
        prepTimeout={opts.dropTimeout}
        onAddClassName={function (className) {
          if (className === 'go') return;
          this.updateGameState({
            path: 'sfx',
            data: {
              play: 'print'
            }
          });
        }}
        onTransitionEnd={function (item) {
          if (_.get(props, 'data.reveal.open') || props.gameState.paused ||
            item.props.message !== 'trash' || !item.state.canCatch) return;
          this.updateGameState({
            path: 'score',
            data: {
              points: _.get(props, 'data.score.points', 0) - 1,
            },
          });
          this.updateGameState({
            path: 'sfx',
            data: {
              play: 'incorrect',
            }
          });
        }}
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
        onMove={function (e) {
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
        }}
        bucket={[
          <skoash.Component className="bucket" message="trash" />,
        ]}
        catchableRefs={_.get(props, 'data.dropper.refs', [])}
        onCorrect={function (bucketRef) {
          bucketRef.addClassName('correct');
          setTimeout(() => {
            bucketRef.removeClassName('correct');
          }, 1000);
          this.updateGameState({
            path: 'score',
            data: {
              points: _.get(props, 'data.score.points', 0) + 1,
            },
          });
        }}
        onIncorrect={function (bucketRef) {
          bucketRef.addClassName('incorrect');
          setTimeout(() => {
            bucketRef.removeClassName('incorrect');
          }, 1000);
          this.updateGameState({
            path: 'score',
            data: {
              points: _.get(props, 'data.score.points', 0) - 1,
            },
          });
        }}
      />
    </skoash.Screen>
  );
}
