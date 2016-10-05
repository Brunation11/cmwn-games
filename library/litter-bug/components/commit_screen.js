export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="commit"
    >
      <skoash.Audio ref="vo" type="voiceOver" src="media/S_13/VO_13.1.mp3" />
      <skoash.Component ref="center" className="center">
        <skoash.Component ref="frame" className="frame">
          <skoash.Image ref="background" className="background" src="media/_Frames/FR_3.png" />
          <p>
            I promise to NEVER litter<br/>
            and to pick up the litter<br/>
            I see whenever I safely can.<br/>
            I will dispose of it in a<br/>
            trash can or a recycle bin.
          </p>
        </skoash.Component>
      </skoash.Component>
    </skoash.Screen>
  );
}
