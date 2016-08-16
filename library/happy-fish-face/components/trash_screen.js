import _ from 'lodash';
import classNames from 'classnames';

import SelectableAudio from 'shared/components/selectable_audio/0.1';
import Reveal from 'shared/components/reveal/0.1';
import Timer from 'shared/components/timer/0.1';

const TRY_AGAIN = '0';
const GOOD_JOB = '1';

class TrashScreenComponent extends skoash.Screen {
  constructor() {
    super();

    this.state = {
      cursorLeft: 0,
      cursorTop: 0,
      touchstart: false,
      revealOpen: false,
    };
  }

  getRefs(currentRef) {
    if (!currentRef.refs) {
      return;
    }
    _.each(currentRef.refs, (ref, key) => {
      this.refs[key] = ref;
      if (key.includes('center') || key.includes('group')) {
        this.getRefs(ref);
      }
    });
  }

  bootstrap() {
    super.bootstrap();

    var ref = this.refs['center-1'];
    if (ref) {
      this.getRefs(ref);
    }

    window.addEventListener('mousemove', this.moveCursor.bind(this));
    window.addEventListener('touchstart', this.touchstart.bind(this));
  }

  start() {
    super.start();

    this.checkComplete = super.checkComplete; // for replay
  }

  goto(index, buttonSound) {
    super.goto(index, buttonSound);

    this.refs.timer.restart();
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.moveCursor);
    window.removeEventListener('touchstart', this.touchstart);
  }

  moveCursor(e) {
    var zoom = skoash.trigger('getState').scale;
    this.setState({
      cursorLeft: e.clientX / zoom - 50,
      cursorTop: e.clientY / zoom - 65,
    });
  }

  touchstart() {
    this.setState({
      touchstart: true
    });
  }

  complete() {
    var self = this;
    super.complete();
    self.checkComplete = () => {};
    // so it won't try to complete while incompleting all the refs

    if (!this.state.replay) this.setState({ replay: true });

    setTimeout(() => { // have to wait for state to change to complete: true
      if (self.state.complete) {
        self.incomplete();
        ['timer', 'reveal', 'selectable-audio'].forEach(key => {
          self.refs[key].incompleteRefs();
        });
      }
    }, 500);
  }

  onSelectableAudioComplete() {
    if (!this.state.revealOpen) {

      this.setState({
        revealOpen: true,
      }, () => {
        this.refs['center-2'].open();
        this.refs.reveal.open(GOOD_JOB);
        this.refs.timer.complete();
        this.refs.timer.stop();
      });
    }
  }

  onTimerComplete() {
    if (!this.state.revealOpen) {
      this.refs['center-2'].open();
      this.refs.reveal.open(TRY_AGAIN);
      this.setState({ revealOpen: true });
    }
  }

  closeRespond(ref) {
    this.setState({ revealOpen: false });
    this.refs['center-2'].close();
    if (ref === TRY_AGAIN) {
      this.refs.timer.restart();
      this.refs['selectable-audio'].restart();
    }
  }

  getClassNames() {
    return classNames({
      'REVEAL-OPEN': this.state.revealOpen,
      TOUCH: this.state.touchstart,
    }, super.getClassNames());
  }

  renderSelectableAudio() {
    return (
      <SelectableAudio
        ref="selectable-audio"
        selectClass="HIGHLIGHTED"
        onComplete={this.onSelectableAudioComplete.bind(this)}
        selectableList={[
          <skoash.ListItem data-ref="correct" correct id="bottle" />,
          <skoash.ListItem data-ref="correct" correct id="cans" />,
          <skoash.ListItem data-ref="correct" correct id="cleaner" />,
          <skoash.ListItem data-ref="correct" correct id="wash" />,
          <skoash.ListItem data-ref="correct" correct id="necklace" />,
          <skoash.ListItem data-ref="correct" correct id="oil" />,
          <skoash.ListItem data-ref="correct" correct id="bag" />,
          <skoash.ListItem data-ref="correct" correct id="water" />,
          <skoash.ListItem data-ref="correct" correct id="shoes" />,
          <skoash.ListItem data-ref="correct" correct id="soap" />,
          <skoash.ListItem data-ref="correct" correct id="sauce" />,
          <skoash.ListItem data-ref="correct" correct id="beeker" />,
          <skoash.ListItem data-ref="correct" correct id="drum" />,
          <skoash.ListItem data-ref="correct" correct id="cosmetics" />,
          <skoash.ListItem data-ref="correct" correct id="tire" />,
          <skoash.ListItem data-ref="correct" correct id="floss" />,
          <skoash.ListItem data-ref="correct" correct id="ketchup" />,
          <skoash.ListItem data-ref="correct" correct id="bulb" />,
          <skoash.ListItem data-ref="correct" correct id="fries" />,
          <skoash.ListItem data-ref="correct" correct id="soda" />,
          <skoash.ListItem data-ref="incorrect" id="coral" />,
          <skoash.ListItem data-ref="incorrect" id="crab" />,
          <skoash.ListItem data-ref="incorrect" id="turtle" />,
          <skoash.ListItem data-ref="incorrect" id="shell" />,
          <skoash.ListItem data-ref="incorrect" id="fish1" />,
          <skoash.ListItem data-ref="incorrect" id="fish2" />,
          <skoash.ListItem data-ref="incorrect" id="lobster" />,
          <skoash.ListItem data-ref="incorrect" id="shell2" />,
          <skoash.ListItem data-ref="incorrect" id="fish3" />,
          <skoash.ListItem data-ref="incorrect" id="starfish" />,
          <skoash.ListItem data-ref="incorrect" id="starfish" className="second" />,
          <skoash.ListItem data-ref="incorrect" id="octopus" />,
          <skoash.ListItem data-ref="incorrect" id="shell3" />,
          <skoash.ListItem data-ref="incorrect" id="seahorse" />,
          <skoash.ListItem data-ref="incorrect" id="fish4" />,
          <skoash.ListItem data-ref="incorrect" id="fish5" />,
          <skoash.ListItem data-ref="incorrect" id="jellyfish" />,
        ]}
        audioAssets={[
          <skoash.Audio data-ref="correct" type="sfx" src="media/_audio/_S_Trash/HFF_SX_Right.mp3" />,
          <skoash.Audio data-ref="incorrect" type="sfx" src="media/_audio/_S_Trash/HFF_SX_Wrong.mp3" complete />,
        ]}
      />
    );
  }

  renderReveal() {
    return (
      <Reveal
        ref="reveal"
        className="center"
        closeRespond={this.closeRespond.bind(this)}
        list={[
          <skoash.Component id="tryAgain" complete>
            <skoash.Image src="media/_images/_S_GoodJob/img_10.2.png" />
            <p>
              You ran out of time!
            </p>
          </skoash.Component>,
          <skoash.Component id="goodJob">
            <skoash.Image src="media/_images/_S_GoodJob/img_10.1.png" />
            <p>
              Take this offline.<br /> Never throw the trash in the water.
            </p>
          </skoash.Component>,
        ]}
        assets={[
          <skoash.Audio type="voiceOver" src="media/_audio/_S_GoodJob/HFF_VO_TryAgain.mp3" complete />,
          <skoash.MediaSequence className="media-sequence" silentOnStart>
            <skoash.Audio type="voiceOver" src="media/_audio/_S_GoodJob/HFF_VO_GoodJob.mp3" />
            <skoash.Audio type="voiceOver" src="media/_audio/_S_GoodJob/HFF_VO_NeverThrow.mp3" />
          </skoash.MediaSequence>,
        ]}
      />
    );
  }

  renderTimer() {
    return (
      <Timer
        ref="timer"
        countDown={true}
        timeout={90000}
        leadingContent={<skoash.Image src="media/_images/_S_Trash/img_9.1.png" />}
        onComplete={this.onTimerComplete.bind(this)}
      />
    );
  }

  renderNet() {
    return (
      <skoash.Image ref="net" className="net" src="media/_images/_S_Trash/img_9.3.png"
        style={{
          left: this.state.cursorLeft,
          top: this.state.cursorTop,
        }}
      />
    );
  }

  renderContent() {
    return (
      <div>
        <skoash.Component ref="center-1" className="center">
          <skoash.Component ref="group" className="group">
            {this.renderNet()}
            <skoash.Component ref="center-2" className="center">
              {this.renderReveal()}
            </skoash.Component>
            {this.renderTimer()}
            {this.renderSelectableAudio()}
          </skoash.Component>
        </skoash.Component>
      </div>
    );
  }
}

export default function (props, ref, key) {
  return (
    <TrashScreenComponent
      {...props}
      ref={ref}
      key={key}
      id="trash"
    />
  );
}
