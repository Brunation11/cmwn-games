class Catchable extends skoash.Component {
  constructor() {
    super();
  }

  componentWillReceiveProps(props) {
    this.setState({canCatch: props.disabled});
  }

  render() {
    return (
      <li data-ref={this.props.ref} data-test="thing"></li>
    );
  }
}

Catchable.defaultProps = {
  disabled: false,
  good: true,
  reCatchable: true
};

export default Catchable;