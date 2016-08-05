import SelectableAudio from 'shared/components/selectable_audio/0.1';

var selectRespond = function (i) {
  var ref = 'audio-' + i;
  console.log('playing audio');
  this.ref[ref].play();
};

var TitleScreen = (
  <skoash.Screen
    ref="you-feel"
    id="you-feel"
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/_audio/_S_YouFeel/HFF_VO_YouFeel.mp3" />
    <skoash.Component ref="center" className="center">
      <skoash.Component ref="group" className="group">
       <skoash.Component ref="frame" className="frame">
          <skoash.Image ref="title" src="media/_images/_S_YouFeel/img_2.1.png" />
          <SelectableAudio
            ref="selectable-audio"
            selectableList={[
              <li className="animated img-0"></li>,
              <li className="animated img-1"></li>,
              <li className="animated img-2"></li>
            ]}
            audioAssets={[
              <skoash.Audio type="sfx" src="media/_audio/_S_YouFeel/HFF_SX_LeftEmoji.mp3" />,
              <skoash.Audio type="sfx" src="media/_audio/_S_YouFeel/HFF_SX_CenterEmoji.mp3" />,
              <skoash.Audio type="sfx" src="media/_audio/_S_YouFeel/HFF_SX_RightEmoji.mp3" />
            ]}
            selectN={1}
          />
        </skoash.Component>
      </skoash.Component>
    </skoash.Component>
  </skoash.Screen>
);
export default TitleScreen;
