export default function (props, ref, key) {
  var InfoUsingLessScreen = (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="info-using-less"
    >
      <skoash.Audio ref="start" type="voiceOver" src="media/S_15/VO_15.1.mp3"/>
      <skoash.Image src="media/S_15/img_15.1.png"/>
      <p>
        Using less<br /> adds up!
      </p>

    </skoash.Screen>
  );
  return InfoUsingLessScreen;
}
