import collectData from './collect_data.js';
import loadData from './load_data.js';

import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      collectData={collectData}
      loadData={loadData}
      id="emoji-angry"
    >
      <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_BeAngry.mp3" />
      <skoash.Image ref="penguins" className="penguins animated" src="media/assets/_images/S_09/IMG_09_PenguinsCircle.png" />
      <skoash.Image ref="banner" className="banner animated" src="media/assets/_images/S_09/Text_09_AClassmateYellsAtYou.png" />
      <div ref="frame" className="frame animated"></div>
      <skoash.Image ref="penguins-angry" className="penguins-angry animated" src="media/assets/_images/S_09/IMG_09_AngryPenguin.png" />
      <skoash.Image ref="text-angry" className="text-angry animated" src="media/assets/_images/S_09/Text_09_BeingAngry.png" />

      <SelectableReveal
        ref="selectable-reveal"
        selectableCompleteOnSelect
        selectableCheckComplete={false}
        revealCompleteOnOpen
        revealCheckComplete={false}
        allCorrect
        assets={[
          <skoash.Audio ref="correct" type="sfx" src="media/assets/_audio/_Buttons/S_BU_1.mp3" />
        ]}
        selectableList={[
          <skoash.ListItem className="worried animated" data-ref="worried" correct />,
          <skoash.ListItem className="shocked animated" data-ref="shocked" correct />,
          <skoash.ListItem className="no-big-deal animated" data-ref="no-big-deal" correct />
        ]}
        revealAssets={[
          <skoash.Audio ref="worried" type="voiceOver" src="media/assets/_audio/VOs/VO_Worried.mp3" delay={1000} />,
          <skoash.Audio ref="shocked" type="voiceOver" src="media/assets/_audio/VOs/VO_Shocked.mp3" delay={1000} />,
          <skoash.Audio ref="no-big-deal" type="voiceOver" src="media/assets/_audio/VOs/VO_NoBig.mp3" delay={1000} />
        ]}
      />

      <div ref="meter" className="meter animated"></div>
    </skoash.Screen>
  );
}
