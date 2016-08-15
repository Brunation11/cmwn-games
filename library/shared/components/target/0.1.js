import _ from 'lodash';
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

    this.callProp('onUpdateState', correct);
  }

  setTarget(idx = 0) {
    var amount = this.props.targets[idx].props.amount;

    if (this.props.dataTarget) {
      this.updateGameState({
        path: this.props.dataTarget,
        data: {
          amount
        }
      });
    }

    this.callProp('onSetTarget');

    this.setState({
      idx,
      amount,
      target: this.props.targets[idx].props.name,
      targetClass: this.props.targets[idx].props.targetClass,
    });
  }

  componentWillReceiveProps(props) {
    if (props.attempt && props.attempt !== this.props.attempt) {
      this.onChange(props.attempt);
    }

    if (_.isFinite(props.setTarget) && props.setTarget !== this.props.setTarget) {
      this.setTarget(props.setTarget % this.props.targets.length);
    }
  }

  getClassNames() {
    return classNames(
      'target',
      this.state.targetClass,
      super.getClassNames(),
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
