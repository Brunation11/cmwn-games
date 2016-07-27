import AudioSequence from 'shared/components/audio_sequence/0.1'

var InfoScreen = (
  <skoash.Screen
    id="info"
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_HiThere.mp3" />
    <AudioSequence
      checkComplete={true}
    >
      <skoash.Audio ref="you" type="sfx" src="media/assets/_audio/S_HiThere/S_2.1.mp3" />
    </AudioSequence>
    <skoash.Image ref="penguin-megaphone" className="penguin-megaphone animated" src="media/assets/_images/s_2/img_s2_penguin-01.png" />
    <skoash.Image ref="spotlight" className="spotlight animated" src="media/assets/_images/s_2/img-spotlight-01.png" />
    <skoash.Image ref="speech-bubble" className='speech-bubble animated' src="media/assets/_images/s_2/img_s2_speechballoon.png" />
    <skoash.Image ref="you" className="you animated" src="media/assets/_images/s_2/text-you-01.png" />

  </skoash.Screen>
);

export default InfoScreen;

// add second animation on you
// refactor audio S_2.1 to play only after "you" has appeared