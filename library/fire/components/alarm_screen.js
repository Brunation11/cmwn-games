import AudioSequence from 'shared/components/audio_sequence/0.1';
import SelectableAudio from 'shared/components/selectable_audio/0.1';

class AlarmScreenComponent extends skoash.Screen {

  renderSelectableAudio() {
    return (
      <SelectableAudio
        ref="selectable-audio"
        onComplete={this.next.bind(this)}
        audioAssets={[
          <skoash.Audio ref="alarm-sound" type="sfx" src="media/S_5/S_5.1.mp3"/>
        ]}
        selectableList={[
          <skoash.Component className="push-down" />
        ]}
      />
    );
  }

  renderContent() {
    return (
      <div>
        {this.renderContentList()}
        {this.renderSelectableAudio.call(this)}
      </div>
    );
  }
}

export default function (props, ref, key) {
  return (
    <AlarmScreenComponent
      {...props}
      ref={ref}
      key={key}
      id="alarm"
    >
      <AudioSequence ref="audio-sequence">
        <skoash.Audio ref="title" type="voiceOver" src="media/S_5/vo_FireBreaksOut.mp3" />
        <skoash.Audio ref="directions" type="voiceOver" src="media/S_5/vo_ClickAndShowYouKnow.mp3" />
      </AudioSequence>
      <p>Click and show you know.</p>
      <skoash.Image className="animated" src="media/S_5/img_5.1.png" />
      <skoash.Image className="animated" src="media/S_5/img_5.2.png" />
      <skoash.Image className="animated" src="media/S_1/img_1.1.png" />
    </AlarmScreenComponent>
  );
}
