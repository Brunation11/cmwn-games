export default function (props, ref, key) {
  var className = null;
  var state = skoash.trigger('getState');
  if (state.currentScreenIndex === 27) {
    className = 'STAY';
  }
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      className={className}
      id="step-9"
    >
      <skoash.MediaSequence
         ref="audio-sequence"
         checkComplete={true}
       >
          <skoash.Audio type="sfx" src="media/_audio/_Reveals/TI_RV_1.mp3" />
          <skoash.Audio type="voiceOver" src="media/_audio/S_Step9/VO_Step9.mp3" />
          <skoash.Audio ref="go" type="voiceOver" src="media/_audio/S_Step9/VO_GoOver.mp3" />
      </skoash.MediaSequence>
      <div className="step animated" />
      <p className="text">
          Go over your guide<br />
          with nail polish,<br />
          paint or markers.<br /><br />
          Add fun designs!
      </p>
      <div className="lid" />
    </skoash.Screen>
  );
}

