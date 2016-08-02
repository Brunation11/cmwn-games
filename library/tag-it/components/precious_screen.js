var PreciousScreen = (
  <skoash.Screen
    id="precious"
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/_audio/S_Precious/VO_Precious.mp3" />
    <skoash.Component ref="precious" className="precious">
        <skoash.Image ref="img-1" className="animated" src="media/_images/S_Precious/img_2.1.png" />
        <div className="text">
            <p>
                Water is one of <br /> 
                the world's most precious<br /> 
                limited resources!
            </p>
        </div>
    </skoash.Component>
  </skoash.Screen>
);

export default PreciousScreen;
