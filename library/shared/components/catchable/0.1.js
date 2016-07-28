class Catchable extends skoash.Component {
  constructor() {
    super();
    this.state = {
      canCatch: true
    }
  }

  markCaught() {
    this.setState({canCatch: false});
    if (this.props.reCatchable) {
      window.setTimeout(() => this.setState({canCatch: true}), 4000);
    }
    if (typeof this.props.onCaught === 'function') {
      this.props.onCaught.call(this);
    }
  }

  canCatch() {
    return !this.props.disabled && this.state.canCatch;
  }

  render() {
    return (
      <li></li>
    );
  }
}

Catchable.defaultProps = {
  disabled: false,
  isCorrect: true,
  reCatchable: true
};

export default Catchable;