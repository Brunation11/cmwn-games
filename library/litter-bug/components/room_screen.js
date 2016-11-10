export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="room"
    >
      <skoash.Audio ref="vo" type="voiceOver" src="media/S_4/VO_4.1.mp3" />
      <skoash.Audio ref="button" complete type="sfx" src="media/S_4/VO_4.2.mp3" />
      <skoash.Image ref="image-1" className="animated" src="media/S_4/img_4.1.png" />
      <skoash.Image ref="image-2" className="animated" src="media/S_4/img_4.2.png" />
    </skoash.Screen>
  );
}
