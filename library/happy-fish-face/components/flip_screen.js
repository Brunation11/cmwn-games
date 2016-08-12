var FlipScreen = (
  <skoash.Screen
    ref="flip"
    id="flip"
    className="large-frame"
  >
    <skoash.Audio type="voiceOver" src="media/_audio/_flip/HFF_VO_ThankYou.mp3" />
    <skoash.Component className="center">
      <skoash.Component className="group">
        <skoash.Component className="frame" pl-bg>
          <skoash.Image className="fish" src="media/_images/_flip/img_11.1.png" />
          <skoash.Component>
            <p>
              Let me say thank you<br /> for cleaning up<br /> with a new
            </p>
            <skoash.Component className="flip-container">
              <skoash.Image className="flip" src="media/_images/_flip/img_11.2.png" />
            </skoash.Component>
          </skoash.Component>
        </skoash.Component>
      </skoash.Component>
    </skoash.Component>
  </skoash.Screen>
);

export default FlipScreen;
