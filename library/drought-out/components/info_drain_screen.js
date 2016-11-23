export default function (props, ref, key) {
    var InfoDrainScreen = (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="info-drain"
    >
      <skoash.MediaSequence>
        <skoash.Audio
          ref="info"
          type="voiceOver"
          src="media/S_14/VO_14.1.mp3"
          completeTarget="vo"
        />
        <skoash.Audio ref="drain" type="sfx" src="media/S_14/S_14.2.mp3"/>
      </skoash.MediaSequence>
      <skoash.Image src="media/S_14/img_14.1.png"/>
      <p className={'animated ' + (_.get(props, 'data.vo.complete') ? 'draining' : '')}>
        Today we use<br /> 127% more water<br /> than we did in 1950!<br /><br /> Most of that water<br /> swirls down
        the drain.
      </p>
    </skoash.Screen>
  );
    return InfoDrainScreen;
}
