import Labyrinth from 'shared/components/labyrinth/0.1';

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="labyrinth-screen"
    >
      <Labyrinth
        img=""
        map=""
      />
    </skoash.Screen>
  );
}
