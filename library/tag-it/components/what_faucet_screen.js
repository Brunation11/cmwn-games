import SelectableReveal from 'shared/components/selectable_reveal/0.1';

var WhatFaucetScreen = (
  <skoash.Screen
    id="what-faucet"
  >
    <skoash.MediaSequence
       ref="audio-sequence"
       checkComplete={true}
    >
        <skoash.Audio ref="what-faucet" type="voiceOver" src="media/_audio/S_WhatFaucet/VO_WhatFaucet.mp3" />
        <skoash.Audio ref="kitchen" type="sfx" src="media/_audio/_Reveals/TI_RV_3.mp3" />
        <skoash.Audio ref="kitchen" type="voiceOver" src="media/_audio/S_WhatFaucet/VO_Kitchen.mp3" />
        <skoash.Audio ref="shower" type="sfx" src="media/_audio/_Reveals/TI_RV_3.mp3" />
        <skoash.Audio ref="shower" type="voiceOver" src="media/_audio/S_WhatFaucet/VO_Shower.mp3" />
        <skoash.Audio ref="bathroom" type="sfx" src="media/_audio/_Reveals/TI_RV_3.mp3" />
        <skoash.Audio ref="bathroom" type="voiceOver" src="media/_audio/S_WhatFaucet/VO_Bathroom.mp3" />
        <skoash.Audio ref="bathtub" type="sfx" src="media/_audio/_Reveals/TI_RV_3.mp3" />
        <skoash.Audio ref="bathtub" type="voiceOver" src="media/_audio/S_WhatFaucet/VO_Bathtub.mp3" />
        <skoash.Audio ref="classroom" type="sfx" src="media/_audio/_Reveals/TI_RV_3.mp3" />
        <skoash.Audio ref="classroom" type="voiceOver" src="media/_audio/S_WhatFaucet/VO_Classroom.mp3" />
        <skoash.Audio ref="outdoor" type="sfx" src="media/_audio/_Reveals/TI_RV_3.mp3" />
        <skoash.Audio ref="outdoor" type="voiceOver" src="media/_audio/S_WhatFaucet/VO_Outdoor.mp3" />
    </skoash.MediaSequence>
    <div className="question" />
    <SelectableReveal
       ref="selectable-reveal"
       selectableCompleteOnSelect
       selectableCheckComplete={false}
       revealCompleteOnOpen
       revealCheckComplete={false}
       allCorrect
       assets={[
         <skoash.Audio ref="correct" type="sfx" src="media/_audio/_Buttons/TI_BU_1.mp3" />
       ]}
       selectableList={[
         <skoash.ListItem className="kitchen animated" data-ref="kitchen" correct />,
         <skoash.ListItem className="shower animated" data-ref="shower" correct />,
         <skoash.ListItem className="bathroom animated" data-ref="bathroom" correct />,
         <skoash.ListItem className="bathtub animated" data-ref="bathtub" correct />,
         <skoash.ListItem className="classroom animated" data-ref="classroom" correct />,
         <skoash.ListItem className="outdoor animated" data-ref="outdoor" correct />,
       ]}
     />
  </skoash.Screen>
);

export default WhatFaucetScreen;
