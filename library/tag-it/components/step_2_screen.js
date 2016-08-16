export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="step-2"
    >
      <skoash.MediaSequence
         ref="audio-sequence"
         checkComplete={true}
      >
          <skoash.Audio ref="step" type="sfx" src="media/_audio/_Reveals/TI_RV_1.mp3" />
          <skoash.Audio ref="step2" type="voiceOver" src="media/_audio/S_Step2/VO_Step2.mp3" />
          <skoash.Audio ref="collect" type="voiceOver" src="media/_audio/S_Step2/VO_CollectEmpty.mp3" />
          <skoash.Audio ref="container-1" type="sfx" src="media/_audio/_Reveals/TI_RV_5.mp3" delay={600} />
          <skoash.Audio ref="container-2" type="sfx" src="media/_audio/_Reveals/TI_RV_5.mp3" delay={600} /> 
          <skoash.Audio ref="container-3" type="sfx" src="media/_audio/_Reveals/TI_RV_5.mp3" delay={600} />
      </skoash.MediaSequence>
      <div className="step animated" />
      <p className="collect">
          Collect empty plastic lids<br />
          that you would otherwise throw away.
      </p>
      <div className="images">
        <div className="container-1 animated"></div>
        <div className="container-2 animated"></div>
        <div className="container-3 animated"></div>
      </div>
    </skoash.Screen>
  );
}

