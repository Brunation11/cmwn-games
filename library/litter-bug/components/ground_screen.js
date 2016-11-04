export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="ground"
      startDelay={2000}
    >
      <skoash.Audio ref="vo" type="voiceOver" src="media/_assets/_sounds/_vos/ShouldYouThrow.mp3" />
      <skoash.Audio ref="button" complete type="sfx" src="media/_assets/_sounds/_effects/No.mp3" />
      <div className="banner animated" />
      <div className="avatar animated" />
    </skoash.Screen>
  );
}
