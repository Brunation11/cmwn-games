import MediaCollection from 'shared/components/media_collection/0.1';
import RevealPrompt from 'shared/components/reveal_prompt/0.1';
import Carousel from 'shared/components/carousel/0.1';
import Cannon from 'shared/components/cannon/0.2';
import Randomizer from 'shared/components/randomizer/0.1';
import Timer from 'shared/components/timer/0.1';
import Score from 'shared/components/score/0.1';

const CONFIG = {
  LVL: 1,
  POINTS: 100,
  TIMER: 3000,
};

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="clean-up-game-lvl-1"
    >
      <MediaCollection
        play={_.get(props, 'data.reveal.open', null)}
        onPlay={function () {
          // this.media.correct.play();

          this.updateGameState({
            path: 'reveal',
            data: {
              open: null
            }
          });
        }}
      >
        <skoash.Audio ref="complete" type="voiceOver" src="media/_assets/_sounds/_vos/YouHaveGreat.mp3" />
        <skoash.Audio ref="try-again" type="voiceOver" src="media/_assets/_sounds/_vos/LevelLost.mp3" complete />
      </MediaCollection>

      <RevealPrompt
        ref="reveal"
        openReveal={_.get(props, 'data.reveal.open', null)}
        list={[
          <skoash.Component data-ref="complete">
            <skoash.Component className="frame">
              <div className="banner" />
              <div className="banner-2" />
              <span>
                You have some great cleaning skills!<br />Keep up the good work!
              </span>
            </skoash.Component>
          </skoash.Component>,
          <skoash.Component data-ref="try-again">
            <skoash.Component className="frame">
              <div className="banner" />
              <div className="banner-2" />
              <span>
                The park is still covered with trash<br />but you still have a chance to clean<br />and beat the Litterbug!
              </span>
            </skoash.Component>
          </skoash.Component>
        ]}
      />

      <Carousel
        ref="carousel"
        completeOnStart={true}
        complete={true}
        showNum={5}
        targetIndex={2}
        selected={_.get(props, 'data.cannon.fire')}
        onSelect={function (target) {
          var score = _.get(props, 'data.score.points', 0);
          var classes = this.state.classes;
          classes[target.props['data-ref']] = 'SELECTED';

          this.setState({
            classes
          }, () => {
            setTimeout(() => {
              classes[target.props['data-ref']] = '';
            }, 1000);
          });

          if (score < CONFIG.POINTS) score += target.props.value;
          this.updateGameState({
            path: 'score',
            data: {
              points: score
            }
          });

          if (score >= CONFIG.POINTS) {
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
          }
        }}
        bin={
          <Randomizer
            ref="randomizer"
            completeOnStart={true}
            checkComplete={false}
            bin={[
              <skoash.Component className="five" data-ref="five" name="five" value={5} />,
              <skoash.Component className="ten" data-ref="ten" name="ten" value={10} />,
              <skoash.Component className="twenty" data-ref="twenty" name="twenty" value={20} />,
              <skoash.Component className="thirty" data-ref="thirty" name="thirty" value={30} />,
            ]}
          />
        }
      />

      <Cannon
        ref="cannon"
        reverseReload={true}
        showNum={4}
        bin={
          <Randomizer
            ref="randomizer"
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
            complete={_.get(props, 'data.game.complete', false)}
            onComplete={function () {
              if (_.get(props, 'data.reveal.open')) return;
              if (_.get(props, 'data.score.points', 0) < 100) {
                this.updateGameState({
                  path: 'reveal',
                  data: {
                    open: 'try-again'
                  }
                });

                this.updateGameState({
                  path: 'score',
                  data: {
                    points: 0
                  }
                })
              }
            }}
          />

          <Score
            ref="score"
            max={CONFIG.POINTS}
            correct={_.get(props, 'data.score.points', 0)}
            checkComplete={false}
            complete={_.get(props, 'data.score.points', 0) === 100}
          />
        </skoash.Component>
      </skoash.Component>
    </skoash.Screen>
  );
}
