import _ from 'lodash';

import Selectable from 'shared/components/selectable/0.1';
import DroughtReveal from './drought_reveal';

export default function (props, ref, key) {
  var HumanEffectsScreen = (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="human-effects"
      className="bottom-frame"
    >
      <Selectable
        ref="selectable"
        list={[
          <li></li>,
          <li></li>,
          <li></li>,
          <li></li>,
          <li></li>
        ]}
        selectClass="HIGHLIGHTED"
        className="scroll-selectable"
        dataTarget="selectable"
      />

      <skoash.Component ref="frame" className="frame animated">
        <skoash.Image src="media/S_12/img_12.6.png" />

        <DroughtReveal
          ref="reveal"
          className="scroll-reveal"

          list={[
            <li>Health problems from<br /> dust and bad water</li>,
            <li>Threats to homes and lives<br /> from forest fires</li>,
            <li>Anxiety and depression</li>,
            <li>Loss of income</li>,
            <li>Unable to play in the water</li>
          ]}

          openReveal={_.get(props, 'data.selectable.target')}

          assets={[
            <skoash.Audio type="voiceOver" src="media/S_12/VO_12.2.mp3" />,
            <skoash.Audio type="voiceOver" src="media/S_12/VO_12.3.mp3" />,
            <skoash.Audio type="voiceOver" src="media/S_12/VO_12.4.mp3" />,
            <skoash.Audio type="voiceOver" src="media/S_12/VO_12.5.mp3" />,
            <skoash.Audio type="voiceOver" src="media/S_12/VO_12.6.mp3" />
         ]}
        />
      </skoash.Component>

      <skoash.Audio ref="start" type="voiceOver" src="media/S_12/VO_12.1.mp3"/>
    </skoash.Screen>
  );

  return HumanEffectsScreen;
}
