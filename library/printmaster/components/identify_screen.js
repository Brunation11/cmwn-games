import TargetSelectable from 'shared/components/target_selectable/0.1';

var IdentityScreen = (
  <skoash.Screen
    id="identify"
  >
    <skoash.Audio ref="correct" type="sfx" src="media/S_9/S_9.1.mp3" />
    <skoash.Audio ref="incorrect" type="sfx" src="media/S_9/S_9.2.mp3" />
    <skoash.Audio ref="granted" type="sfx" src="media/S_9/S_9.3.mp3" />
    <skoash.Audio ref="denied" type="sfx" src="media/S_9/S_9.4.mp3" />
    <skoash.Audio ref="confirmed" type="sfx" src="media/S_9/S_9.5.mp3" />
    <skoash.Image className="hidden" src="media/S_9/img_9.1.png" />
    <skoash.Image className="hidden" src="media/S_9/img_9.8.png" />
    <skoash.Image className="hidden" src="media/S_9/img_9.6.png" />
    <skoash.Image className="hidden" src="media/S_9/img_9.7.png" />
    <skoash.Image className="hidden" src="media/S_9/img_9.9.png" />
    <TargetSelectable className="group"
      targets={[
        <skoash.Image ref="arch" className="arch animated" src="media/S_9/img_9.2.png" />,
        <skoash.Image ref="loops" className="loops animated" src="media/S_9/img_9.3.png" />,
        <skoash.Image ref="whorl" className="whorl animated" src="media/S_9/img_9.4.png" />,
        <skoash.Image ref="doubleloop" className="doubleloop animated" src="media/S_9/img_9.5.png" />,
      ]}
      selectableList={[
        <li data-ref="arch" />,
        <li data-ref="loops" />,
        <li data-ref="whorl" />,
        <li data-ref="doubleloop" />,
      ]}
      selectableSelectClass="HIGHLIGHTED"
    />
  </skoash.Screen>
);

export default IdentityScreen;
