class Selectable extends play.Component {
  constructor() {
    super();

    this.state = {
      selectClass: 'SELECTED',
      classes: {}
    };
  }

  select(e) {
    var classes = this.state.classes;
    classes[e.target.getAttribute('data-ref')] = this.state.selectClass;

    this.setState({
      classes,
    });
  }

  render() {
    return (
      <ul className='selectable' onClick={this.select.bind(this)}>
        <li className={this.state.classes[0]} ref="0" data-ref="0"></li>
        <li className={this.state.classes[1]} ref="1" data-ref="1"></li>
        <li className={this.state.classes[2]} ref="2" data-ref="2"></li>
      </ul>
    );
  }
}

export default Selectable;
