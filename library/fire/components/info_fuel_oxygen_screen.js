import AudioSequence from 'shared/components/audio_sequence/0.1';

import IntervalScreen from 'shared/components/interval_screen/0.1';

export default function (props, ref, key) {
  return (
    <IntervalScreen
      {...props}
      ref={ref}
      key={key}
      id="info-fuel-oxygen"
      states={{
        'voice-over': false,
        wood: false,
        plus: false,
        o2: false,
        equal: false,
        fire: false,
      }}
    >
      <AudioSequence ref="audio-sequence">
        <skoash.Audio type="voiceOver" src="media/S_3/vo_FuelOxygenMakeItBurn.mp3" />
        <skoash.Audio ref="wood" type="sfx" src="media/S_3/S_3.2.mp3" />
        <skoash.Audio ref="plus" type="sfx" src="media/S_3/S_3.4.mp3" />
        <skoash.Audio ref="o2" type="sfx" src="media/S_3/S_3.2.mp3" />
        <skoash.Audio ref="equal" type="sfx" src="media/S_3/S_3.4.mp3" />
        <skoash.Audio ref="fire" type="sfx" src="media/S_3/S_3.3.mp3" />
      </AudioSequence>
      <skoash.Image className="animated wood" src="media/S_3/img_3.1.png" />
      <skoash.Image className="animated plus" src="media/S_3/img_3.2.png" />
      <skoash.Image className="animated o2" src="media/S_3/img_3.3.png" />
      <skoash.Image className="animated equal" src="media/S_3/img_3.4.png" />
      <skoash.Image className="animated fire" src="media/S_3/img_3.5.png" />
      <skoash.Image className="animated words" src="media/S_3/img_3.6.png" />
    </IntervalScreen>
  );
}
