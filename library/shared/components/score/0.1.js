import classNames from 'classnames';

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
    if (this.state.score >= this.props.max && !this.state.complete) {
      this.complete();
    } else if (this.state.complete) {
      this.incomplete();
    }
  }

  up() {
    var increment = this.props.increment || 1;
    this.setState({
      score: this.state.score + increment
    }, this.checkComplete);
  }

  down() {
    var increment = this.props.downIncrement || this.props.increment || 1;
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
