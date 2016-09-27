import SelectableAudio from 'shared/components/selectable_audio/0.1';
import skoash.Screen from 'shared/components/custom_cursor_screen/0.1';

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="trash"
    >
      <skoash.Component className="turtle" />
      <SelectableAudio
        ref='selectable-audio'
        className="center"
        selectClass="HIGHLIGHTED"
        selectableList={[
          <skoash.ListItem className="bag" correct>
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="milk" correct>
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="milk2" correct>
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="shrimp">
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="shrimp2">
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="seaweed">
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="bottle" correct>
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="paper" correct>
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="paper2" correct>
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="jar" correct>
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="lobster">
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="glassbottle" correct>
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="soda" correct>
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="soda2" correct>
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="shell">
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="spike">
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="box" correct>
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="box2" correct>
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="shell2">
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="can" correct>
            <div />
            <div className="hover" />
          </skoash.ListItem>,
          <skoash.ListItem className="canholder" correct>
            <div />
            <div className="hover" />
          </skoash.ListItem>,
        ]}
        audioAssets={[
          <skoash.Audio data-ref="correct" type="sfx" src="media/audio/trash/answer-correct.mp3" />,
          <skoash.Audio data-ref="incorrect" type="sfx" src="media/audio/trash/answer-incorrect.mp3" />,
        ]}
      />
    </skoash.Screen>
  );
}
