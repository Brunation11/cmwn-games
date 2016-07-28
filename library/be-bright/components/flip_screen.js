var FlipScreen = (
  <skoash.Screen
    id="flip"
    emitOnComplete={{
      name: 'flip',
    }}
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/S_10/VO_10.1.mp3" />
    <skoash.Audio ref="start" type="sfx" src="media/S_10/S_10.2.mp3" delay={4000} />
    <skoash.Component ref="copy" className="copy">
      <span>
        Good Job!<br/>
        Be a super Light Saver hero<br/>
        and
      </span>
      <skoash.Image
        ref="flip-img"
        className="inline animated"
        src="media/S_10/img_10.1.png"
      />
      <span>
        that switch!
      </span>
    </skoash.Component>
    <skoash.Image ref="stamp-img" className="stamp animated" src="media/S_10/img_10.2.png" />
  </skoash.Screen>
);

export default FlipScreen;
