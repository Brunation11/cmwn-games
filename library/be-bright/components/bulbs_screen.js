import InfoScreen from 'shared/components/info_screen/0.1.js';
import SelectableReveal from 'shared/components/selectable_reveal/0.1';

var BulbsScreen = (
  <InfoScreen
    id="bulbs"
  >
    <play.Audio ref="vo" type="voiceOver" src="media/S_3/VO_3.1.mp3" />
    <play.Image ref="title" className="title animated" src="media/S_3/img_3.1.png" />
    <SelectableReveal
      ref="selectable-reveal"
      selectableList={[
        <li className="animated" correct={true}></li>,
        <li className="animated" correct={true}></li>,
        <li className="animated" correct={true}></li>,
        <li className="animated" correct={true}></li>
      ]}
      selectableSelectClass="HIGHLIGHTED"
      revealList={[
        <li>
          <p>Light bulbs burn electricity!</p>
        </li>,
        <li>
          <p>Making electricity burns fossil fuels!</p>
        </li>,
        <li>
          <p>Burning fossil fuels contributes<br/> to bad air quality and climate change!</p>
          </li>,
        <li>
          <p>Leaving the lights on when<br/> you don’t need them costs money!</p>
        </li>
      ]}
      revealAssets={[
        <skoash.Audio type="voiceOver" src="media/S_3/VO_3.2.mp3" delay={2000} />,
        <skoash.Audio type="voiceOver" src="media/S_3/VO_3.3.mp3" delay={2000} />,
        <skoash.Audio type="voiceOver" src="media/S_3/VO_3.4.mp3" delay={2000} />,
        <skoash.Audio type="voiceOver" src="media/S_3/VO_3.5.mp3" delay={2000} />,
        <skoash.Audio data-ref="open-sound" type="sfx" src="media/_Buttons/S_BU_3.mp3" />
      ]}
    />
  </InfoScreen>
);

export default BulbsScreen;
