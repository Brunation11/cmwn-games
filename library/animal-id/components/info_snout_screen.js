export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="info-snout"
    >
      <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_14-1.mp3" />
      <skoash.Component>
        <skoash.Image ref="banner" className="banner-1 animated" src="media/images/img_14.1.png" />
        <h2>That's right</h2>
        <skoash.Image ref="banner-2" className="banner-2 animated" src="media/images/img_14.3.png" />
        <span className="animated"></span>
        <span className="animated"></span>
        <span className="animated"></span>
        <span className="animated"></span>
        <span className="animated"></span>
        <span className="animated"></span>
      </skoash.Component>
    </skoash.Screen>
  );
}
