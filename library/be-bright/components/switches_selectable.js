import Selectable from '../../shared/components/selectable/0.1';

class SwitchesSelectable extends Selectable {
  constructor() {
    super();

    this.state = {
      selectClass: 'HIGHLIGHTED',
      classes: {},
      list: [
        <li className="animated" correct={true}></li>,
        <li className="animated" correct={true}></li>,
        <li className="animated" correct={true}></li>,
        <li className="animated" correct={true}></li>,
        <li className="animated" correct={true}></li>
      ],
      selectFunction: this.highlight,
    };
  }
}

export default SwitchesSelectable;
