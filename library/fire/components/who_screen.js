import SelectableAudio from 'shared/components/selectable_audio/0.1';

class WhoScreenComponent extends skoash.Screen {
  renderSelectableAudio() {
    if (this.next) {
      return (
        <SelectableAudio
          ref="selectable-audio"
          onComplete={this.next.bind(this)}
          audioAssets={[
            <skoash.Audio type="voiceOver" src="media/S_6/vo_Builder.mp3" complete />,
            <skoash.Audio type="voiceOver" src="media/S_6/vo_Plumber.mp3" complete />,
            <skoash.Audio type="voiceOver" src="media/S_6/vo_Firefighter.mp3" />,
            <skoash.Audio type="voiceOver" src="media/S_6/vo_Chef.mp3" complete />,
            <skoash.Audio data-ref="correct" type="sfx" src="media/S_6/S_6.2.mp3" />,
            <skoash.Audio data-ref="incorrect" type="sfx" src="media/S_6/S_6.3.mp3" complete />,
          ]}
          selectableList={[
            <skoash.ListItem className="animated" />,
            <skoash.ListItem className="animated" />,
            <skoash.ListItem className="animated" correct />,
            <skoash.ListItem className="animated" />,
          ]}
        />
      );
    }
  }

  renderContent() {
    return (
      <div>
        {this.renderContentList()}
        {this.renderSelectableAudio()}
      </div>
    );
  }
}

export default function (props, ref, key) {
  return (
    <WhoScreenComponent
      {...props}
      ref={ref}
      key={key}
      id="who"
      hideNext
    >
      <skoash.Audio ref="title" type="voiceOver" src="media/S_6/vo_FireBreaksOut2.mp3" />
      <skoash.Image className="animated" src="media/S_6/img_6.1.png" />
    </WhoScreenComponent>
  );
}
