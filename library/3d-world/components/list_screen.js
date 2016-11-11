import Repeater from 'shared/components/repeater/0.2';
import Draggable from 'shared/components/draggable/0.3';
import Dropzone from 'shared/components/dropzone/0.3';

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="list"
    >
      <Repeater
        className="draggables"
        amount={13}
        item={<Draggable />}
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
      />
      <div className="words">
        <span>Drag and Drop</span><br/>
        the items to the list above.<br/>
        Choose as many as you like.
      </div>
    </skoash.Screen>
  );
}
