import Selectable from 'shared/components/selectable/0.1';

class SelectableScreen extends skoash.Screen {
  constructor() {
    super();
  }

  selectRespond(message) {
    var audio, correct;
    audio = this.audio[message];
    correct = this.audio.correct;

    if (audio) {
      audio.play();
    }

    if (correct && this.props.answers && ~this.props.answers.indexOf(message)) {
      correct.play();
    }
  }

  renderContentList() {
    var children = this.props.children || this.props.content || [];
    return children.map((component, key) => {
      return (
        <component.type
          {...component.props}
          ref={component.ref}
          key={key}
        />
      );
    });
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
