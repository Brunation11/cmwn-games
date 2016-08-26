export default function (props, ref, key) {
  var className = null;
  var state = skoash.trigger('getState');
  if (state.currentScreenIndex === 25) {
    className = 'STAY';
  }
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      className={className}
      id="select-paint"
    >
      <skoash.MediaSequence
         ref="audio-sequence"
         checkComplete={true}
       >
          <skoash.Audio ref="brush" type="sfx" src="media/_audio/_Reveals/TI_RV_6.mp3" />
          <skoash.Audio ref="select" type="voiceOver" src="media/_audio/S_SelectPaint/VO_SelectYour.mp3" />
      </skoash.MediaSequence>
      <p className="text">
          Select your<br />
          nail polish, markers or<br />
          acrylic paint.
      </p>
      <skoash.Image ref="image" className="animated" src="media/_images/S_SelectPaint/img_18.1.png" />
    </skoash.Screen>
  );
}

