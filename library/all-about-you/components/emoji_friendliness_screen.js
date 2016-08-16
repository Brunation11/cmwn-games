import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="emoji-friendliness"
    >
      <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_Friendly.mp3" />
      <skoash.Image ref="penguins" className="penguins animated" src="media/assets/_images/S_10/IMG_10_PenguinsCircle.png" />
      <skoash.Image ref="banner" className="banner animated" src="media/assets/_images/S_10/Text_10_AFriendSharesAGame.png" />
      <div ref="frame" className="frame animated"></div>
      <skoash.Image ref="penguins-friendly" className="penguins-friendly animated" src="media/assets/_images/S_10/IMG_10_Penguins.png" />
      <skoash.Image ref="text-friendly" className="text-friendly animated" src="media/assets/_images/S_10/Text_10_Friendliness.png" />

      <SelectableReveal
        ref="selectable-reveal"
        selectableCompleteOnSelect
        selectableCheckComplete={false}
        revealCompleteOnOpen
        revealCheckComplete={false}
        allCorrect
        assets={[
          <skoash.Audio ref="correct" type="sfx" src="media/assets/_audio/_Buttons/S_BU_1.mp3" />
        ]}
        selectableList={[
          <skoash.ListItem className="happy animated" data-ref="happy" correct />,
          <skoash.ListItem className="surprised animated" data-ref="surprised" correct />,
          <skoash.ListItem className="confused animated" data-ref="confused" correct />
        ]}
        revealAssets={[
          <skoash.Audio ref="happy" type="voiceOver" src="media/assets/_audio/VOs/VO_Happy.mp3" delay={1000} />,
          <skoash.Audio ref="surprised" type="voiceOver" src="media/assets/_audio/VOs/VO_Surprised.mp3" delay={1000} />,
          <skoash.Audio ref="confused" type="voiceOver" src="media/assets/_audio/VOs/VO_Confused.mp3" delay={1000} />
        ]}
      />

      <div ref="meter" className="meter animated"></div>
    </skoash.Screen>
  );
}
