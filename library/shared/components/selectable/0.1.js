import classNames from 'classnames';
import _ from 'lodash';

class Selectable extends play.Component {
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
    var selectClass, selectFunction;

    selectClass = this.props.selectClass || this.state.selectClass || 'SELECTED';
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
    classes[message] = this.state.selectClass;

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
    var list;
    // if (this.props.randomizeList) {
    //   list = _.shuffle(this.props.list) || _.shuffle(this.state.list);
    // } else {
    //   list = this.props.list || this.state.list;
    // }
    list = this.props.list || this.state.list;
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
