import SelectableReveal from 'shared/components/selectable_reveal/0.1';

var WhatDidYouDoScreen = (
  <skoash.Screen
    id="what-did-you-do"
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_WhatDid.mp3" />
    <skoash.Image ref="banner" className="banner animated" src="media/assets/_images/S_12/Text_12_WhatDidYouDo_.png" />
    <skoash.Image ref="penguin" className="penguin animated" src="media/assets/_images/S_12/IMG_12_Penguins.png" />

    <SelectableReveal
      ref="selectable-reveal"
      selectableSelectClass="HIGHLIGHTED"
      selectableCompleteOnSelect
      selectableCheckComplete={false}
      revealCompleteOnOpen
      revealCheckComplete={false}
      selectableList={[
        <skoash.ListItem className="felt-bad animated" data-ref="felt-bad" correct />,
        <skoash.ListItem className="didnt-bother animated" data-ref="didnt-bother" correct />,
        <skoash.ListItem className="something-mean animated" data-ref="something-mean" correct />,
        <skoash.ListItem className="asked-a-friend animated" data-ref="asked-a-friend" correct />,
        <skoash.ListItem className="reported-it animated" data-ref="reported-it" correct />
      ]}
      revealAssets={[
        <skoash.Audio ref="felt-bad" type="voiceOver" src="media/assets/_audio/VOs/VO_FeelBad.mp3" />,
        <skoash.Audio ref="didnt-bother" type="voiceOver" src="media/assets/_audio/VOs/VO_Ignored.mp3" />,
        <skoash.Audio ref="something-mean" type="voiceOver" src="media/assets/_audio/VOs/VO_SaidSomething.mp3" />,
        <skoash.Audio ref="asked-a-friend" type="voiceOver" src="media/assets/_audio/VOs/VO_AskedFriend.mp3" />,
        <skoash.Audio ref="reported-it" type="voiceOver" src="media/assets/_audio/VOs/VO_Reported.mp3" />
      ]}
    />

  </skoash.Screen>
);

export default WhatDidYouDoScreen;

// add s_BU_1 audio on select
// save data
// vo 2 doesnt match asset