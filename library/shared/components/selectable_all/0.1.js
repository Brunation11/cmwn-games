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
    super.start();

    var list = this.state.list;
    var classes = this.state.classes;

    for(var i = 0; i < list.length; i++) {
      setTimeout(() => {
        while (true) {
          var j = Math.floor(Math.random() * list.length);
          if (classes[j] === 'LAUNCHED') continue;
          classes[j] = 'LAUNCHED'; break;
        }
        this.setState({classes});
      }, 500);
    }
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

  selectHelpe(e) {
    if (typeof this.props.onSelect === 'function') {
      this.props.onSelect();
    }
 
    if (++selected === this.props.selectNum) this.complete();
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
          className={this.getClass(ref, li)}
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
