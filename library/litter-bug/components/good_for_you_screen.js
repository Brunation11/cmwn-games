var GoodForYouScreen = (
  <skoash.Screen
    id="good-for-you"
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/S_11/VO_11.1.mp3" />
    <skoash.Component ref="frame" className="frame">
      <skoash.Image className="background" src="media/_Frames/FR_1.png" />
      <skoash.Component ref="content-group" className="content-group">
        <skoash.Image ref="image-1" className="animated" src="media/S_11/img_11.1.png" />
        <skoash.Image ref="image-2" className="animated" src="media/S_11/img_11.2.png" />
        <p className="animated">
          You learned about littering<br/>
          and showed leadership!
        </p>
      </skoash.Component>
    </skoash.Component>
  </skoash.Screen>
);

export default GoodForYouScreen;
