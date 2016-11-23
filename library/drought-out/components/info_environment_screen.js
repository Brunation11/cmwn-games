export default function (props, ref, key) {

    var InfoEnvironmentScreen = (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="info-environment"
      className="large-frame"
    >
      <skoash.MediaSequence>
        <skoash.Audio ref="great-job" type="voiceOver" src="media/S_8/VO_8.1.mp3"/>
        <skoash.Audio ref="lets-look" type="voiceOver" src="media/S_8/VO_8.2.mp3"/>
      </skoash.MediaSequence>
      <skoash.Component className="frame animated">
        <skoash.Image src="media/S_8/img_8.1.png"/>
        <p>
          Now let's have a look<br /> at the environment!
        </p>
        <skoash.Image src="media/S_8/img_8.2.png"/>
      </skoash.Component>
    </skoash.Screen>
  );

    return InfoEnvironmentScreen;
}
