import _ from 'lodash';

import Selectable from 'shared/components/selectable/0.1';
import DroughtReveal from './drought_reveal';

export default function (props, ref, key) {
  var EnvironmentEffectsScreen = (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="environment-effects"
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
        <skoash.Image src="media/S_10/img_10.6.png" />

        <DroughtReveal
          ref="reveal"
          className="scroll-reveal"

          list={[
            <li>Less food and water</li>,
            <li>Loss of habitat<br /> for fish and wildlife</li>,
            <li>More forest fires occur</li>,
            <li>Endangered species<br /> can face extinction</li>,
            <li>Erosion of soil</li>,
          ]}

          openReveal={_.get(props, 'data.selectable.target')}

          assets={[
            <skoash.Audio type="voiceOver" src="media/S_10/VO_10.2.mp3" />,
            <skoash.Audio type="voiceOver" src="media/S_10/VO_10.3.mp3" />,
            <skoash.Audio type="voiceOver" src="media/S_10/VO_10.4.mp3" />,
            <skoash.Audio type="voiceOver" src="media/S_10/VO_10.5.mp3" />,
            <skoash.Audio type="voiceOver" src="media/S_10/VO_10.6.mp3" />
          ]}
        />
      </skoash.Component>

      <skoash.Audio ref="start" type="voiceOver" src="media/S_10/VO_10.1.mp3"/>
    </skoash.Screen>
  );

  return EnvironmentEffectsScreen;
}
