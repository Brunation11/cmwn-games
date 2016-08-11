var WaterPollutionScreen = (
  <skoash.Screen
    ref="water-pollution"
    id="water-pollution"
  >
    <skoash.Audio type="voiceOver" src="media/_audio/_S_WaterPollution/HFF_VO_WaterPollution.mp3" />
    <skoash.Component className="center">
      <skoash.Component className="group">
        <skoash.Component className="frame" pl-bg>
          <skoash.Image className="words" src="media/_images/_S_WaterPollution/img_3.1.png" />
          <skoash.Image className="fish" src="media/_images/_S_WaterPollution/img_3.2.png" />
        </skoash.Component>
      <div className="bubbles">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </skoash.Component>
    </skoash.Component>
  </skoash.Screen>
);

export default WaterPollutionScreen;
