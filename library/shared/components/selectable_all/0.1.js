import _ from 'lodash';
import classNames from 'classnames';

import Selectable from 'shared/components/selectable/0.1';

const SET_STATE_PAUSE = 100;

class SelectableAll extends Selectable {
  constructor() {
    super();

    this.count = this.count.bind(this);

    this.setState({
      selected: 0,
      list: [],
    });
  }

  bootstrap() {
    super.bootstrap();

    if (this.refs.bin) {
      this.setState({
        list: this.refs.bin.getAll()
      }, () => {
        setTimeout(() => {
          this.launch()
        }, this.props.launchPause)
      });
    } else {
      this.launch();
    }
  }


  launch() {
    var list, indicesLeft, classes, self = this;
    list = self.state.list;

    //if (!list) setTimeout(this.launch.call(this), 100);
    if (list.length === 0) return;

    indicesLeft = [...Array(list.length).keys()];
    classes = {};


    for(var i = 0; i < list.length; i++) {
      setTimeout(() => {
        var j = Math.floor(Math.random() * indicesLeft.length);
        var index = indicesLeft[j];
        indicesLeft.splice(j, 1);

        classes[index] = 'LAUNCHED';
        self.setState({classes});
      }, self.props.pause);
    }
  }

  next(key) {
    var self = this;
    var classes = self.state.classes;
    var list = self.state.list;

    list.splice(key, 1, self.refs.bin.get(1)[0]);

    classes[key] = 'RESET';

    this.setState({
      list,
      classes
    }, () => {
      setTimeout(() => {
        classes[key] = 'LAUNCHED';
        self.setState({classes});
      }, self.props.launchPause);
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

    if (this.props.doCount) {
      this.count();
    }
  }

  renderList() {
    var list = this.props.list || this.state.list;
    if (!list) return;

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

  render() {
    return (
      <div className="selectable-all">
        {this.renderBin()}
        <ul className={this.getClassNames()} onClick={this.state.selectFunction.bind(this)}>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

SelectableAll.defaultProps = _.defaults({
  selectNum:  6,
  pause: 500,
  doCount: false,
  launchPause: 100,
  selectClass: 'SELECTED',
}, skoash.Component.defaultProps);

export default SelectableAll;
