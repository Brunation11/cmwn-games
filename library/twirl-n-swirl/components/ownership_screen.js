var OwnershipScreen = (
  <skoash.Screen
    id="ownership"
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/S_7/VO_7.1.mp3" />
    <skoash.Image ref="toilet" className="toilet" src="media/S_3/img_3.1.png" />
    <skoash.Component ref="message" className="message center inline">
      <p>
        Now that you know how<br />
        harmful these things can be,<br />
        make a difference and be a
      </p>
      <skoash.Image ref="flusher" src="media/S_7/img_7.1.png" />
    </skoash.Component>
  </skoash.Screen>
);

export default OwnershipScreen;
