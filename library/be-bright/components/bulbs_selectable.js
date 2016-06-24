import Selectable from '../../shared/components/selectable/0.1';

class BulbsSelectable extends Selectable {
  constructor() {
    super();

    this.state = {
      selectClass: 'HIGHLIGHTED',
      classes: {},
      list: [
        <li className="animated" correct={true}></li>,
        <li className="animated" correct={true}></li>,
        <li className="animated" correct={true}></li>,
        <li className="animated" correct={true}></li>
      ],
      selectFunction: this.select,
    };
  }
}

export default BulbsSelectable;
