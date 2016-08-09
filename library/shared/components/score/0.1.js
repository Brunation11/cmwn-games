import classNames from 'classnames';
import _ from 'lodash';

class Score extends skoash.Component {
  constructor() {
    super();

    this.state = {
      score: 0
    };
  }

  checkComplete() {
    if (!this.props.checkComplete && !this.state.complete) {
      this.complete();
    }

    if (!this.props.max) return;
    if (this.state.score >= this.props.max && !this.state.complete) {
      this.complete();
    } else if (this.state.complete) {
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
      skoash.Component.prototype.getClassNames.call(this)
    );
  }

  render() {
    return (
      <div {...this.props} className={this.getClassNames()} score={this.state.score}>
        {this.props.leadingContent}
        <span>
          {this.state.score}
        </span>
        {this.props.children}
      </div>
    );
  }
}

export default Score;
