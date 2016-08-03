import Selectable from 'shared/components/selectable/0.1';

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
    <skoash.Component className="group">
      <skoash.Component className="header">
        <skoash.Image ref="arch" className="animated" src="media/S_9/img_9.2.png" />
        <skoash.Image ref="loops" className="animated" src="media/S_9/img_9.3.png" />
        <skoash.Image ref="whorl" className="animated" src="media/S_9/img_9.4.png" />
        <skoash.Image ref="doubleloop" className="animated" src="media/S_9/img_9.5.png" />
      </skoash.Component>
      <Selectable
        list={[
          <li ref="arch" />,
          <li ref="loops" />,
          <li ref="whorl" />,
          <li ref="doubleloop" />,
        ]}
      />
    </skoash.Component>
  </skoash.Screen>
);

export default IdentityScreen;
