var FlipScreen = (
  <skoash.Screen
    id="flip"
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/flip/VO_8.1.mp3" />
    <skoash.Image ref="toilet" className="toilet" src="media/S_3/img_3.1.png" />
    <skoash.Component ref="message" className="message center inline">
        <skoash.Image ref="flip" src="media/flip/img_8.1.png" /><br />
        <p>You flushed out a brand new</p><br />
        <skoash.Image className="logo flip" src="media/flip/flip.png" />
    </skoash.Component>
  </skoash.Screen>
);

export default FlipScreen;
