export default function (props, ref, key) {
  var InfoEnvironmentEffectsScreen = (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="info-environment-effects"
      className="large-frame"
    >
      <skoash.Audio ref="start" type="voiceOver" src="media/S_9/VO_9.1.mp3"/>
      <skoash.Component className="frame animated">
        <p>
          Drought can have<br /> severe effects on<br /> the environment.
        </p>
        <skoash.Image src="media/S_9/img_9.1.png"/>
      </skoash.Component>
    </skoash.Screen>
  );

  return InfoEnvironmentEffectsScreen;
}
