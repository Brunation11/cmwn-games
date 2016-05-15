import Selectable from '../../shared/components/selectable/0.1';

class BulbsSelectable extends Selectable {
  constructor() {
    super();

    this.state = {
      selectClass: 'HIGHLIGHTED',
      classes: {}
    };
  }

  render() {
    return (
      <ul className='selectable' onClick={this.select.bind(this)}>
        <li className={"animated "+this.state.classes[0]} ref="0" data-ref="0" correct={true}></li>
        <li className={"animated "+this.state.classes[1]} ref="1" data-ref="1" correct={true}></li>
        <li className={"animated "+this.state.classes[2]} ref="2" data-ref="2" correct={true}></li>
        <li className={"animated "+this.state.classes[3]} ref="3" data-ref="3" correct={true}></li>
      </ul>
    );
  }
}

export default BulbsSelectable;
