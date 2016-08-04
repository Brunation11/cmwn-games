var onComplete = function () {
  document.getElementById('stamp-img').className += ' TRANSLATE';
};


var TitleScreen = (
  <skoash.Screen
    id="info-no-water"
    className="large-frame"
  >
    <skoash.MediaSequence>
      <skoash.Audio ref="vo" type="voiceOver" src="media/S_3/VO_3.1.mp3" delay={6500} onComplete={onComplete}/>
      <skoash.Audio ref="stamp" type="sfx" src="media/S_3/S_3.1.mp3" />
    </skoash.MediaSequence>
    <skoash.Image className="hidden" src="media/_Frames/FR_1.png" />
    <skoash.Component className="frame animated">
      <p>
        When there is less rain and snow<br/>
        consistently over a period of years,<br/>
        it causes drought.
      </p>
      <skoash.Image id="stamp-img" className="animated" src="media/S_3/img_3.1.png" />
    </skoash.Component>
  </skoash.Screen>
);

export default TitleScreen;
