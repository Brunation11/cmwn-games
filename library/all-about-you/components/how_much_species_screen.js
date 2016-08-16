import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="how-much-species"
    >
      <skoash.MediaSequence
        ref="vo"
        checkComplete={true}
      >
        <skoash.Audio ref="vo-how-much" type="voiceOver" src="media/assets/_audio/VOs/VO_HowMuch.mp3" />
        <skoash.Audio ref="vo-endangered" type="voiceOver" src="media/assets/_audio/VOs/VO_EndangeredSp.mp3" />
      </skoash.MediaSequence>

      <skoash.Image ref="banner" className="banner animated" src="media/assets/_images/S_13/Text_13_How%20much%20do%20you%20know.png" />
      <skoash.Image ref="penguin" className="penguin animated" src="media/assets/_images/S_13/IMG_13_Penguins.png" />
      <div ref="frame" className="frame animated"></div>
      <skoash.Image ref="text-species" className="text-species animated" src="media/assets/_images/S_14/Text_14_EndangeredSpecies.png" />
      <div ref="sub-frame" className="sub-frame animated"></div>
      <skoash.Image ref="icon" className="icon animated" src="media/assets/_images/S_14/IMG_14_Butterfly.png" />

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
          <skoash.ListItem className="a-lot animated" data-ref="a-lot" correct />,
          <skoash.ListItem className="a-little animated" data-ref="a-little" correct />,
          <skoash.ListItem className="not-at-all animated" data-ref="not-at-all" correct />
        ]}
        revealAssets={[
          <skoash.MediaSequence
            ref="a-lot"
            checkComplete={true}
            silentOnStart={true}
          >
            <skoash.Audio ref="a-lot-expression" type="voiceOver" src="media/assets/_audio/_Expressions/S_ALot.mp3" />
            <skoash.Audio ref="a-lot-vo" type="voiceOver" src="media/assets/_audio/VOs/VO_ALot.mp3" />
          </skoash.MediaSequence>,
          <skoash.MediaSequence
            ref="a-little"
            checkComplete={true}
            silentOnStart={true}
          >
            <skoash.Audio ref="a-little-expression" type="voiceOver" src="media/assets/_audio/_Expressions/S_ALittle.mp3" />
            <skoash.Audio ref="a-little-vo" type="voiceOver" src="media/assets/_audio/VOs/VO_ALittle.mp3" />
          </skoash.MediaSequence>,
          <skoash.MediaSequence
            ref="not-at-all"
            checkComplete={true}
            silentOnStart={true}
          >
            <skoash.Audio ref="not-at-all-expression" type="voiceOver" src="media/assets/_audio/_Expressions/S_NotAtAll.mp3" />
            <skoash.Audio ref="not-at-all-vo" type="voiceOver" src="media/assets/_audio/VOs/VO_NotAt.mp3" />
          </skoash.MediaSequence>
        ]}
      />

      <div ref="meter" className="meter animated"></div>
    </skoash.Screen>
  );
}
