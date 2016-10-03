import Selectable from 'shared/components/selectable/0.1';
import Reveal from 'shared/components/reveal/0.1';

export default function (props, ref, key) {
  var ShowerScreen = (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="shower"
    >
      <skoash.Audio type="voiceOver" src="media/S_16/VO_16.1.mp3"/>
      <skoash.Image src="media/S_16/img_16.1.png"/>
      <p>Turn each card.</p>
      <skoash.Component className="flip-card-component bt">
        <Selectable
          ref="selectable-card"
          className="flip-card-component"
          list={[
            <li correct={true}>
              <div className="side b center inline"></div>
              <div className="side a center inline"></div>
            </li>,
            <li correct={true}>
              <div className="side b center inline"></div>
              <div className="side a center inline"></div>
            </li>,
            <li correct={true}>
              <div className="side b center inline"></div>
              <div className="side a center inline"></div>
            </li>
          ]}
          selectClass="HIGHLIGHTED"
          dataTarget="selectable"
        />
      </skoash.Component>
      <Reveal
        ref="reveal"
        hide={true}
        openReveal={_.get(props, 'data.selectable.target')}
        assets={[
          <skoash.Audio ref="day" type="voiceOver" src="media/S_16/VO_16.2.mp3" />,
          <skoash.Audio ref="week" type="voiceOver" src="media/S_16/VO_16.3.mp3" />,
          <skoash.Audio ref="year" type="voiceOver" src="media/S_16/VO_16.4.mp3" />
        ]}
      />
    </skoash.Screen>
  );
  return ShowerScreen;
}
