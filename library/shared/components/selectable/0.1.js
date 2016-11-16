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
    super.start();

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

    if (this.loadData && typeof this.loadData === 'object') {
      _.forIn(this.loadData, (ref, key) => {
        this.loadSelectedData(ref, key);
      });
    }
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

  loadSelectedData(ref, key) {
    var classes = this.state.classes;
    classes[key] = ref;

    this.setState({classes});

    if (this.props.chooseOne) this.requireForComplete = [key];

    this.requireForComplete.map(key2 => {
      if (key2 === key && this.refs[key2]) {
        if (!_.isEmpty(classes)) {
          this.refs[key2].complete();
        } else {
          this.refs[key2].incomplete();
        }
      }
    });

    this.updateGameState({
      path: 'game',
      data: {
        complete: true
      }
    });
  }

  selectHelper(e, classes) {
    var ref, dataRef, target, isCorrect, self = this;

    target = e.target.closest('LI');
    dataRef = target.getAttribute('data-ref');

    if (!target) return;

    ref = self.refs[dataRef];

    isCorrect = (ref && ref.props && ref.props.correct) || (!self.props.answers || !self.props.answers.length || self.props.answers.indexOf(dataRef) !== -1);

    if (isCorrect) {
      if (self.props.allowDeselect && self.state.classes[dataRef]) {
        delete classes[dataRef];
      } else {
        classes[dataRef] = self.state.selectClass;
      }
    }

    self.setState({
      classes,
    });

    self.props.selectRespond.call(self, dataRef);
    self.props.onSelect.call(self, dataRef);

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

    self.requireForComplete.map(key => {
      if (key === dataRef && self.refs[key]) {
        if (!_.isEmpty(classes)) {
          self.refs[key].complete();
        } else {
          self.refs[key].incomplete();
        }
      }
    });
  }

  select(e) {
    var classes = {};
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
  completeListOnClick: true,
  selectRespond: _.identity,
  onSelect: _.identity,
}, skoash.Component.defaultProps);

export default Selectable;
