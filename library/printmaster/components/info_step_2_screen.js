var InfoStep2Screen = (
  <skoash.Screen
    id="info-step-2"
    className="large-frame"
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/S_14/VO_14.1.mp3" />
    <skoash.Image ref="frame-img" className="hidden" src="media/_Frame/Fr_1.png" />
    <skoash.Component className="frame">
      <skoash.Image ref="title" className="title animated" src="media/S_14/img_14.1.png" />
      <p>
        Press your fingertips onto a hard surface,<br/>
        like a kitchen counter, bathroom sink,<br/>
        or dinner plate.
      </p>
      <skoash.Image ref="illustration" className="illustration animated" src="media/S_14/img_14.2.gif" />
    </skoash.Component>
  </skoash.Screen>
);

export default InfoStep2Screen;
