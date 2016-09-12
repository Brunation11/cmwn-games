import Dropper from 'shared/components/dropper/0.1';
import Randomizer from 'shared/components/randomizer/0.1';
import Catch from 'shared/components/catch/0.1';
import Catchable from 'shared/components/catchable/0.1';

import Reveal from 'shared/components/reveal/0.1';

export default function (props, ref, key) {
  var nextReveal = function () {
  };
  var closeReveal = function () {
  };

  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="sort-game"
    >
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
      <Catch />
      <Reveal
        openOnStart="0"
        list={[
          <skoash.Component type="li">
            <div>
              In this game, you will sort items
            </div>
            <div>
              dropped from the 3D printer
            </div>
            <div>
              by the material it is made from.
            </div>
            <div className="line">
            </div>
            <div>
              Use the arrow keys to drop
            </div>
            <div>
              the items into the correct bin.
            </div>
            <button onClick={nextReveal}>
              Next
            </button>
          </skoash.Component>,
          <skoash.Component type="li">
            <div>
              Be sure to collect enough points
            </div>
            <div>
              before the timer runs out!
            </div>
            <button onClick={closeReveal}>
              Start Game
            </button>
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
