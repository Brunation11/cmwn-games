import _ from 'lodash';

import Selectable from 'shared/components/selectable/0.1';
import DroughtReveal from './drought_reveal';
import Score from 'shared/components/score/0.1';

export default function (props, ref, key) {
  var ConserveScreen = (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="conserve"
    >

      <skoash.Image src="media/S_17/img_17.1.png" />

      <Score
        ref="score"
        correct={_.get(props, 'data.selectable.target') ? true : null}
      />

      <div id="door-sprite"></div>


      <Selectable
        ref="selectable"
        list={[
            <div id="door"></div>
        ]}
        className="scroll-selectable"
        dataTarget="selectable"
      />

      <skoash.Component ref="frame" className="frame animated">

        <DroughtReveal
          ref="reveal"
          className="scroll-reveal"

          list={[
            <li>Don't let the water<br /> run while<br /> washing dishes</li>,
            <li>Don't let the water<br /> run continuously while<br /> brushing your teeth</li>,
            <li>Use leftover water from<br /> the melted ice in your<br /> glass to water plants</li>,
            <li>Only wash full loads<br /> of clothes</li>,
            <li>Use lukewarm water<br /><br /> Don't let it<br /> run to warm up</li>,
            <li>Collect rain water<br /> in a bucket for plants<br /> or cleaning or flushing</li>,
            <li>Throw trash in<br /> a waste basket<br /><br /> Don't flush it</li>,
            <li>Wash the car in the grass<br /> instead of the driveway</li>,
            <li>Sweep sidewalks instead<br /> of hosing them</li>
          ]}

          openReveal={_.get(props, 'data.selectable.target')}

          assets={[
            <skoash.Audio type="voiceOver" src="media/S_17/VO_17.2.mp3" />,
            <skoash.Audio type="voiceOver" src="media/S_17/VO_17.3.mp3"  />,
            <skoash.Audio type="voiceOver" src="media/S_17/VO_17.4.mp3"  />,
            <skoash.Audio type="voiceOver" src="media/S_17/VO_17.5.mp3"  />,
            <skoash.Audio type="voiceOver" src="media/S_17/VO_17.6.mp3"  />,
            <skoash.Audio type="voiceOver" src="media/S_17/VO_17.7.mp3"  />,
            <skoash.Audio type="voiceOver" src="media/S_17/VO_17.9.mp3"  />,
            <skoash.Audio type="voiceOver" src="media/S_17/VO_17.10.mp3" />,
            <skoash.Audio type="voiceOver" src="media/S_17/VO_17.11.mp3" />
          ]}
        />
      </skoash.Component>
      <skoash.Audio ref="start" type="voiceOver" src="media/S_17/VO_17.1.mp3" />

    </skoash.Screen>
  )

  return ConserveScreen;
}