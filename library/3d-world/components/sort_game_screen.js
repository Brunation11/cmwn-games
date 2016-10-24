import classNames from 'classnames';

import MediaCollection from 'shared/components/media_collection/0.1';

import Score from 'shared/components/score/0.1';
import Timer from 'shared/components/timer/0.1';

import Dropper from 'shared/components/dropper/0.1';
import Randomizer from 'shared/components/randomizer/0.1';
import Catch from 'shared/components/catch/0.1';
import Catchable from 'shared/components/catchable/0.1';

import Reveal from 'shared/components/reveal/0.1';

export default function (props, ref, key) {
  var closeReveal = function () {
    skoash.trigger('updateState', {
      path: 'reveal',
      data: {
        close: true,
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
      <skoash.Component className="left">
        <Score
          max={100}
          increment={10}
        >
          <div />
        </Score>
        <Timer
          countDown
          timeout={60000}
          leadingContent="TIME LEFT"
          getTime={function () {
            var timeLeft, minutesLeft, secondsLeft;
            timeLeft = this.props.timeout / 1000 - this.state.time;
            minutesLeft = Math.floor(timeLeft / 60);
            secondsLeft = timeLeft % 60;
            secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
            return `${minutesLeft}:${secondsLeft}`;
          }}
        />
      </skoash.Component>
      <skoash.Component className="main">
        <Dropper
          bin={
            <Randomizer
              bin={[
                <Catchable />,
                <Catchable />,
                <Catchable />,
                <Catchable />,
              ]}
            />
          }
        />
        <Catch
          bucket={<div />}
        />
      </skoash.Component>
      <Reveal
        openOnStart="in-this"
        openTarget="reveal"
        closeReveal={_.get(props, 'data.reveal.close', false)}
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
            ref="even-food"
            type="li"
          >
            <h3>
              Did You Know?
            </h3>
            <div>
              Even food can be 3D printed!<br/>
              While still in the experimental stages,<br/>
              NASA hopes one day to print food<br/>
              in space!
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
