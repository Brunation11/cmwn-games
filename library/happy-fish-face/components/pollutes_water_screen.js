import  AudioSequence from 'shared/components/audio_sequence/0.1';

var PollutesWaterScreen = (
  <skoash.Screen
    ref="pollutes-water"
    id="pollutes-water"
  >
    <skoash.Component className="center">
      <skoash.Component className="group">
        <AudioSequence ref="audio-sequence">
          <skoash.Audio ref="star-1" type="sfx" src="media/_audio/_S_PollutesWater/HFF_SX_Star_1.mp3" />
          <skoash.Audio ref="star-2" type="sfx" src="media/_audio/_S_PollutesWater/HFF_SX_Star_2.mp3" />
          <skoash.Audio ref="star-3" type="sfx" src="media/_audio/_S_PollutesWater/HFF_SX_Star_3.mp3" />
          <skoash.Audio ref="vo-1" type="voiceOver" src="media/_audio/_S_PollutesWater/HFF_VO_PollutesWater.mp3" />
          <skoash.Audio ref="vo-2" type="voiceOver" src="media/_audio/_S_PollutesWater/HFF_VO_Remove.mp3" />
        </AudioSequence>
        <skoash.Component className="frame" pl-bg>
          <skoash.Component className="stars-container">
            <div className="stars" pl-bg />
          </skoash.Component>
          <skoash.Image src="media/_images/_S_PollutesWater/img_8.1.png" />
          <p>
            In this game remove everything<br /> that doesn't belong in the water.
          </p>
        </skoash.Component>
      </skoash.Component>
    </skoash.Component>
  </skoash.Screen>
);

export default PollutesWaterScreen;
