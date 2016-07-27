import classNames from 'classnames';

class Selectable extends play.Component {
  constructor() {
    super();

    this.state = {
      classes: {},
      selectFunction: this.select,
    };
  }

  start() {
    var selectClass, selectFunction;

    selectClass = this.props.selectClass;
    selectFunction = selectClass === 'HIGHLIGHTED' ? this.highlight : this.select;

    this.setState({
      started: true,
      classes: {},
      selectClass,
      selectFunction,
    });

    this.bootstrap();

    Object.keys(this.refs).map(key => {
      if (typeof this.refs[key].start === 'function') this.refs[key].start();
    });
  }

  selectHelper(e, classes) {
    var message, target;

    target = e.target.closest('LI');

    if (!target) return;

    message = target.getAttribute('data-ref');
    classes[message] = this.props.selectClass;

    this.setState({
      classes,
    });

    if (typeof this.props.selectRespond === 'function') {
      this.props.selectRespond(message);
    }

    this.requireForComplete = this.requireForComplete.filter((key) => {
      return key !== message;
    });

    this.checkComplete();
  }

  select(e) {
    var classes = [];
    this.selectHelper(e, classes);
  }

  highlight(e) {
    var classes = this.state.classes;
    this.selectHelper(e, classes);
  }

  getClass(key) {
    return this.state.classes[key] ? this.state.classes[key] : '';
  }

  getULClass() {
    return classNames({
      COMPLETE: this.state.complete,
    });
  }

  renderList() {
    return this.props.list.map((li, key) => {
      var ref = li.ref || li.props['data-ref'] || key;
      var message = li.props.message || '' + key;
      return (
        <li.type
          {...li.props}
          type="li"
          className={(li.props.className ? li.props.className + ' ' : '') + this.getClass(ref)}
          message={message}
          data-ref={ref}
          ref={ref}
          key={key}
        />
      );
    });
  }

  render() {
    return (
      <ul className={'selectable ' + this.getULClass()} onClick={this.state.selectFunction.bind(this)}>
        {this.renderList()}
      </ul>
    );
  }
}

Selectable.defaultProps = {
  list: [
    <li></li>,
    <li></li>,
    <li></li>,
    <li></li>
  ],
  selectClass: 'SELECTED'
};

export default Selectable;
