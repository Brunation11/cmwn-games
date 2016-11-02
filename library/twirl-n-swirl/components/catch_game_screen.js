import MediaCollection from 'shared/components/media_collection/0.1';
import RevealPrompt from 'shared/components/reveal_prompt/0.1';
import Score from 'shared/components/score/0.1';
import Catcher from 'shared/components/catch/0.2';
import Timer from 'shared/components/timer/0.1';

export default function (props, ref, key) {
  var increaseScore = function () {
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

  var decreaseScore = function () {
    var score = _.get(props, 'data.score.correct', 0);
    score -= 10;
    this.updateGameState({
      path: 'score',
      data: {
        correct: score
      }
    });
  };

  var updateLevel = function () {
    var reveal, level = _.get(props, 'data.level.current', 1);

    if (_.get(props, 'data.level.complete')) {
      reveal = `lvl-${level}-complete`;
      level = level + 1;
    } else {
      reveal = 'try-again';
      level = _.get(props, 'data.level.current', 1) - 1;
    }

    this.updateGameState({
      path: 'revealprompt',
      data: {
        open: reveal
      }
    });

    this.updateGameState({
      path: 'level',
      data: {
        current: level
      }
    });

    this.updateGameState({
      path: 'score',
      data: {
        correct: 0
      }
    });
  };

  var completeLevel = function () {
    this.updateGameState({
      path: 'level',
      data: {
        complete: true
      }
    });
  };

  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="catch-game"
      complete={false}
      startDelay={500}
    >

      <MediaCollection
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
        max={50}
        correct={_.get(props, 'data.score.correct', 0)}
        checkComplete={false}
        complete={_.get(props, 'data.level.current') === 5 && _.get(props, 'data.level.complete')}
      />

      <Timer
        ref="timer"
        countDown={true}
        timeout={30000}
        onComplete={function () {
          updateLevel.call(this);
        }}
      />

      <Catcher
        ref="catcher"
        speed={4000}
        onCorrect={function () {
          increaseScore.call(this);

          this.updateGameState({
            path: 'reveal',
            data: {
              open: 'correct'
            }
          });
        }}
        onIncorrect={function () {
          decreaseScore.call(this);

          this.updateGameState({
            path: 'reveal',
            data: {
              open: 'incorrect'
            }
          });
        }}
        pipes={['left', 'center', 'right']}
        catchables={[
          <skoash.Component className="floss">
            <h1>+ 5</h1>
            <h1>- 10</h1>
          </skoash.Component>,
          <skoash.Component className="medicine">
            <h1>+ 5</h1>
            <h1>- 10</h1>
          </skoash.Component>,
          <skoash.Component className="diaper">
            <h1>+ 5</h1>
            <h1>- 10</h1>
          </skoash.Component>,
          <skoash.Component className="bandaid">
            <h1>+ 5</h1>
            <h1>- 10</h1>
          </skoash.Component>,
          <skoash.Component className="oil">
            <h1>+ 5</h1>
            <h1>- 10</h1>
          </skoash.Component>,
          <skoash.Component className="gum">
            <h1>+ 5</h1>
            <h1>- 10</h1>
          </skoash.Component>
        ]}
      />

      <RevealPrompt
        ref="reveal-prompt"
        openReveal={_.get(props, 'data.revealprompt.open', null)}
        list={[
          <skoash.Component data-ref="lvl-1-complete">
            <skoash.Component className="frame">
              <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_1.png" />
              <span>
                Good Job! You are on the way<br />to saving fish lives!
              </span>
            </skoash.Component>
          </skoash.Component>,
          <skoash.Component data-ref="lvl-2-complete">
            <skoash.Component className="frame">
              <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_1.png" />
              <span>
                You are getting good at<br />identifying things that are<br />harmful for the environment!
              </span>
            </skoash.Component>
          </skoash.Component>,
          <skoash.Component data-ref="lvl-3-complete">
            <skoash.Component className="frame">
              <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_1.png" />
              <span>
                You're halfway there! Thanks for<br />being a responsible flusher!
              </span>
            </skoash.Component>
          </skoash.Component>,
          <skoash.Component data-ref="lvl-4-complete">
            <skoash.Component className="frame">
              <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_1.png" />
              <span>
                You're becoming an<br />expert Fish Saver!
              </span>
            </skoash.Component>
          </skoash.Component>,
          <skoash.Component data-ref="lvl-5-complete">
            <skoash.Component className="frame">
              <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_1.png" />
              <span>
                You've saved the fish!
              </span>
            </skoash.Component>
          </skoash.Component>,
          <skoash.Component className="try-again" data-ref="try-again">
            <skoash.Component className="frame">
              <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_1.png" />
              <span>
                The water is polluted<br />and the fish are sad!<br />But you have another chance<br />to save the day and clean their water.
              </span>
            </skoash.Component>
          </skoash.Component>,
        ]}
      />
    </skoash.Screen>
  );
}
