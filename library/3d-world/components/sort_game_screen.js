import classNames from 'classnames';

import MediaCollection from 'shared/components/media_collection/0.1';

import Score from 'shared/components/score/0.1';
import Timer from 'shared/components/timer/0.1';

import Dropper from 'shared/components/dropper/0.1';
import Randomizer from 'shared/components/randomizer/0.1';
import Catch from 'shared/components/catch/0.2';
import Catchable from 'shared/components/catchable/0.1';

import Reveal from 'shared/components/reveal/0.1';

export default function (props, ref, key) {
  var closeReveal, onCloseReveal;

  closeReveal = function () {
    skoash.trigger('updateState', {
      path: 'reveal',
      data: {
        close: true,
      }
    });
  };

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
      data: false,
    });
    this.updateGameState({
      path: 'score',
      data: {
        correct: 0,
        incorrect: 0,
      }
    });
  };

  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="sort-game"
    >
      <skoash.Image
        className="hidden"
        src={ENVIRONMENT.MEDIA + 'ImageAssets/thick.border.png'}
      />
      <MediaCollection
        play={_.get(props, 'data.reveal.open')}
      >
        <skoash.MediaSequence
          ref="in-this"
          silentOnStart
        >
          <skoash.Audio
            type="voiceOver"
            completeTarget="in-this"
            src={ENVIRONMENT.MEDIA + 'SoundAssets/vos/VO_in_this.mp3'}
          />
          <skoash.Audio
            type="voiceOver"
            src={ENVIRONMENT.MEDIA + 'SoundAssets/vos/VO_be_sure.mp3'}
          />
        </skoash.MediaSequence>
      </MediaCollection>
      <MediaCollection
        play={_.get(props, 'data.sfx.playing')}
      >
        <skoash.Audio
          type="voiceOver"
          completeTarget="sfx"
          ref="print"
          src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/print_item.mp3'}
          sprite={[0, 500]}
        />
      </MediaCollection>
      <skoash.Component className="left">
        <Score
          max={100}
          increment={10}
          correct={_.get(props, 'data.score.correct', 0)}
          incorrect={_.get(props, 'data.score.incorrect', 0)}
          onComplete={function () {
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
          }}
        >
          <div />
        </Score>
        <Timer
          countDown
          timeout={180000}
          leadingContent="TIME LEFT"
          getTime={function () {
            var timeLeft, minutesLeft, secondsLeft;
            timeLeft = this.props.timeout / 1000 - this.state.time;
            minutesLeft = Math.floor(timeLeft / 60);
            secondsLeft = timeLeft % 60;
            secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
            return `${minutesLeft}:${secondsLeft}`;
          }}
          stop={_.get(props, 'data.game.complete', false)}
          complete={_.get(props, 'data.game.complete', false)}
          checkComplete={_.get(props, 'data.game.start', false)}
          restart={_.get(props, 'data.game.start', false)}
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
          leftBound={70}
          rightBound={820}
          on={_.get(props, 'data.game.start', false)}
          stop={_.get(props, 'data.game.complete', false)}
          propClasses={['starting', 'ready', 'set', 'go']}
          onAddClassName={function (className) {
            if (className === 'go') return;
            this.updateGameState({
              path: 'sfx',
              data: {
                playing: 'print'
              }
            });
          }}
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
                  className="cup"
                  message="plastic"
                />,
                <Catchable
                  className="box"
                  message="other"
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
                  className="lego"
                  message="plastic"
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
        <Catch
          bucket={[
            <skoash.Component className="plastic" message="plastic" />,
            <skoash.Component className="metal" message="metal" />,
            <skoash.Component className="other" message="other" />,
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
                correct: _.get(props, 'data.score.correct', 0) + 1,
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
                incorrect: _.get(props, 'data.score.incorrect', 0) + 1,
              },
            });
          }}
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
        openOnStart="in-this"
        openTarget="reveal"
        openReveal={_.get(props, 'data.openReveal', false)}
        closeReveal={_.get(props, 'data.reveal.close', false)}
        onClose={onCloseReveal}
        list={[
          <skoash.Component ref="in-this" type="li">
            <skoash.Image
              className="frame"
              src={ENVIRONMENT.MEDIA + 'Frames/ins.green.frame.png'}
            />
            <skoash.Image
              className="balloon"
              src={ENVIRONMENT.MEDIA + 'ImageAssets/img.quit.png'}
            />
            <skoash.Image
              className="bins"
              src={ENVIRONMENT.MEDIA + 'ImageAssets/ins.bins.png'}
            />
            <skoash.Image
              className="hidden"
              src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.minion.png'}
            />
            <div
              className={classNames('words', 'in-this-game', {
                show: !_.get(props, 'data.in-this.complete', false)
              })}
            >
              <div>
                In this game, you will sort items
              </div>
              <div>
                dropped from the 3D printer
              </div>
              <div>
                by the material it is made from.
              </div>
              <div className="line" />
              <div>
                Slide the printer head to
              </div>
              <div>
                drop items into the correct bin.
              </div>
            </div>
            <div
              className={classNames('words', 'be-sure', {
                show: _.get(props, 'data.in-this.complete', false)
              })}
            >
              <div>
                Be sure to collect enough points
              </div>
              <div>
                before the timer runs out!
              </div>
              <button onClick={closeReveal}>
                Start Game
              </button>
            </div>
          </skoash.Component>,
          <skoash.Component
            ref="level-up"
            type="li"
          >
            <skoash.Image
              className="minion"
              src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.minion.png'}
            />
            <h3>
              LEVEL UP
            </h3>
            <h4>
              Did You Know?
            </h4>
            <div>
              Even food can be 3D printed!<br/>
              While still in the experimental stages,<br/>
              NASA hopes one day<br/>
              to print food in space!
            </div>
          </skoash.Component>,
          <skoash.Component
            ref="many-materials"
            type="li"
          >
            <div>
              Wow, there are many materials you can use
            </div>
            <div>
              to make things with a 3D printer!
            </div>
            <div>
              The most common are plastic and metal,
            </div>
            <div>
              but other materials can be used.
            </div>
          </skoash.Component>,
          <skoash.Component
            ref="environment"
            type="li"
          >
            <h3>
              Did You Know?
            </h3>
            <div>
              3D printing can be better<br/>
              for the environment than standard<br/>
              manufacturing, because there is<br/>
              much less waste!
            </div>
          </skoash.Component>,
          <skoash.Component
            ref="try-again"
            type="li"
          >
            <div>
              You didn\’t win this time —<br/>
              but don\’t worry, you have another chance!
            </div>
            <button onClick={closeReveal}>
              Back to Game
            </button>
          </skoash.Component>,
          <skoash.Component
            ref="congratulations"
            type="li"
          >
            <div>
              CONGRATULATIONS!
            </div>
            <div>
              YOU’VE
            </div>
            <div>
              WON
            </div>
            <div>
              THE
            </div>
            <div>
              GAME
            </div>
          </skoash.Component>
        ]}
      />
    </skoash.Screen>
  );
}
