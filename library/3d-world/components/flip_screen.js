export default function (props, ref, key) {
      // <skoash.MediaSequence>
      //   <skoash.Audio
      //     type="voiceOver"
      //     src="media/S_22/VO_22.1.mp3"
      //     sprite={[0, 2000]}
      //     completeTarget="vo"
      //   />
      //   <skoash.Audio
      //     type="voiceOver"
      //     src="media/S_22/VO_22.1.mp3"
      //     sprite={[2000, 4000]}
      //   />
      // </skoash.MediaSequence>
      // <skoash.Image className="hidden" src="media/_Frame/Fr_1.png" />
      // <skoash.Image className="hidden" src="media/S_22/img_22.1.png" />
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="flip"
      className="large-frame"
      emitOnComplete={{
        name: 'flip',
      }}
    >
      <div className="frame">
        <div>
          <p>
            Now you’ve learned about <span>3D PRINTING…</span>
          </p>
          <p>
            Let’s print you out a new <span>FLIP</span>
          </p>
        </div>
      </div>

    </skoash.Screen>
  );
}
