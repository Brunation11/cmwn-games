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

  bootstrap() {
    skoash.Component.prototype.bootstrap.call(this);
    if (this.refs.bin) {
      this.setState({
        list: this.refs.bin.getAll()
      });
    }
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

  getClass(key, li) {
    return classNames(li.props.className, this.state.classes[key]);
  }

  getULClass() {
    return classNames('selectable', {
      COMPLETE: this.state.complete,
    });
  }

  renderBin() {
    if (!this.props.bin) return null;

    return (
      <this.props.bin.type
        {...this.props.bin.props}
        ref={'bin'}
      />
    );
  }

  renderList() {
    var list = this.props.list || this.state.list;

    return list.map((li, key) => {
      var ref = li.ref || li.props['data-ref'] || key;
      return (
        <li.type
          {...li.props}
          className={this.getClass(ref, li)}
          data-ref={ref}
          data-message={li.props.message}
          ref={ref}
          key={key}
        />
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderBin()}
        <ul className={this.getULClass()} onClick={this.state.selectFunction.bind(this)}>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default Selectable;
