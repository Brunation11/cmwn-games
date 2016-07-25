import AudioSequence from 'shared/components/audio_sequence/0.1';

var AudioScreen = (
  <skoash.Screen
    id="audio"
  >
    <AudioSequence ref="audio-sequence">
      <skoash.Audio type="voiceOver" src="media/S_3/VO_3.1.mp3" />
      <skoash.Audio type="voiceOver" src="media/S_3/VO_3.2.mp3" />
      <skoash.Audio type="voiceOver" src="media/S_3/VO_3.3.mp3" />
    </AudioSequence>
  </skoash.Screen>
);

export default AudioScreen;
