var addTranslateClass = function () {
  document.getElementById('stamp-img').className += ' TRANSLATE';
};

var removeTranslateClass = function () {
  var stampEl = document.getElementById('stamp-img');
  stampEl.className = stampEl.className.replace('TRANSLATE', '');
};


export default function (props, ref, key) {
  var InfoNoWaterScreen = (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="info-no-water"
      className="large-frame"
      onOpen={removeTranslateClass}
    >
      <skoash.MediaSequence>
        <skoash.Audio ref="vo" type="voiceOver" src="media/S_3/VO_3.1.mp3" delay={6500} onComplete={addTranslateClass}/>
        <skoash.Audio ref="stamp" type="sfx" src="media/S_3/S_3.1.mp3"/>
      </skoash.MediaSequence>
      <skoash.Image className="hidden" src="media/_Frames/FR_1.png"/>
      <skoash.Component className="frame animated">
        <p>
          When there is less rain and snow<br/>
          consistently over a period of years,<br/>
          it causes drought.
        </p>
        <skoash.Image id="stamp-img" className="animated" src="media/S_3/img_3.1.png"/>
      </skoash.Component>
    </skoash.Screen>
  );
  return InfoNoWaterScreen;
}

