import SelectableScreen from 'shared/components/selectable_screen/0.1.js';

var PigScreen = (
  <SelectableScreen
    id="pig"
    answers={['saver']}
    selectableList={[
      <skoash.listItem className="pig animated" data-ref="pig" />,
      <skoash.listItem className="bulb animated" data-ref="saver" correct />
    ]}
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/S_4/VO_4.1.mp3" pl-delay={1000} />
    <skoash.Audio ref="saver" type="voiceOver" src="media/S_4/VO_4.2.mp3" />
    <skoash.Audio ref="pig" type="voiceOver" src="media/S_4/S_4.1.mp3" complete />
    <skoash.Audio ref="correct" type="sfx" src="media/S_4/S_4.2.mp3" />
    <skoash.Image ref="title" className="animated" src="media/S_4/img_4.1.png" />
  </SelectableScreen>
);

export default PigScreen;
