var NotToWasteScreen = (
  <skoash.Screen
    id="not-to-waste"
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/_audio/S_NotToWaste/VO_NotToWaste.mp3" />
    <skoash.Component ref="not-to-waste" className="not-to-waste">
        <skoash.Image className="animated" src="media/_images/S_Precious/img_2.1.png" />
        <div className="text">
        <p>
            We know it's<br /> 
            important not to waste it…<br /> 
            but it's easy to forget.<br /><br />
            That's where you come in!
          </p>
        </div>
    </skoash.Component>
  </skoash.Screen>
);

export default NotToWasteScreen;
