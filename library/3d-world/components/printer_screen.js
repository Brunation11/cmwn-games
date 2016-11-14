import MediaCollection from 'shared/components/media_collection/0.1';
import Target from 'shared/components/target/0.2';
import Dropzone from 'shared/components/dropzone/0.3';
import Slider from 'shared/components/slider/0.1';
import Draggable from 'shared/components/draggable/0.3';
import Reveal from 'shared/components/reveal/0.1';

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
  'cup',
  'phone',
  'piece',
  'tooth',
  'ball',
];

const targets = [
  'tire',
  'link',
  'cup',
  'phone',
  'tooth',
];

export default function (props, ref, key) {
  var startGame,
    closeReveal,
    onCorrect,
    onPrinted;

  startGame = _.noop;
  closeReveal = _.noop;

  onCorrect = function (dropped, dropzoneRef) {
    dropzoneRef.addClassName(dropped.props.message);
    skoash.trigger('updateState', {
      path: 'printed',
      data: dropped,
    });
    skoash.trigger('updateState', {
      path: 'sfx',
      data: {
        playing: 'print'
      },
    });
  };

  onPrinted = function () {
    var dropped = _.get(props, 'data.printed');
    if (dropped.props.message === _.get(props, 'data.target.object.props.name')) {
      dropped.markCorrect();
    } else {
      dropped.markIncorrect();
    }
    skoash.trigger('updateState', {
      path: 'printed',
      data: null,
    });
    skoash.trigger('updateState', {
      path: 'sfx',
      data: {
        playing: false,
      },
    });
  };

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
        src={ENVIRONMENT.MEDIA + 'SpritesAnimations/game-2-sprites.png'}
      />
      <skoash.Image
        className="hidden"
        src={ENVIRONMENT.MEDIA + 'ImageAssets/img.printer.png'}
      />
      <skoash.Image
        className="hidden"
        src={ENVIRONMENT.MEDIA + 'ImageAssets/img.leftbox.png'}
      />
      <skoash.Image
        className="hidden"
        src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.game2.brokenobj.png'}
      />
      <MediaCollection
        play={_.get(props, 'data.sfx.playing')}
      >
        <skoash.MediaSequence
          ref="print"
          silentOnStart
        >
          <skoash.Audio
            type="sfx"
            playTarget="layer1"
            src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/Printing.mp3'}
          />
          <skoash.Audio
            type="sfx"
            playTarget="layer2"
            src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/Printing.mp3'}
          />
          <skoash.Audio
            type="sfx"
            playTarget="layer3"
            src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/Printing.mp3'}
            onComplete={onPrinted}
          />
        </skoash.MediaSequence>
      </MediaCollection>
      <skoash.Component className="targets">
        <div>
          What <span>ITEM</span> can<br/>
          solve this problem?
        </div>
        <Target
          targets={[
            <skoash.Component name={targets[0]} />,
            <skoash.Component name={targets[1]} />,
            <skoash.Component name={targets[2]} />,
            <skoash.Component name={targets[3]} />,
            <skoash.Component name={targets[4]} />,
          ]}
        />
      </skoash.Component>
      <Dropzone
        dropped={_.get(props, 'data.draggable.dropped')}
        dropzones={[
          <skoash.Component answers={objects} />
        ]}
        onCorrect={onCorrect}
      />
      <skoash.Component className="bottom">
        <div>
          <span>DRAG AND DROP</span> the item onto the printer above
        </div>
        <Slider>
          <skoash.Component>
            <Draggable
              returnOnIncorrect
              stayOnCorrect={false}
              message={objects[0]}
            />
            <Draggable
              returnOnIncorrect
              stayOnCorrect={false}
              message={objects[1]}
            />
            <Draggable
              returnOnIncorrect
              stayOnCorrect={false}
              message={objects[2]}
            />
            <Draggable
              returnOnIncorrect
              stayOnCorrect={false}
              message={objects[3]}
            />
          </skoash.Component>
          <skoash.Component>
            <Draggable
              returnOnIncorrect
              stayOnCorrect={false}
              message={objects[4]}
            />
            <Draggable
              returnOnIncorrect
              stayOnCorrect={false}
              message={objects[5]}
            />
            <Draggable
              returnOnIncorrect
              stayOnCorrect={false}
              message={objects[6]}
            />
            <Draggable
              returnOnIncorrect
              stayOnCorrect={false}
              message={objects[7]}
            />
          </skoash.Component>
          <skoash.Component>
            <Draggable
              returnOnIncorrect
              stayOnCorrect={false}
              message={objects[8]}
              message="tire"
            />
            <Draggable
              returnOnIncorrect
              stayOnCorrect={false}
              message={objects[9]}
            />
            <Draggable
              returnOnIncorrect
              stayOnCorrect={false}
              message={objects[10]}
            />
            <Draggable
              returnOnIncorrect
              stayOnCorrect={false}
              message={objects[11]}
            />
          </skoash.Component>
          <skoash.Component>
            <Draggable
              returnOnIncorrect
              stayOnCorrect={false}
              message={objects[12]}
            />
            <Draggable
              returnOnIncorrect
              stayOnCorrect={false}
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
