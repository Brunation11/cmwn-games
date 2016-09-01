export default function (props, ref, key) {

  var InfoNeedWaterScreen = (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="info-need-water"
      className="small-frame"
    >
      <div className="frame animated">
        <p>
          Humans, animals and<br /> plants need<br /> water to live!
        </p>
      </div>
      <skoash.Audio ref="start" type="voiceOver" src="media/S_5/VO_5.1.mp3"/>

    </skoash.Screen>
  );

  return InfoNeedWaterScreen;
}
