import Labyrinth from 'shared/components/labyrinth/0.1';
import DPad from 'shared/components/d_pad/0.1';

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="labyrinth-screen"
    >
      <Labyrinth
        img="media/labyrinth/img.png"
        map="media/labyrinth/map.png"
        input={_.get(props, 'data.d-pad.ref')}
        startX={100}
        startY={150}
      />
      <DPad />
    </skoash.Screen>
  );
}
