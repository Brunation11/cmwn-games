import Target from 'shared/components/target/0.1';
import Dropzone from 'shared/components/dropzone/0.3';
import Slider from 'shared/components/slider/0.1';
import Draggable from 'shared/components/draggable/0.3';
import Reveal from 'shared/components/reveal/0.1';

export default function (props, ref, key) {
  var startGame = function () {
  };
  var closeReveal = function () {
  };

  const objects = [
    'umbrella',
    'glasses',
    'tire',
    'shovel',
    'link',
    'button',
    'boots',
    'gloves',
    'whistle',
    'fan',
    'cup',
    'piece',
    'tooth',
    'ball',
  ];

  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="printer"
    >
      <skoash.Image
        className="hidden"
        src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.game2.carouselarrow.png'}
      />
      <skoash.Image
        className="hidden"
        src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.game2.png'}
      />
      <Target
        targets={[
          <skoash.Component />
        ]}
      />
      <Dropzone
        dropped={_.get(props, 'data.draggable.dropped')}
        dropzones={[
          <skoash.Component answers="tire" />
        ]}
      />
      <skoash.Component className="bottom">
        <div>
          <span>DRAG AND DROP</span> the item onto the printer above
        </div>
        <Slider>
          <skoash.Component>
            <Draggable
              returnOnIncorrect
              message={objects[0]}
            />
            <Draggable
              returnOnIncorrect
              message={objects[1]}
            />
            <Draggable
              returnOnIncorrect
              message={objects[2]}
            />
            <Draggable
              returnOnIncorrect
              message={objects[3]}
            />
          </skoash.Component>
          <skoash.Component>
            <Draggable
              returnOnIncorrect
              message={objects[4]}
            />
            <Draggable
              returnOnIncorrect
              message={objects[5]}
            />
            <Draggable
              returnOnIncorrect
              message={objects[6]}
            />
            <Draggable
              returnOnIncorrect
              message={objects[7]}
            />
          </skoash.Component>
          <skoash.Component>
            <Draggable
              returnOnIncorrect
              message={objects[8]}
              message="tire"
            />
            <Draggable
              returnOnIncorrect
              message={objects[9]}
            />
            <Draggable
              returnOnIncorrect
              message={objects[10]}
            />
            <Draggable
              returnOnIncorrect
              message={objects[11]}
            />
          </skoash.Component>
          <skoash.Component>
            <Draggable
              returnOnIncorrect
              message={objects[12]}
            />
            <Draggable
              returnOnIncorrect
              message={objects[13]}
            />
          </skoash.Component>
        </Slider>
      </skoash.Component>
      <Reveal
        list={[
          <skoash.Component
            type="li"
            data-ref="instructions"
          >
            <h3>
              Instructions
            </h3>
            <div>
              <span>DRAG</span> the item onto the<br/>
              3D printer that is the solution<br/>
              for each situation.
            </div>
            <button onClick={startGame}>
              Start Game
            </button>
          </skoash.Component>,
          <skoash.Component
            type="li"
            data-ref="drag-it-here"
          >
            <div>
              Drag it here.<br/>
              Press anywhere on the screen<br/>
              to continue.
            </div>
          </skoash.Component>,
          <skoash.Component type="li">
            <h3>
              GREAT JOB!
            </h3>
            <div>
              Let’s see if you can<br/>
              figure out this next one!
            </div>
            <button onClick={closeReveal}>
              Continue
            </button>
          </skoash.Component>,
          <skoash.Component type="li">
            <h3>
              YOU HAVE AMAZING<br/>
              PROBLEM-SOLVING<br/>
              SKILLS!
            </h3>
            <div>
              But this one might be harder…
            </div>
            <button onClick={closeReveal}>
              Continue
            </button>
          </skoash.Component>,
          <skoash.Component type="li">
            <h3>
              EXCELLENT<br/>
              WORK!
            </h3>
            <div>
              Can you solve this next one?
            </div>
            <button onClick={closeReveal}>
              Continue
            </button>
          </skoash.Component>,
          <skoash.Component type="li">
            <h3>
              YOU’VE DONE<br/>
              IT AGAIN!
            </h3>
            <div>
              Just one more to go!
            </div>
            <button onClick={closeReveal}>
              Continue
            </button>
          </skoash.Component>,
          <skoash.Component
            type="li"
            data-ref="try-again"
          >
            <h3>
              TRY<br/>
              AGAIN
            </h3>
            <button onClick={startGame}>
              Start Game
            </button>
          </skoash.Component>,
        ]}
      />
    </skoash.Screen>
  );
}
