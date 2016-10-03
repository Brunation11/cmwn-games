import Selectable from 'shared/components/selectable/0.1';

class SelectableScreen extends skoash.Screen {
  constructor() {
    super();
  }

  selectRespond(message) {
    var audio, correct, incorrect;
    audio = this.audio[message];
    correct = this.audio.correct;
    incorrect = this.audio.incorrect;

    if (audio) {
      audio.play();
    }

    if (this.props.answers && ~this.props.answers.indexOf(message)) {
      if (correct) correct.play();
    } else if (this.props.answers && incorrect) {
      incorrect.play();
    }

    if (typeof this.props.selectRespond === 'function') {
      this.props.selectRespond.call(this, message);
    }
  }

  renderContent() {
    return (
      <div>
        {this.renderContentList()}
        <Selectable
          ref="selectable"
          selectRespond={this.selectRespond.bind(this)}
          list={this.props.selectableList}
        />
      </div>
    );
  }
}

export default SelectableScreen;
