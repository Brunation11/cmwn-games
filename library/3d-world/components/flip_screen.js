export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="flip"
      emitOnComplete={{
        name: 'flip',
      }}
    >
      <skoash.Audio
        type="voiceOver"
        src={ENVIRONMENT.MEDIA + 'SoundAssets/vos/VO_Flip.mp3'}
      />
      <p className="now">
        Now you’ve learned about <span>3D PRINTING</span><span>…</span>
      </p>
      <p className="lets">
        Let’s print you out<br/>
        a new <span>FLIP</span>
      </p>
    </skoash.Screen>
  );
}
