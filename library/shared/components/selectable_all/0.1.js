import _ from 'lodash';
import classNames from 'classnames';

import Selectable from 'shared/components/selectable/0.1';

class SelectableAll extends Selectable {
  constructor() {
    super();
    var selected = 0;
  }

  componentDidMount() {
    this.start();
  }

  start() {
    var selectClass = 'SELECTED';
    var selectFunction = this.select;

    this.setState({
      started: true,
      selectClass,
      selectFunction
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
      }, () => {setTimeout(() => {this.launch()}, 1000)});
    } else {
      this.launch();
    }
  }


  launch() {
    var list = this.state.list;
    var classes = {};

    for(var i = 0; i < list.length; i++) {
//      setTimeout(() => {
          classes[i] = 'LAUNCHED';
//        while (true) {
//          var j = Math.floor(Math.random() * list.length);
//          if (classes[j] === 'LAUNCHED') continue;
//          classes[j] = 'LAUNCHED'; break;
//        }
//        this.setState({classes});
//      }, 500);
    }
    this.setState({classes});
    debugger;
  }

  next(ref) {
    var classes, list, index;
    list = this.state.list;
    index = list.indexOf(ref);

    list.splice(index, 1, this.refs.bin.get(1));

    classes[index] = 'LAUNCHED';

    this.setState({
      list,
      classes
    });
  }

  selectHelper(e) {
    if (typeof this.props.onSelect === 'function') {
      this.props.onSelect();
    }
 
    if (++this.selected === this.props.selectNum) this.complete();
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
          onTransitionEnd={this.next.bind(this, ref)}
          ref={ref}
          key={key}
        />
      );
    });
  }
}

SelectableAll.defaultProps = _.merge({
  selectNum:  6
}, Selectable.defaultProps);

export default SelectableAll;
