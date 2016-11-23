export default function (props, ref, key) {
    var TitleScreen = (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="title"
    >
      <skoash.Audio ref="screen-complete" type="sfx" src="media/S_1/S_1.3.mp3" complete />
      <skoash.Image ref="bkg" className="hidden" src="media/S_1/img_1.2.png" />
      <skoash.Component ref="title">
        <skoash.MediaSequence
          ref="media"
          loop
        >
          <skoash.Audio ref="0" type="sfx" src="media/S_1/S_1.1.mp3" />
          <skoash.Audio ref="1" type="sfx" src="media/S_1/S_1.2.mp3" />
        </skoash.MediaSequence>
        <skoash.Image ref="img" className="scanner animated" src="media/S_1/img_1.1.gif" />
        <div className="title">
          <div className="animated" />
          <div className="animated" />
          <div className="animated" />
          <div className="animated" />
          <div className="animated" />
          <div className="animated" />
          <div className="animated" />
          <div className="animated" />
          <div className="animated" />
          <div className="animated" />
          <div className="animated" />
        </div>
      </skoash.Component>
    </skoash.Screen>
  );
    return TitleScreen;
}
