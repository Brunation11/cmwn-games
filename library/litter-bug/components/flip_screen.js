export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="flip"
      emitOnComplete={{
        name: 'flip',
      }}
    >
      <skoash.Audio ref="vo" type="voiceOver" src="media/S_14/VO_14.1.mp3" />
      <skoash.Image ref="image-1" className="animated" src="media/S_14/img_14.1.png" />
      <p>
        Here’s another thing<br/>
        you won’t throw away:<br/>
        A great new<br/>
        I-MADE-A-DIFFERENCE
      </p>
      <skoash.Image ref="image-2" className="animated" src="media/S_14/img_14.2.png" />
    </skoash.Screen>
  );
}
