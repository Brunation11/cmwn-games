import Selectable from '../../shared/components/selectable/0.1';

class BulbsSelectable extends Selectable {
  constructor() {
    super();

    this.state = {
      selectClass: 'HIGHLIGHTED',
      classes: {}
    };

    this.selectFunction = this.highlight;

    this.list = [
      <li className="animated" correct={true}></li>,
      <li className="animated" correct={true}></li>,
      <li className="animated" correct={true}></li>,
      <li className="animated" correct={true}></li>
    ];
  }
}

export default BulbsSelectable;
