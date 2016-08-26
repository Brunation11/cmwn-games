export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="tips"
    >
      <skoash.MediaSequence
         ref="audio-sequence"
         checkComplete={true}
      >
          <skoash.Audio ref="sfx" type="sfx" src="media/_audio/_Reveals/TI_RV_1.mp3" />
          <skoash.Audio ref="vo" type="voiceOver" src="media/_audio/S_Tips/VO_Tips.mp3" />
          <skoash.Audio ref="use-your" type="voiceOver" src="media/_audio/S_Tips/VO_UseYour.mp3" />
          <skoash.Audio ref="try-glow" type="voiceOver" src="media/_audio/S_Tips/VO_TryGlow.mp3" />
          <skoash.Audio ref="use-multiple" type="voiceOver" src="media/_audio/S_Tips/VO_UseMultiple.mp3" />
          <skoash.Audio ref="create" type="voiceOver" src="media/_audio/S_Tips/VO_Create.mp3" />
          <skoash.Audio ref="personalize" type="voiceOver" src="media/_audio/S_Tips/VO_Personalize.mp3" />
      </skoash.MediaSequence>
      <div className="tips" />
      <div className="lid-1" />
      <div className="lid-2" />
      <div className="lid-3" />
      <ul>
          <li className="use-your animated"><span>Use your creativity!</span></li>
          <li className="try-glow animated"><span>Try glow in the dark paint.</span></li>
          <li className="use-multiple animated"><span>Use multiple colors to catch attention. </span></li>
          <li className="create animated"><span>Create a theme, like flowers or superheroes.</span></li>
          <li className="personalize animated"><span>Personalize for family members or rooms.</span></li>
      </ul>
    </skoash.Screen>
  );
}

