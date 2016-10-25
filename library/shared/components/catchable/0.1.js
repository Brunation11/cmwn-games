import classNames from 'classnames';

class Catchable extends skoash.Component {
  constructor() {
    super();
    this.state = {
      canCatch: true
    };
    this.reset = this.reset.bind(this);
  }

  bootstrap() {
    super.bootstrap();
    this.DOMNode = ReactDOM.findDOMNode(this);
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

  getClassNames() {
    return classNames('catchable', {
      CAUGHT: !this.state.canCatch
    }, super.getClassNames());
  }

  reset() {
    if (!this.props.disabled && this.props.reCatchable) {
      this.setState({canCatch: true});
    }
  }

  render() {
    return (
      <li {...this.props} className={this.getClassNames()} />
    );
  }
}

Catchable.defaultProps = _.defaults({
  disabled: false,
  isCorrect: true,
  reCatchable: true
}, skoash.Component.defaultProps);

export default Catchable;
