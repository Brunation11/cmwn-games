import SelectableReveal from 'shared/components/selectable_reveal/0.1';

var PickOnePowerfulScreen = (
  <skoash.Screen
    id="pick-one-powerful"
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_Powerful.mp3" />
    <skoash.Image ref="banner" className="banner animated" src="media/assets/_images/S_5/img-05-text-top-01.png" />

    <SelectableReveal
      ref="selectable-reveal"
      selectableSelectClass="HIGHLIGHTED"
      selectableCompleteOnSelect
      selectableCheckComplete={false}
      revealCompleteOnOpen
      revealCheckComplete={false}
      selectableList={[
        <skoash.ListItem className="very-powerful animated" data-ref="very-powerful" correct />,
        <skoash.ListItem className="not-powerful animated" data-ref="not-powerful" correct />,
        <skoash.ListItem className="unsure animated" data-ref="unsure" correct />,
        <skoash.ListItem className="dont-care animated" data-ref="dont-care" correct />
      ]}
      revealAssets={[
        <skoash.Audio ref="very-powerful" type="voiceOver" src="media/assets/_audio/VOs/VO_Very.mp3" />,
        <skoash.Audio ref="not-powerful" type="voiceOver" src="media/assets/_audio/VOs/VO_DontFeel.mp3" />,
        <skoash.Audio ref="unsure" type="voiceOver" src="media/assets/_audio/VOs/VO_Unsure.mp3" />,
        <skoash.Audio ref="dont-care" type="voiceOver" src="media/assets/_audio/VOs/VO_DontCare.mp3" />
      ]}
    />

    <div ref="meter" className="meter animated"></div>
  </skoash.Screen>
);

export default PickOnePowerfulScreen;

// edit highlighted state
// add select audio S_BU_1
// save data
