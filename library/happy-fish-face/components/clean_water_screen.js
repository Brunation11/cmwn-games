var CleanWaterScreen = (
  <skoash.Screen
    ref="clean-water"
    id="clean-water"
  >
    <skoash.Audio type="background" src="media/_audio/_BKG/HFF_SX_BKG_1.mp3" />
    <skoash.Audio type="voiceOver" src="media/_audio/_S_CleanWater/HFF_VO_CleanWater.mp3" />
    <skoash.Component ref="center" className="center">
      <skoash.Component ref="group" className="group">
        <skoash.Component ref="frame" className="frame">
          <p>
            And clean water is<br /> important for<br /> humans too!
          </p>
          <skoash.Image src="media/_images/_S_CleanWater/img_5.1.png" />
        </skoash.Component>
      </skoash.Component>
    </skoash.Component>
  </skoash.Screen>
);
export default CleanWaterScreen;
