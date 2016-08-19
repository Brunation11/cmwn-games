import AudioSequence from 'shared/components/audio_sequence/0.1';

import IntervalScreen from 'shared/components/interval_screen/0.1';

export default function (props, ref, key) {
  return (
    <IntervalScreen
      {...props}
      ref={ref}
      key={key}
      id="info-chemical"
      states={{
        'voice-over': false,
        flame: false,
        equal: false,
        text: false
      }}
      interval={[2000, 1000, 700]}
    >
      <AudioSequence ref="media-sequence">
        <skoash.Audio type="voiceOver" src="media/S_2/vo_ChemicalReaction.mp3" />  
        <skoash.Audio type="sfx" src="media/S_2/S_2.2.mp3" />
        <skoash.Audio type="sfx" src="media/S_2/S_2.3.mp3" />
        <skoash.Audio type="sfx" src="media/S_2/S_2.4.mp3" />
      </AudioSequence>
      <skoash.Image className="animated" src="media/S_2/img_2.1.png" />
      <skoash.Image className="animated flame" src="media/S_2/img_2.2.png" />
      <skoash.Image className="animated equal" src="media/S_2/img_2.3.png" />
      <h2 className="animated text">
        Chemical<br />Reaction
      </h2>
    </IntervalScreen>
  );
}
