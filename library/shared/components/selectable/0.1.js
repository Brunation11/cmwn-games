class Selectable extends play.Component {
  constructor() {
    super();

  }

  select() {

  }

  render() {
    return (
      <ul className='selectable' onClick={this.select()}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    );
  }
}

export default Selectable;
