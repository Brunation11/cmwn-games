var InfoLetsDustScreen = (
  <skoash.Screen
    id="info-lets-dust"
    className="large-frame"
  >
    <skoash.MediaSequence ref="media">
      <skoash.Audio ref="vo" type="voiceOver" gameClass="LETS-DUST" src="media/S_11/VO_11.1.mp3" />
      <skoash.Audio ref="count" type="voiceOver" gameClass="COUNT" src="media/S_11/S_11.2.mp3" />
      <skoash.Audio ref="engage" type="voiceOver" gameClass="ENGAGE" src="media/S_11/S_11.3.mp3" />
    </skoash.MediaSequence>
    <skoash.Image ref="frame-img" className="hidden" src="media/_Frame/Fr_1.png" />
    <div className="frame">
      <div>
        <p className="typing">LET'S DUST FOR</p>
        <p className="typing">FINGERPRINTS!</p>
      </div>
      <h3>5</h3>
      <h3>4</h3>
      <h3>3</h3>
      <h3>2</h3>
      <h3>1</h3>
      <div className="engage">
        <h2 className="typing">ENGAGE...</h2>
      </div>
    </div>
  </skoash.Screen>
);

export default InfoLetsDustScreen;
