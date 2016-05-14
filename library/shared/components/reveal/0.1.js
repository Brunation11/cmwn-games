class Reveal extends play.Component {
  constructor() {
    super();

  }

  open() {
    
  }

  close() {

  }

  renderList() {
    return (
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    );
  }

  render() {
    return (
      <div className='reveal'>
        <div>
          {this.renderList()}
          <button onClick={this.close}></button>
        </div>
      </div>
    );
  }
}

export default Reveal;
