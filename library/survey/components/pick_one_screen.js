import SelectableScreen from 'shared/components/selectable_screen/0.1';

var PickOneScreen = (
  <SelectableScreen
    id="pick-one"
    answers={["very-powerful", "not-powerful", "unsure", "dont-care"]}
    selectableList={[
      <skoash.ListItem className="bear-1 animated" data-ref="very-powerful" correct />,
      <skoash.ListItem className="bear-2 animated" data-ref="not-powerful" correct />,
      <skoash.ListItem className="bear-3 animated" data-ref="unsure" correct />,
      <skoash.ListItem className="bear-4 animated" data-ref="dont-care" correct />
    ]}
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/S_4/VO_4.1.mp3" pl-delay={1000} />
    <skoash.Audio ref="very-powerful" type="voiceOver" src="media/S_4/VO_4.2.mp3" />
    <skoash.Audio ref="not-powerful" type="voiceOver" src="media/S_4/S_4.1.mp3" complete />
    <div className="frame">
      <h1>Which picture shows how powerful you feel to make the world a better place?</h1>
    </div>
  </SelectableScreen>
);

export default PickOneScreen;

// voice overs are missing
// need font file
