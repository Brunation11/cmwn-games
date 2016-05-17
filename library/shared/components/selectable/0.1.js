class Selectable extends play.Component {
  constructor() {
    super();

    this.state = {
      selectClass: 'SELECTED',
      classes: {}
    };

    this.list = [
      <li></li>,
      <li></li>,
      <li></li>,
      <li></li>
    ];
  }

  start() {
    this.setState({
      started: true
    });

    this.componentDidMount();

    Object.keys(this.refs).map(key => {
      if (typeof this.refs[key].start === 'function') this.refs[key].start();
    });
  }

  select(e) {
    var classes, message;

    if (e.target.tagName !== 'LI') return;

    classes = this.state.classes;
    message = e.target.getAttribute('data-ref');
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

  getClass(key) {
    return this.state.classes[key] ? this.state.classes[key] : '';
  }

  getULClass() {
    var classes = '';

    if (this.state.complete) classes += ' COMPLETE';

    return classes;
  }

  renderList() {
    return this.list.map((li, key) => {
      return (
        <li {...li.props} className={li.props.className+' '+this.getClass(key)} ref={key} key={key} index={key} ></li>
      );
    });
  }

  render() {
    return (
      <ul className={'selectable'+this.getULClass()} onClick={this.select.bind(this)}>
        {this.renderList()}
      </ul>
    );
  }
}

export default Selectable;
