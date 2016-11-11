import Repeater from 'shared/components/repeater/0.2';
import Draggable from 'shared/components/draggable/0.3';
import Dropzone from 'shared/components/dropzone/0.3';

export default function (props, ref, key) {
  var onDrag;

  onDrag = function () {
    this.setState({
      correct: false,
      return: false,
    });
  };

  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="list"
    >
      <skoash.Image
        className="hidden"
        src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.minion.png'}
      />
      <skoash.Image
        className="hidden"
        src={ENVIRONMENT.MEDIA + 'ImageAssets/img.notepad.png'}
      />
      <skoash.Image
        className="hidden"
        src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.game3.png'}
      />
      <Repeater
        className="draggables"
        amount={13}
        item={<Draggable
          return
          returnOnIncorrect
          onDrag={onDrag}
        />}
        props={[
          {message: 'shoe'},
          {message: 'lego'},
          {message: 'dice'},
          {message: 'ball'},
          {message: 'crown'},
          {message: 'bunny'},
          {message: 'chess'},
          {message: 'helmet'},
          {message: 'bowling'},
          {message: 'cup'},
          {message: 'controller'},
          {message: 'headphones'},
          {message: 'guitar'},
        ]}
      />
      <Dropzone
        dropped={_.get(props, 'data.draggable.dropped')}
        dropzones={[
          <skoash.Component>
            <span>LIST OF ITEMS</span>
          </skoash.Component>
        ]}
      />
      <div className="words">
        <span>Drag and Drop</span><br/>
        the items to the list above.<br/>
        Choose as many as you like.
      </div>
    </skoash.Screen>
  );
}
