var TakePledgeScreen = (
  <skoash.Screen
    id="take-pledge"
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/S_12/VO_12.1.mp3" />
    <skoash.Component ref="frame" className="frame">
      <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_1.png" />
      <skoash.Component ref="content-group" className="content-group">
        <img pl-id="image" className="animated" src="media/S_11/img_11.2.png" />
        <p>
          Take the Anti-Litter Pledge<br/>
          and start making the world<br/>
          a better, safer, cleaner place!
        </p>
      </skoash.Component>
    </skoash.Component>
  </skoash.Screen>
);

export default TakePledgeScreen;
