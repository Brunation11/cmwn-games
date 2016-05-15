import Selectable from '../../shared/components/selectable/0.1';

class BulbsSelectable extends Selectable {
  constructor() {
    super();

  }

  render() {
    return (
      <ul className='selectable' onClick={this.select()}>
        <li ref="1" className="animated" correct={true}></li>
        <li ref="2" className="animated" correct={true}></li>
        <li ref="3" className="animated" correct={true}></li>
        <li ref="4" className="animated" correct={true}></li>
      </ul>
    );
  }
}

export default BulbsSelectable;
