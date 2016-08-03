var InfoNeedScreen = (
  <skoash.Screen
    id="info-need"
  >
    <skoash.MediaSequence ref="media">
      <audio ref="vo" type="voiceOver" src="media/S_12/VO_12.1.mp3" pl-delay="1s" />
      <audio ref="lotion" type="voiceOver" src="media/S_12/VO_12.2.mp3" />
      <audio ref="tape" type="voiceOver" src="media/S_12/VO_12.3.mp3" />
      <audio ref="powder" type="voiceOver" src="media/S_12/VO_12.4.mp3" />
      <audio ref="brush" type="voiceOver" src="media/S_12/VO_12.5.mp3" />
      <audio ref="paper" type="voiceOver" src="media/S_12/VO_12.6.mp3" />
      <audio ref="glass" type="voiceOver" src="media/S_12/VO_12.7.mp3" />
    </skoash.MediaSequence>
    <skoash.Image ref="frame-img" className="hidden" src="media/_Frame/Fr_1.png" />
    <skoash.Component ref="frame" className="frame">
      <skoash.Image ref="title" className="title animated" src="media/S_12/img_12.1.png" />
      <div className="illustration">
        <div className="animated" pl-bg="media/S_12/img_12.2.png"></div>
        <div className="animated" pl-bg="media/S_12/img_12.2.png"></div>
        <div className="animated" pl-bg="media/S_12/img_12.2.png"></div>
        <div className="animated" pl-bg="media/S_12/img_12.2.png"></div>
        <div className="animated" pl-bg="media/S_12/img_12.2.png"></div>
        <div className="animated" pl-bg="media/S_12/img_12.2.png"></div>
      </div>
      <ul>
        <li>Hand lotion</li>
        <li>Clear tape</li>
        <li>Powder</li>
        <li>Small brush <span>(like a paintbrush or makeup brush)</span></li>
        <li>Black construction paper</li>
        <li>Magnifying glass</li>
      </ul>
    </skoash.Component>
  </skoash.Screen>
);

export default InfoNeedScreen;
