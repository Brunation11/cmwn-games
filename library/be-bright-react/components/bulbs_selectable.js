import Selectable from '../../shared/components/selectable/0.1';

class BulbsSelectable extends Selectable {
  constructor() {
    super();

    this.state = {
      selectClass: 'HIGHLIGHTED',
      classes: {}
    };

    this.list = [
      <li className="animated" correct={true}></li>,
      <li className="animated" correct={true}></li>,
      <li className="animated" correct={true}></li>,
      <li className="animated" correct={true}></li>
    ];
  }

  renderList() {
    return this.list.map((li, key) => {
      return (
        <li {...li.props} className={li.props.className+' '+this.getClass(key)} ref={key} key={key} data-ref={key} ></li>
      );
    });
  }
}

export default BulbsSelectable;
