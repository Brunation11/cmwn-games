import Selectable from '../../shared/components/selectable/0.1';

class BulbsSelectable extends Selectable {
  constructor() {
    super();

  }

  render() {
    return (
      <ul className='selectable' onClick={this.select()}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    );
  }
}

export default BulbsSelectable;
