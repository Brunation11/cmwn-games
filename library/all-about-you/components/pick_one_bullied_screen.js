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

var PickOneBulliedScreen = (
  <skoash.Screen
    id="pick-one-bullied"
    collectData={collectData}
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_EverWorried.mp3" />
    <skoash.Image ref="banner" className="banner animated" src="media/assets/_images/S_11/Text_11_HaveYouEver.png" />
    <skoash.Image ref="penguin" className="penguin animated" src="media/assets/_images/S_11/IMG_11_Penguins.png" />
    <div ref="frame" className="frame animated"></div>

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
        <skoash.ListItem className="yes animated" data-ref="yes" correct />,
        <skoash.ListItem className="no animated" data-ref="no" correct />,
      ]}
      revealAssets={[
        <skoash.Audio ref="yes" type="voiceOver" src="media/assets/_audio/VOs/VO_Yes.mp3" delay={1000} />,
        <skoash.Audio ref="no" type="voiceOver" src="media/assets/_audio/VOs/VO_No.mp3" delay={1000} />
      ]}
    />

    <div ref="meter" className="meter animated"></div>
  </skoash.Screen>
);

export default PickOneBulliedScreen;

// edit highlighted state
// save data
