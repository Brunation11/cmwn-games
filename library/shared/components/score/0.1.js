import classNames from 'classnames';
import _ from 'lodash';

class Score extends skoash.Component {
  constructor() {
    super();

    this.checkScore = this.checkScore.bind(this);
  }

  bootstrap() {
    super.bootstrap();

    this.setState({
      score: this.props.startingScore
    });
  }

  complete() {
    super.complete();

    setTimeout(() => {
      if (this.props.resetOnComplete) {
        this.setState({
          score: 0
        });
      }
    }, this.props.completeDelay);
  }

  checkScore(props) {
    if (!props.max) return;
    if (this.state.score >= props.max && (!this.state.complete || props.multipleCompletes)) {
      this.complete();
    } else if (this.state.complete && !props.complete) {
      this.incomplete();
    }
  }

  up(increment) {
    increment = _.isFinite(increment) ? increment :
      _.isFinite(this.props.increment) ? this.props.increment : 1;

    if (!_.isFinite(increment)) throw 'increment must be finite';

    this.updateScore(increment);
  }

  down(increment) {
    increment = _.isFinite(increment) ? increment :
      _.isFinite(this.props.downIncrement) ? this.props.downIncrement :
      _.isFinite(this.props.increment) ? this.props.increment : 1;

    if (!_.isFinite(increment)) throw 'increment must be finite';

    this.updateScore(-1 * increment);
  }

  updateScore(increment) {
    this.setState({
      score: this.state.score + increment
    }, () => {
      this.updateGameState({
        path: this.props.dataTarget,
        data: {
          score: this.state.score
        }
      });

      this.checkScore(this.props);
      this.callProp('onUpdateScore');
    });
  }

  setScore(props) {
    var upIncrement, downIncrement, score;
    upIncrement = _.isFinite(props.increment) ? props.increment : 1;
    downIncrement = _.isFinite(props.downIncrement) ? props.downIncrement :
      _.isFinite(props.increment) ? props.increment : 1;
    score = upIncrement * props.correct - downIncrement * props.incorrect;
    this.setState({
      score
    }, () => {
      this.checkScore(props);
      this.callProp('onUpdateScore', score);
    });
  }

  componentWillReceiveProps(props) {
    if (props.correct !== this.props.correct ||
      props.incorrect !== this.props.incorrect) {
      this.setScore(props);
    }
  }

  getClassNames() {
    return classNames(
      'score',
      super.getClassNames()
    );
  }

  render() {
    return (
      <div className={this.getClassNames()} data-max={this.props.max} data-score={this.state.score}>
        {this.props.leadingContent}
        <span>
          {this.state.score}
        </span>
        {this.props.children}
      </div>
    );
  }
}

Score.defaultProps = _.defaults({
  checkComplete: false,
  startingScore: 0,
  correct: 0,
  incorrect: 0,
}, skoash.Component.defaultProps);

export default Score;
