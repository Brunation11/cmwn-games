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

var EmojiBullyingScreen = (
  <skoash.Screen
    id="emoji-bullying"
    collectData={collectData}
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_Bullying.mp3" />
    <skoash.Image ref="penguins" className="penguins animated" src="media/assets/_images/S_7/img_main_penguins-01.png" />
    <div ref="frame" className="frame animated"></div>
    <div ref="sub-frame" className="sub-frame animated"></div>
    <skoash.Image ref="penguins-bullying" className="penguins-bullying animated" src="media/assets/_images/S_7/img-s7-bullying-penguins.png" />

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
        <skoash.ListItem className="sad animated" data-ref="sad" correct />,
        <skoash.ListItem className="angry animated" data-ref="angry" correct />,
        <skoash.ListItem className="no-big-deal animated" data-ref="no-big-deal" correct />
      ]}
      revealAssets={[
        <skoash.Audio ref="sad" type="voiceOver" src="media/assets/_audio/VOs/VO_Sad.mp3" delay={1000} />,
        <skoash.Audio ref="angry" type="voiceOver" src="media/assets/_audio/VOs/VO_Angry.mp3" delay={1000} />,
        <skoash.Audio ref="no-big-deal" type="voiceOver" src="media/assets/_audio/VOs/VO_NoBig.mp3" delay={1000} />
      ]}
    />

    <div ref="meter" className="meter animated"></div>
  </skoash.Screen>
);

export default EmojiBullyingScreen;

// edit highlighted state
// save data
