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
    var selectClass, selectFunction, classes;

    selectClass = this.props.selectClass || this.state.selectClass || 'SELECTED';
    selectFunction = selectClass === 'HIGHLIGHTED' ? this.highlight : this.select;
    classes = this.loadData ? this.loadData : {};

    this.setState({
      started: true,
      classes: classes,
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

    if (this.props.allowDeselect) {
      if (this.state.classes[message]) {
        delete this.state.classes[message];
      }
    } else {
      classes[message] = this.state.selectClass;
    }

    this.setState({
      classes,
    });

    if (typeof this.props.selectRespond === 'function') {
      this.props.selectRespond(message);
    }

    if (this.props.completeOnSelect) {
      this.complete();
    } else {
      this.requireForComplete = this.requireForComplete.filter((key) => {
        return key !== message;
      });

      this.checkComplete();
    }
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
    var list = this.props.list || this.state.list;

    return list.map((li, key) => {
      var ref = li.props['data-ref'] == null ? key : li.props['data-ref'];
      return (
        <play.ListItem
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
      <ul className={'selectable ' + this.getULClass()} onClick={this.state.selectFunction.bind(this)}>
        {this.renderList()}
      </ul>
    );
  }
}

export default Selectable;
