import Selectable from '../../shared/components/selectable/0.1';

class PigSelectable extends Selectable {
  constructor() {
    super();

    this.state = {
      selectClass: 'SELECTED',
      classes: {}
    };

    this.list = [
      <li className="pig animated" data-ref="pig" />,
      <li className="bulb animated" data-ref="saver" correct={true} />
    ];
  }
}

export default PigSelectable;
