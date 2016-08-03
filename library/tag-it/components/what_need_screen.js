var WhatNeedScreen = (
  <skoash.Screen
    id="what-need"
  >
    <skoash.MediaSequence
       ref="vo"
       checkComplete={true}
    >
        <skoash.Audio ref="what-need" type="voiceOver" src="media/_audio/S_WhatNeed/VO_WhatNeed.mp3" />
        <skoash.Audio ref="lids" type="voiceOver" src="media/_audio/S_WhatNeed/VO_Lids.mp3" />
        <skoash.Audio ref="scissors" type="voiceOver" src="media/_audio/S_WhatNeed/VO_Scissors.mp3" />
        <skoash.Audio ref="markers" type="voiceOver" src="media/_audio/S_WhatNeed/VO_Markers.mp3" />
        <skoash.Audio ref="polish" type="voiceOver" src="media/_audio/S_WhatNeed/VO_Polish.mp3" />
    </skoash.MediaSequence>
    <div className="left animated" />
    <div className="right">
        <div className="animated" />
    </div>
    <ul>
        <li className="lids animated"><span>The plastic lids</span></li>
        <li className="scissors animated"><span>Utility scissors</span></li>
        <li className="markers animated"><span>Markers</span></li>
        <li className="polish animated"><span>Colored nail polish<br />&nbsp; (or) acrylic paint</span></li>
    </ul>
  </skoash.Screen>
);

export default WhatNeedScreen;
