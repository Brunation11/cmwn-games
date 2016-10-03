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
    var ref, dataRef, target, isCorrect, self = this;

    target = e.target.closest('LI');

    if (!target) return;

    dataRef = target.getAttribute('data-ref');
    ref = self.refs[dataRef];

    isCorrect = (ref && ref.props && ref.props.correct) || (!self.props.answers || !self.props.answers.length || self.props.answers.indexOf(dataRef) !== -1);

    if (self.props.allowDeselect && classes[dataRef]) {
      delete classes[dataRef];
    } else if (isCorrect) {
      classes[dataRef] = self.state.selectClass;
    }

    self.setState({
      classes,
    });

    self.callProp('selectRespond', dataRef);

    if (self.props.chooseOne) {
      self.requireForComplete = [dataRef];
    }

    if (self.props.dataTarget) {
      self.updateGameState({
        path: self.props.dataTarget,
        data: {
          target: ref
        }
      });
    }

    if (self.props.completeListOnClick) {
      if (self.state.classes.length) {
        self.requireForComplete.map(key => {
          self.refs[key].complete();
        });
      }
    }

    self.requireForComplete.map(key => {
      if (key === dataRef && self.refs[key]) {
        self.refs[key].complete();
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
    return classNames(
      li.props.className,
      this.state.classes[key],
      this.state.classes[li.props['data-ref']]
    );
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
        ref="bin"
      />
    );
  }

  renderList() {
    var list = this.props.list || this.state.list;
    return list.map((li, key) => {
      var dataRef = li.props['data-ref'] || key;
      var ref = li.ref || li.props.id || dataRef;
      var message = li.props.message || '' + key;
      return (
        <li.type
          {...li.props}
          type="li"
          className={this.getClass(key, li)}
          message={message}
          data-message={message}
          data-ref={dataRef}
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

Selectable.defaultProps = _.defaults({
  list: [
    <li></li>,
    <li></li>,
    <li></li>,
    <li></li>
  ],
  selectClass: 'SELECTED',
  completeListOnClick: true
}, skoash.Component.defaultProps);

export default Selectable;
