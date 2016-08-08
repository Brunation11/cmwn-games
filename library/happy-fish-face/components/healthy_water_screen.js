import SelectableAudio from 'shared/components/selectable_audio/0.1';

var HealthyWaterScreen = (
  <skoash.Screen
    ref="healthy-water"
    id="healthy-water"
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/_audio/_S_HealthyWater/HFF_VO_HealthyWater.mp3" />
    <skoash.Component ref="center" className="center">
      <skoash.Component ref="group" className="group">
        <skoash.Component ref="frame" className="frame">
          <skoash.Image ref="words" className="words" src="media/_images/_S_HealthyWater/img_4.1.png" />
          <SelectableAudio
            selectableList={[
                <li className="animated"></li>,
                <li className="animated" data-ref="correct"></li>
            ]}
            audioAssets={[
              <skoash.Audio type="sfx" src="media/_audio/_S_HealthyWater/HHF_SX_Wrong.mp3" />,
              <skoash.Audio type="sfx" src="media/_audio/_S_HealthyWater/HHF_SX_Right.mp3" />
            ]}
          />
        </skoash.Component>
      </skoash.Component>
    </skoash.Component>
  </skoash.Screen>
);
export default HealthyWaterScreen;
