import classNames from 'classnames';
import _ from 'lodash';

class Score extends skoash.Component {
  constructor() {
    super();

    this.state = {
      score: 0
    };

    this.checkComplete = this.checkComplete.bind(this);
  }

  checkComplete() {
    if (!this.props.max) return;
    if ((this.state.score >= this.props.max || this.props.correct >= this.props.max) && !this.state.complete) {
      this.complete();
    } else {
      this.incomplete();
    }
  }

  up(increment) {
    increment = increment || this.props.increment || 1;
    if (!_.isFinite(increment)) throw 'increment must be finite';
    this.setState({
      score: this.state.score + increment
    }, this.checkComplete);
  }

  down(increment) {
    increment = increment || this.props.downIncrement || this.props.increment || 1;
    if (!_.isFinite(increment)) throw 'increment must be finite';
    this.setState({
      score: this.state.score - increment
    }, this.checkComplete);
  }

  getClassNames() {
    return classNames(
      'score',
      `score-${this.props.correct || this.state.score}`,
      skoash.Component.prototype.getClassNames.call(this)
    );
  }

  render() {
    return (
      <div {...this.props} className={this.getClassNames()} score={this.props.correct || this.state.score}>
        {this.props.leadingContent}
        <span>
          {this.props.correct || this.state.score}
        </span>
        {this.props.children}
      </div>
    );
  }
}

export default Score;
