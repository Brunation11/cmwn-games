import classNames from 'classnames';

class Selectable extends skoash.Component {
  constructor() {
    super();

    this.state = {
      selectClass: 'SELECTED',
      classes: {},
      list: [
        <li></li>,
        <li></li>,
        <li></li>,
        <li></li>
      ],
      selectFunction: this.select,
    };
  }

  start() {
    var selectFunction, classes = {};

    selectFunction = this.state.selectClass === 'HIGHLIGHTED' ? this.highlight : this.select;

    if (this.props.selectOnStart) {
      classes[this.props.selectOnStart] = this.state.selectClass;
    }

    this.setState({
      started: true,
      classes,
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
    classes[message] = this.state.selectClass;

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
    return classNames({
      [this.state.classes[key] || '']: true,
    });
  }

  getClassNames() {
    return classNames({
      selectable: true,
      COMPLETE: this.state.complete,
    }, this.props.className);
  }

  renderList() {
    var list = this.props.list || this.state.list;

    return list.map((li, key) => {
      var ref = li.props['data-ref'] == null ? key : li.props['data-ref'];
      return (
        <skoash.ListItem
          {...li.props}
          className={(li.props.className ? li.props.className + ' ' : '') + this.getClass(ref)}
          data-ref={ref}
          ref={ref}
          key={key}
        />
      );
    });
  }

  render() {
    return (
      <ul className={this.getClassNames()} onClick={this.state.selectFunction.bind(this)}>
        {this.renderList()}
      </ul>
    );
  }
}

export default Selectable;
