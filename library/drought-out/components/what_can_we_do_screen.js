import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
  var WhatCanWeDoScreen = (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="what-can-we-do"
    >
      <skoash.Audio type="voiceOver" src="media/S_13/VO_13.1.mp3"/>
      <skoash.Image src="media/S_13/img_13.1.png"/>

      <SelectableReveal
        ref="selectable-card"
        selectableList={[
          <li className="bt flip-card" correct={true}></li>
        ]}
        selectableSelectClass="HIGHLIGHTED"
        reveallist={[

        ]}
      />

    </skoash.Screen>
  );
  return WhatCanWeDoScreen;
}
