var FlipScreen = (
  <skoash.Screen
    id="flip"
  >
    <skoash.MediaSequence
       ref="audio-sequence"
       checkComplete={true}
    >
        <skoash.Audio ref="vo" type="voiceOver" src="media/_audio/S_Flip/VO_Flip.mp3" />
        <skoash.Audio ref="flip" type="sfx" src="media/_audio/_Flip/TI_Flip.mp3" />
    </skoash.MediaSequence>
    <div className="drop" />
    <p>
        Thank you for conserving water!<br />
        Every drop counts.
    </p>    
    <div className="flip animated" />
  </skoash.Screen>
);

export default FlipScreen;
