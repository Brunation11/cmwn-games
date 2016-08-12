import _ from 'lodash';
import classNames from 'classnames';

class Selectable extends skoash.Component {
  constructor() {
    super();

    this.state = {
      classes: {},
      selectFunction: this.select,
    };
  }

  start() {
    var selectClass, selectFunction, classes = {};

    selectClass = this.props.selectClass;
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

  restart() {
    if (this.state.complete) this.incomplete();

    this.requireForComplete.forEach(key => {
      var ref = this.refs[key];
      var restartFunction = ref.restart || ref.incomplete;
      if (ref.props && !ref.props.complete && typeof restartFunction === 'function') {
        restartFunction.call(ref);
      }
    });

    if (!this.state.started) this.start();
  }

  bootstrap() {
    super.bootstrap();
    var self = this;
 
    var correctAnswers = this.requireForComplete.filter((ref) => {
      return self.refs[ref].props.correct;
    });

    if (correctAnswers.length > 0) {
      this.requireForComplete = correctAnswers;
    }

    if (this.refs.bin) {
      this.setState({
        list: this.refs.bin.getAll()
      });
    }
  }

  selectHelper(e, classes) {
    var dataRef, index, target, id, list;
    var self = this;

    target = e.target.closest('LI');

    if (!target) return;

    index = dataRef = target.getAttribute('data-ref');
    id = target.getAttribute('id');

    if ('' + parseInt(index, 10) !== index) {
      list = this.state.list || this.props.list;
      index = list.findIndex(li => {
        return li.props.id === id;
      });
    }

    classes[index] = this.props.selectClass;

    this.setState({
      classes,
    });

    if (typeof this.props.selectRespond === 'function') {
      this.props.selectRespond(dataRef);
    }

    this.requireForComplete.map(key => {
      if (key === dataRef && self.refs[key]) {
        self.refs[key].complete();
        return;
      } else if (key === id && self.refs[id]) {
        self.refs[id].complete();
        return;
      }
    });
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
    return classNames('selectable', super.getClassNames());
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
    return this.props.list.map((li, key) => {
      var dataRef = li.props['data-ref'] || key;
      var ref = li.ref || li.props.id || dataRef;
      var message = li.props.message || '' + key;
      return (
        <li.type
          {...li.props}
          type="li"
          className={this.getClass(key, li)}
          message={message}
          data-ref={dataRef}
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
        <ul className={this.getClassNames()} onClick={this.state.selectFunction.bind(this)}>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

Selectable.defaultProps = _.merge(
  skoash.Component.defaultProps, {
  list: [
    <li></li>,
    <li></li>,
    <li></li>,
    <li></li>
  ],
  selectClass: 'SELECTED'
});

export default Selectable;
