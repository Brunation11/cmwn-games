import _ from 'lodash';
import classNames from 'classnames';

import Selectable from 'shared/components/selectable/0.1';

const SETSTATEPAUSE = 100;

class SelectableAll extends Selectable {
  constructor() {
    super();
  }

  start() {
    var selectClass = 'SELECTED';
    var selectFunction = this.select;
    var selected, countFunction;
    if (this.props.doCount) {
        selected = 0;
        countFunction = this.props.count || this.count.bind(this);
    }

    this.setState({
      started: true,
      selectClass,
      selectFunction,
      selected,
      countFunction,
    });

    this.bootstrap();

    Object.keys(this.refs).map(key => {
      if (typeof this.refs[key].start === 'function') this.refs[key].start();
    });
  }

  bootstrap() {
    super.bootstrap();
    if (this.refs.bin) {
      this.setState({
        list: this.refs.bin.getAll()
      }, () => {setTimeout(() => {this.launch()}, SETSTATEPAUSE)});
    } else {
      this.launch();
    }
  }


  launch() {
    var list = this.state.list;
    var indexesLeft = [...Array(list.length).keys()];
    var classes = {};

    for(var i = 0; i < list.length; i++) {
      setTimeout(() => {
        var j = Math.floor(Math.random() * indexesLeft.length);
        var index = indexesLeft[j];
        indexesLeft.splice(j, 1);

        classes[index] = 'LAUNCHED';
        this.setState({classes});
      }, this.props.pause);
    }
    this.setState({classes});
  }

  next(key) {
    var classes = this.state.classes;
    var list = this.state.list;

    list.splice(key, 1, this.refs.bin.get(1)[0]);

    classes[key] = 'RESET';

    this.setState({
      list,
      classes
    }, () => {
      setTimeout(() => {
        classes[key] = 'LAUNCHED';
        this.setState({classes});
      }, SETSTATEPAUSE);
    });
  }

  count() {
    var selected = this.state.selected;
    this.setState({selected: selected + 1});
 
    if (this.state.selected === this.props.selectNum) {
      this.complete();
    }
  }

  selectHelper(e) {
    var target = e.target.closest('LI');
    if (!target) return;

    var key = target.getAttribute('id');
    var item = this.state.list[key];

    if (typeof this.props.onSelect === 'function') {
      this.props.onSelect(item);
    }
    if (typeof this.state.countFunction === 'function') {
      this.state.countFunction(this);
    }
  }

  getClassNames() {
    return classNames('selectable-all', super.getClassNames());
  }

  renderList() {
    var list = this.props.list || this.state.list;

    return list.map((li, key) => {
      var ref = li.ref || li.props['data-ref'] || key;
      return (
        <li.type
          {...li.props}
          className={this.getClass(key, li)}
          data-ref={ref}
          data-message={li.props.message}
          onTransitionEnd={this.next.bind(this, key)}
          ref={ref}
          key={key}
          id={key}
        />
      );
    });
  }
}

SelectableAll.defaultProps = _.merge({
  selectNum:  6,
  pause: 500,
  doCount: false
}, Selectable.defaultProps);

export default SelectableAll;
