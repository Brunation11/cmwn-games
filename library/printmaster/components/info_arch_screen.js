export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="info-arch"
      className="types"
    >
      <skoash.Audio ref="vo" type="voiceOver" src="media/S_4/VO_4.1.mp3" />
      <skoash.Image ref="image" className="animated" src="media/S_4/img_4.1.gif" />
      <skoash.Image ref="frame-bkg" className="hidden" src="media/_Frame/Fr_2.png" />
      <div className="frame">
        <div>
          <div>
            <span className="animated">
              <h2 className="typing">
                ARCH
              </h2>
            </span>
            <p className="animated">
              Arches slope up to<br/>
              a peak and then down.
            </p>
          </div>
        </div>
      </div>
    </skoash.Screen>
  );
}
