import SelectableAudio from 'shared/components/selectable_audio/0.1';
import Reveal from 'shared/components/reveal/0.1';
import classNames from 'classnames';

const REVEAL_MSG = '0';

class WhoScreenComponent extends skoash.Screen {
  constructor() {
    super();

    this.state = {
      revealOpen: false
    };
  }

  open(opts) {
    super.open(opts);

    if (this.state.revealOpen) {
      this.setState({revealOpen: false});
      this.checkComplete = null;
      this.incomplete();
      ['selectable-audio', 'reveal'].forEach(ref => {
        this.refs[ref].incompleteRefs()
      });
      this.checkComplete = super.checkComplete;
    }
  }

  openReveal() {
    this.refs.reveal.open(REVEAL_MSG);
    this.setState({revealOpen: true});
  }

  renderSelectableAudio() {
    return (
      <SelectableAudio
        ref="selectable-audio"
        onComplete={this.openReveal.bind(this)}
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

  renderReveal() {
    return (
      <Reveal
        ref="reveal"
        assets={[
          <skoash.Audio type="voiceOver" src="media/S_6/vo_FirefightingTough.mp3" />
        ]}
        list={[
          <skoash.Component className="frame">
            <skoash.Image className="animated" src="media/S_6/img_6.7.png" />
            <div className="animated">
              <skoash.Image className="background" src="media/_Frames/FR_2.png" />
              Firefighting is one of the<br /> toughest jobs in the world<br /> and demands total teamwork.
            </div>
          </skoash.Component>
        ]}
      />
    );
  }

  getClassNames() {
    return classNames({
      'REVEAL-OPEN': this.state.revealOpen
    }, super.getClassNames());
  }

  renderContent() {
    return (
      <div>
        {this.renderContentList()}
        {this.renderSelectableAudio.call(this)}
        {this.renderReveal()}
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
    >
      <skoash.Audio ref="title" type="voiceOver" src="media/S_6/vo_FireBreaksOut2.mp3" />
      <skoash.Image className="animated" src="media/S_6/img_6.1.png" />
    </WhoScreenComponent>
  );
}
