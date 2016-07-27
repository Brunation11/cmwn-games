import AudioSequence from 'shared/components/audio_sequence/0.1'
import SelectableReveal from 'shared/components/selectable_reveal/0.1';

var HowMuchEnvScreen = (
  <skoash.Screen
    id="how-much-env"
  >

    <AudioSequence
      ref="vo"
      checkComplete={true}
    >
      <skoash.Audio ref="vo-how-much" type="voiceOver" src="media/assets/_audio/VOs/VO_HowMuch.mp3" />
      <skoash.Audio ref="vo-enviro-climate" type="voiceOver" src="media/assets/_audio/VOs/VO_EnviroClimate.mp3" />
    </AudioSequence>

    <skoash.Image ref="banner" className="banner animated" src="media/assets/_images/S_13/Text_13_How%20much%20do%20you%20know.png" />
    <skoash.Image ref="penguin" className="penguin animated" src="media/assets/_images/S_13/IMG_13_Penguins.png" />
    <div ref="frame" className="frame animated"></div>
    <skoash.Image ref="text-environment" className="text-environment animated" src="media/assets/_images/S_13/Text_13_EnvironmentClimateChange.png" />
    <div ref="sub-frame" className="sub-frame animated"></div>
    <skoash.Image ref="icon" className="icon animated" src="media/assets/_images/S_13/IMG_13_Plant.png" />

    <SelectableReveal
      ref="selectable-reveal"
      selectableSelectClass="HIGHLIGHTED"
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
        <AudioSequence
          ref="a-lot"
          checkComplete={true}
          playOnStart={false}
        >
          <skoash.Audio ref="a-lot-expression" type="voiceOver" src="media/assets/_audio/_Expressions/S_ALot.mp3" delay={1000} />
          <skoash.Audio ref="a-lot-vo" type="voiceOver" src="media/assets/_audio/VOs/VO_ALot.mp3" delay={1000} />
        </AudioSequence>,
        <AudioSequence
          ref="a-little"
          checkComplete={true}
          playOnStart={false}
        >
          <skoash.Audio ref="a-little-expression" type="voiceOver" src="media/assets/_audio/_Expressions/S_ALittle.mp3" delay={1000} />
          <skoash.Audio ref="a-little-vo" type="voiceOver" src="media/assets/_audio/VOs/VO_ALittle.mp3" delay={1000} />
        </AudioSequence>,
        <AudioSequence
          ref="a-not-at-all"
          checkComplete={true}
          playOnStart={false}
        >
          <skoash.Audio ref="not-at-all-expression" type="voiceOver" src="media/assets/_audio/_Expressions/S_NotAtAll.mp3" delay={1000} />
          <skoash.Audio ref="not-at-all-vo" type="voiceOver" src="media/assets/_audio/VOs/VO_NotAt.mp3" delay={1000} />
        </AudioSequence>
      ]}
    />

    <div ref="meter" className="meter animated"></div>
  </skoash.Screen>
);

export default HowMuchEnvScreen;

// edit highlighted state
// add secondary vo
// add emotion sound
// save data
