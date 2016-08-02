var Step4Screen = (
  <skoash.Screen
    id="step-4"
  >
    <skoash.MediaSequence
       ref="audio-sequence"
       checkComplete={true}
    >
        <skoash.Audio ref="step" type="sfx" src="media/_audio/_Reveals/TI_RV_1.mp3" />
        <skoash.Audio ref="step-4" type="voiceOver" src="media/_audio/S_Step4/VO_Step4.mp3" />
        <skoash.Audio ref="check-the" type="voiceOver" src="media/_audio/S_Step4/VO_CheckThe.mp3" />
    </skoash.MediaSequence>
    <div className="step" pl-bg="media/_images/S_Step4/img_12.1.png" />
        <p>
            Check the faucet.<br /><br />
            Determine how your tag<br />
            will fit on your faucet.
        </p>
    <div className="faucet animated" />
  </skoash.Screen>
);

export default Step4Screen;
