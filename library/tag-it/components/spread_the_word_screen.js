var SpreadTheWordScreen = (
  <skoash.Screen
    id="spread-the-word"
  >
    <skoash.MediaSequence
       ref="audio-sequence"
       checkComplete={true}
    >
        <skoash.Audio ref="vo" type="voiceOver" src="media/_audio/S_SpreadTheWord/VO_NowThat.mp3" />
        <skoash.Audio ref="vo" type="voiceOver" src="media/_audio/S_SpreadTheWord/VO_GatherThe.mp3" />
    </skoash.MediaSequence>
    <skoash.Image ref="image" src="media/_images/S_SpreadTheWord/img_21.1.png" />
    <p>
        Gather the people in your house<br />
        and explain why you created<br />
        water-saver tags!
    </p>
  </skoash.Screen>
);

export default SpreadTheWordScreen;
