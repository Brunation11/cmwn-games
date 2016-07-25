import SelectableReveal from 'shared/components/selectable_reveal/0.1';

var EmojiCompassionScreen = (
  <skoash.Screen
    id="emoji-compassion"
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_Compassion.mp3" />
    <skoash.Image ref="penguins" className="penguins animated" src="media/assets/_images/S_8/img-s8-main-penguins-01.png" />
    <div ref="frame" className="frame animated"></div>
    <div ref="sub-frame" className="sub-frame animated"></div>
    <skoash.Image ref="penguins-compassion" className="penguins-compassion animated" src="media/assets/_images/S_8/img_s8_penguins_compassion.png" />

    <SelectableReveal
      ref="selectable-reveal"
      selectableSelectClass="HIGHLIGHTED"
      selectableList={[
        <skoash.ListItem className="happy animated" data-ref="happy" correct />,
        <skoash.ListItem className="no-big-deal animated" data-ref="no-big-deal" correct />,
        <skoash.ListItem className="thankful animated" data-ref="thankful" correct />
      ]}
      revealAssets={[
        <skoash.Audio ref="happy" type="voiceOver" src="media/assets/_audio/VOs/VO_Happy.mp3" />,
        <skoash.Audio ref="no-big-deal" type="voiceOver" src="media/assets/_audio/VOs/VO_NoBig.mp3" />,
        <skoash.Audio ref="thankful" type="voiceOver" src="media/assets/_audio/VOs/VO_Thankful.mp3" />
      ]}
    />

    <div ref="meter" className="meter animated"></div>
  </skoash.Screen>
);

export default EmojiCompassionScreen;

// edit highlighted state
// screen should complete on first selection but students can still continue selecting
// save data
