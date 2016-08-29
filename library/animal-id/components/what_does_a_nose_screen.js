import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="what-does-a-nose"
    >
      <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_15-1.mp3" />
      <skoash.Image ref="title" className="title animated" src="media/images/img_15.1.png" />
      <skoash.Component>
        <h3>Touch each nose.</h3>
      </skoash.Component>
      <SelectableReveal
        ref="selectable-reveal"
        selectableSelectClass="HIGHLIGHTED"
        allCorrect
        selectableCheckComplete
        assets={[
          <skoash.Audio ref="correct" type="sfx" src="media/audio/S_15.1.mp3" />
        ]}
        selectableList={[
          <skoash.ListItem data-ref="human" className="human side b center inline animated" />,
          <skoash.ListItem data-ref="rabbit" className="rabbit side b center inline animated" />,
          <skoash.ListItem data-ref="rhino" className="rhino side b center inline animated" />
        ]}
        revealList={[
          <skoash.ListItem data-ref="human" className="human side a center inline animated" />,
          <skoash.ListItem data-ref="rabbit" className="rabbit side a center inline animated" />,
          <skoash.ListItem data-ref="rhino" className="rhino side a center inline animated" />
        ]}
        revealAssets={[
          <skoash.Audio ref="human" type="voiceOver" src="media/audio/VO_15-2.mp3" />,
          <skoash.Audio ref="rabbit" type="voiceOver" src="media/audio/VO_15-3.mp3" />,
          <skoash.Audio ref="rhino" type="voiceOver" src="media/audio/VO_15-4.mp3" />,
        ]}
      />
    </skoash.Screen>
  );
}
