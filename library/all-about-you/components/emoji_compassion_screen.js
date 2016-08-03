import SelectableReveal from 'shared/components/selectable_reveal/0.1';

var collectData = function() {
  var data = {};
  if (!this.refs || !this.refs['selectable-reveal'] || !this.refs['selectable-reveal'].refs || !this.refs['selectable-reveal'].refs.selectable) return data;
  _.forIn(this.refs['selectable-reveal'].refs.selectable.refs , (ref, key) => {
    if (ref.props.className.indexOf('SELECTED') === -1) return;
    data[this.props.id] = ref.props['data-ref'];
  });
  return data;
}

var EmojiCompassionScreen = (
  <skoash.Screen
    id="emoji-compassion"
    collectData={collectData}
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_Comp.mp3" />
    <skoash.Image ref="penguins" className="penguins animated" src="media/assets/_images/S_8/img-s8-main-penguins-01.png" />
    <div ref="frame" className="frame animated"></div>
    <div ref="sub-frame" className="sub-frame animated"></div>
    <skoash.Image ref="penguins-compassion" className="penguins-compassion animated" src="media/assets/_images/S_8/img_s8_penguins_compassion.png" />

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
        <skoash.ListItem className="happy animated" data-ref="happy" correct />,
        <skoash.ListItem className="confused animated" data-ref="confused" correct />,
        <skoash.ListItem className="thankful animated" data-ref="thankful" correct />
      ]}
      revealAssets={[
        <skoash.Audio ref="happy" type="voiceOver" src="media/assets/_audio/VOs/VO_Happy.mp3" delay={1000} />,
        <skoash.Audio ref="confused" type="voiceOver" src="media/assets/_audio/VOs/VO_Confused.mp3" delay={1000} />,
        <skoash.Audio ref="thankful" type="voiceOver" src="media/assets/_audio/VOs/VO_Thankful.mp3" delay={1000} />
      ]}
    />

    <div ref="meter" className="meter animated"></div>
  </skoash.Screen>
);

export default EmojiCompassionScreen;

// edit highlighted state
// ask val about compassion choices, sprite shows confused but invision shows no big deal
// save data
