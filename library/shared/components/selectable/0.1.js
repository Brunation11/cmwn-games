class Selectable extends play.Component {
  constructor() {
    super();

    this.state = {
      selectClass: 'SELECTED',
      classes: {}
    };

    this.selectFunction = this.select;

    this.list = [
      <li></li>,
      <li></li>,
      <li></li>,
      <li></li>
    ];
  }

  start() {
    this.setState({
      started: true,
      classes: {}
    });

    this.bootstrap();

    Object.keys(this.refs).map(key => {
      if (typeof this.refs[key].start === 'function') this.refs[key].start();
    });
  }

  selectHelper(e, classes) {
    var message;

    if (e.target.tagName !== 'LI') return;

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

  select(e) {
    var classes = [];
    this.selectHelper(e, classes)
  }

  highlight(e) {
    var classes = this.state.classes;
    this.selectHelper(e, classes)
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
      var ref = li.props['data-ref'] == null ? key : li.props['data-ref'];
      return (
        <play.ListItem
          {...li.props}
          className={li.props.className+' '+this.getClass(key)}
          data-ref={ref}
          ref={ref}
          key={key}
        />
      );
    });
  }

  render() {
    return (
      <ul className={'selectable'+this.getULClass()} onClick={this.selectFunction.bind(this)}>
        {this.renderList()}
      </ul>
    );
  }
}

export default Selectable;
