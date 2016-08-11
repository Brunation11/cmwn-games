import classNames from 'classnames';
import _ from 'lodash';

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
    var selectClass, selectFunction, classes = {};

    selectClass = this.props.selectClass || this.state.selectClass || 'SELECTED';

    selectFunction = selectClass === 'HIGHLIGHTED' ? this.highlight : this.select;

    if (this.props.selectOnStart) {
      classes[this.props.selectOnStart] = selectClass;
    }

    this.setState({
      started: true,
      classes,
      selectFunction,
      selectClass,
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

  getClass(key, li) {
    return classNames(li.props.className, this.state.classes[key]);
  }

  getClassNames() {
    return classNames({
      selectable: true,
      COMPLETE: this.state.complete,
    }, this.props.className);
  }

  checkComplete() {
    var self = this, complete;

    if (this.props.checkComplete === false) return;
    complete = self.requireForComplete.every(key => {

      if (self.refs[key] instanceof Node) {

        return true;
      }
      if (!self.refs[key].state || (self.refs[key].state && !self.refs[key].state.complete)) {

        if (typeof self.refs[key].checkComplete === 'function') {

          self.refs[key].checkComplete();
        }
        return false;
      }
      return true;
    });

    if (complete && !self.state.complete) {
      self.complete();
    } else if (self.state.started && !complete && self.state.complete) {
      self.incomplete();
    }
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
    var list;
    // if (this.props.randomizeList) {
    //   list = _.shuffle(this.props.list) || _.shuffle(this.state.list);
    // } else {
    //   list = this.props.list || this.state.list;
    // }
    list = this.props.list || this.state.list;
    return list.map((li, key) => {
      var ref = li.ref || li.props['data-ref'] || key;
      // li.type = li.type || skoash.ListItem;
      return (
        <skoash.ListItem
          {...li.props}
          className={this.getClass(ref, li)}
          data-ref={ref}
          data-message={li.props.message}
          ref={li.props['data-ref'] || ref}
          key={key}
        />
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderBin()}
        <ul className={this.getClassNames()} onClick={this.state.selectFunction.bind(this)}>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default Selectable;
