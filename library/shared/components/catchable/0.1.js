class Catchable extends skoash.Component {
  constructor() {
    super();
    this.state = {
      canCatch: true
    };
    this.reset = this.reset.bind(this);
  }

  markCaught() {
    this.setState({canCatch: false});
    if (typeof this.props.onCaught === 'function') {
      this.props.onCaught.call(this);
    }
  }

  canCatch() {
    return !this.props.disabled && this.state.canCatch;
  }

  getClasses() {
    return this.state.canCatch ? '' : 'CAUGHT';
  }

  reset() {
    if (!this.props.disabled && this.props.reCatchable) {
      this.setState({canCatch: true});
    }
  }

  render() {
    return (
      <li className={this.getClasses()}></li>
    );
  }
}

Catchable.defaultProps = _.merge(skoash.Component.defaultProps, {
  disabled: false,
  isCorrect: true,
  reCatchable: true
});

export default Catchable;
