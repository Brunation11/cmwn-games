import SelectableReveal from 'shared/components/selectable_reveal/0.1';

var HowMuchSpeciesScreen = (
  <skoash.Screen
    id="how-much-species"
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_HowMuch.mp3" />
    <skoash.Image ref="banner" className="banner animated" src="media/assets/_images/S_13/Text_13_How%20much%20do%20you%20know.png" />
    <skoash.Image ref="penguin" className="penguin animated" src="media/assets/_images/S_13/IMG_13_Penguins.png" />
    <div ref="frame" className="frame animated"></div>
    <skoash.Image ref="text-species" className="text-species animated" src="media/assets/_images/S_14/Text_14_EndangeredSpecies.png" />
    <div ref="sub-frame" className="sub-frame animated"></div>
    <skoash.Image ref="icon" className="icon animated" src="media/assets/_images/S_14/IMG_14_Butterfly.png" />

    <SelectableReveal
      ref="selectable-reveal"
      selectableSelectClass="HIGHLIGHTED"
      selectableList={[
        <skoash.ListItem className="a-lot animated" data-ref="a-lot" correct />,
        <skoash.ListItem className="a-little animated" data-ref="a-little" correct />,
        <skoash.ListItem className="not-at-all animated" data-ref="not-at-all" correct />
      ]}
      revealAssets={[
        <skoash.Audio ref="a-lot" type="voiceOver" src="media/assets/_audio/VOs/VO_ALot.mp3" />,
        <skoash.Audio ref="a-little" type="voiceOver" src="media/assets/_audio/VOs/VO_ALittle.mp3" />,
        <skoash.Audio ref="not-at-all" type="voiceOver" src="media/assets/_audio/VOs/VO_NotAt.mp3" />
      ]}
    />

    <div ref="meter" className="meter animated"></div>
  </skoash.Screen>
);

export default HowMuchSpeciesScreen;

// edit highlighted state
// screen should complete on first selection but students can still continue selecting
// save data
