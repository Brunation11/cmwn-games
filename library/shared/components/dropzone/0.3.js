import classNames from 'classnames';

class Dropzone extends skoash.Component {
  constructor() {
    super();

    this.contains = [];
  }

  bootstrap() {
    super.bootstrap();

    this.DOMNode = ReactDOM.findDOMNode(this);
  }

  start() {
    var self = this, dropzone, draggable;

    super.start();

    self.corners = self.getCorners(self.DOMNode);

    self.dropzoneCorners = _.map(self.props.dropzones, (value, key) =>
      self.getCorners(ReactDOM.findDOMNode(self.refs[`dropzone-${key}`]))
    );

    if (self.loadData && typeof self.loadData === 'object') {
      _.forIn(self.loadData, (ref1, key1) => {
        if (ref1.ref && ref1.state) {
          _.forIn(self.refs, (ref2, key2) => {
            if (key2.indexOf('draggable-') === -1) return;
            if (self.refs[key1] && ref2.props.message === ref1.ref) {
              dropzone = self.refs[key1];
              draggable = ref2;
              dropzone.setState({content: draggable});
              draggable.setState(ref1.state);
              self.correct(draggable, key1.replace('dropzone-', ''));
            }
          });
        } else {
          _.forIn(self.loadData, (ref2, key2) => {
            self.refs[key2].setState({content: []});
            _.forIn(self.refs, (ref3, key3) => {
              if (key3.indexOf('draggable-') === -1) return;
              if (_.includes(ref2, ref3.props.message)) {
                self.refs[key2].state.content.push(ref3);
                ref3.markCorrect();
              }
            });
          });
        }
      });
    }
  }

  loadDragNDropData() {
    var self = this, dropzone, draggable;
    _.forIn(self.loadData, (ref1, key1) => {
      _.forIn(self.refs, (ref2, key2) => {
        if (key2.indexOf('draggable-') === -1) return;
        if (self.refs[key1] && ref2.props.message === ref1.ref) {
          dropzone = self.refs[key1];
          draggable = ref2;
          dropzone.setState({content: draggable});
          draggable.setState(ref1.state);
          self.correct(draggable, key1.replace('dropzone-', ''));
        }
      });
    });
  }

  loadMultiAsnwerData() {
    var self = this, dropzone, draggable;
    _.forIn(self.loadData, (ref1, key1) => {
      dropzone = self.refs[key1];
      dropzone.setState({content: []});
      _.forIn(self.refs, (ref2, key2) => {
        if (key2.indexOf('draggable-') === -1) return;
        draggable = ref2;
        if (_.includes(ref1, draggable.props.message)) {
          dropzone.state.content.push(draggable);
          draggable.markCorrect();
        }
      });
    });
  }

  getCorners(el) {
    var offset, corners = [];

    offset = el.getBoundingClientRect();

    for (var i = 0; i < 4; i++) {
      corners.push({
        x: offset.left + offset.width * (i === 1 || i === 2 ? 1 : 0),
        y: offset.top + offset.height * (i > 1 ? 1 : 0),
      });
    }

    return corners;
  }

  onDrop(dropped) {
    var droppedDOM, corners, dropzone;

    droppedDOM = dropped.DOMNode || ReactDOM.findDOMNode(dropped);
    corners = this.getCorners(droppedDOM);

    dropzone = _.find(this.props.dropzones, (value, key) => {
      var dropzoneRef = this.refs[`dropzone-${key}`];
      if (skoash.util.doIntersect(corners, this.dropzoneCorners[key])) {
        return dropzoneRef;
      }
    });

    if (dropzone) {
      this.inBounds(dropped, dropzone);
    } else {
      this.outOfBounds(dropped);
    }
  }

  inBounds(dropped, dropzoneRef) {
    if (!dropzoneRef.props.answers || dropzoneRef.props.answers.indexOf(dropped.props.message) !== -1) {
      this.correct(dropped, dropzoneRef);
    } else {
      this.incorrect(dropped, dropzoneRef);
    }
  }

  outOfBounds(dropped) {
    // respond to an out of bounds drop
    this.playMedia('out');
    this.incorrect(dropped);
  }

  correct(dropped, dropzoneRef) {
    // respond to correct drop
    dropped.markCorrect();
    this.playMedia('correct');
    this.props.onCorrect.call(this, dropped, dropzoneRef);
  }

  incorrect(dropped, dropzoneRef) {
    // respond to incorrect drop
    dropped.markIncorrect();
    this.playMedia('incorrect');
    this.props.onIncorrect.call(this, dropped, dropzoneRef);
  }

  componentWillReceiveProps(props) {
    super.componentWillReceiveProps(props);

    if (props.dropped && props.dropped !== this.props.dropped) {
      this.onDrop(props.dropped);
    }
  }

  renderDropzones() {
    return _.map(this.props.dropzones, (component, key) =>
      <component.type
        {...component.props}
        ref={`dropzone-${key}`}
        key={key}
      />
    );
  }

  getClassNames() {
    return classNames('dropzones', super.getClassNames());
  }

  render() {
    return (
      <div {...this.props} className={this.getClassNames()}>
        {this.renderContentList('assets')}
        {this.renderDropzones()}
      </div>
    );
  }
}

Dropzone.defaultProps = _.defaults({
  dropzones: [<skoash.Component />],
  onCorrect: _.noop,
  onIncorrect: _.noop,
}, skoash.Component.defaultProps);

export default Dropzone;
