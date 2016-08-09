import classNames from 'classnames';

class Target extends skoash.Component {
  constructor() {
    super();
  }

  start() {
    super.start();
    this.setTarget();
  }

  onChange(attempt) {
    if (this.state.target) {
      if (this.state.target === attempt) {
        this.onCorrect(attempt);
      } else {
        this.onIncorrect(attempt);
      }
    } else if (this.props.allCorrect) {
      this.onCorrect(attempt);
    }
  }

  onCorrect() {
    if (this.audio.correct) this.audio.correct.play();
    if (this.audio['correct-sound']) this.audio['correct-sound'].play();

    this.updateState(true);

    this.setTarget((this.state.idx + 1) % this.props.targets.length);
  }

  onIncorrect() {
    if (this.audio.incorrect) this.audio.incorrect.play();
    if (this.audio['incorrect-sound']) this.audio['incorrect-sound'].play();

    this.updateState(false);
  }

  updateState(correct) {
    if (this.props.dataTarget) {
      this.updateGameState({
        path: this.props.dataTarget,
        data: {
          correct
        }
      });
    }
  }

  setTarget(idx = 0) {
    if (this.props.attemptTarget) {
      this.updateGameState({
        path: this.props.attemptTarget,
        data: {
          target: null
        }
      });
    }

    this.setState({
      idx,
      target: this.props.targets[idx].props.name,
      targetClass: this.props.targets[idx].props.targetClass
    });
  }

  componentWillReceiveProps(props) {
    if (props.attempt && props.attempt !== this.props.attempt) {
      this.onChange(props.attempt);
    }
  }

  getClassNames() {
    return classNames(
      super.getClassNames(),
      'target',
      this.state.targetClass,
      this.props.className,
    );
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        <div className="assets">
          {this.renderContentList('assets')}
        </div>
        <div className="targets">
          {this.renderContentList('targets')}
        </div>
      </div>
    );
  }
}

export default Target;
