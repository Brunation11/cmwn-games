var Step3Screen = (
  <skoash.Screen
    id="step-3"
  >
    <skoash.MediaSequence
       ref="audio-sequence"
       checkComplete={true}
    >
        <skoash.Audio type="sfx" src="media/_audio/_Reveals/TI_RV_1.mp3" />
        <skoash.Audio type="voiceOver" src="media/_audio/S_Step3/VO_Step3.mp3" />
        <skoash.Audio type="voiceOver" src="media/_audio/S_Step3/VO_ChooseA.mp3" />
    </skoash.MediaSequence>
    <div className="step" />
    <div className="text">
        <p>
            Choose a plastic lid and cut off the rim.
        </p>
        <span>
            (The part that attaches to the body of the container.)
        </span>
    </div>
    <div className="lids animated" />
  </skoash.Screen>
);

export default Step3Screen;
