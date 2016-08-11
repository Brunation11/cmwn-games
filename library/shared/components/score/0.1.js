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

  checkScore() {
    if (!this.props.max) return;
    if (this.state.score >= this.props.max && (!this.state.complete || this.props.multipleCompletes)) {
      this.complete();
    } else if (this.state.complete && !this.props.complete) {
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

      this.checkScore();

      if (typeof this.props.onUpdateScore === 'function') {
        this.props.onUpdateScore.call(this);
      }
    });
  }

  componentWillReceiveProps(props) {
    if (props.correct != null && props.correct !== this.props.correct) {
      if (props.correct) {
        this.up();
      } else {
        this.down();
      }
    }
  }

  getClassNames() {
    return classNames(
      'score',
      skoash.Component.prototype.getClassNames.call(this)
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
}, skoash.Component.defaultProps);

export default Score;
