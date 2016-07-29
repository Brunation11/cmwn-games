var FlipScreen = (
  <skoash.Screen
    id="flip"
    emitOnComplete={{
      name: 'flip',
    }}
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_Finished.mp3" />
    <skoash.Image ref="frame" className="frame animated" src="media/assets/_images/S_17/IMG_17_Frame.png" />
    <skoash.Image ref="banner" className="banner animated" src="media/assets/_images/S_17/Text_17_Youfinished.png" />
    <skoash.Image ref="confetti" className="confetti animated" src="media/assets/_images/S_17/IMG_17_Confetti.png" />
    <skoash.Image ref="you" className="you animated" src="media/assets/_images/S_17/Text_17_You.png" />
  </skoash.Screen>
);

export default FlipScreen;
