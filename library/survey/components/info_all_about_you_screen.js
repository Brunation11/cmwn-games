var InfoScreen = (
  <skoash.Screen
    id="info-all-about-you"
  >
    <skoash.Image ref="penguin-megaphone" className="penguin-megaphone animated" src="media/assets/_images/s_2/img_s2_penguin-01.png" />
    <skoash.Image ref="spotlight" className="spotlight animated" src="media/assets/_images/s_2/img-spotlight-01.png" />
    <skoash.Image ref="speech-bubble" className='speech-bubble animated' src="media/assets/_images/s_2/img_s2_speechballoon.png" />
    <skoash.Image ref="you" className="you animated" src="media/assets/_images/s_2/text-you-01.png" />
    <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/S_HiThere/S_2.1.mp3" />
  </skoash.Screen>
);

export default InfoScreen;

// add vo
// add second animation on you
// refactor audio S_2.1 to play only after "you" has appeared
// refactor animation of speech bubble
// set speech bubble to appear after vo
// set you to appear after speech bubble