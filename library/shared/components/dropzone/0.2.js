import Draggable from '../draggable/0.2.js';

import classNames from 'classnames';

class Dropzone extends skoash.Component {
  constructor() {
    super();

    this.dropzones = [
      <skoash.Component answers="drag" />
    ];

    this.draggables = [
      <Draggable message={'drag'}>drag me!</Draggable>,
      <Draggable message={'return'} return={true} >return</Draggable>
    ];

    this.contains = [];

    this.dropRespond = this.dropRespond.bind(this);
    this.dragRespond = this.dragRespond.bind(this);
  }

  prepareDropzones() {
    var self = this;

    self.dropzones.map((dropzone, key) => {
      var dropzoneRef = this.refs[`dropzone-${key}`];
      if (dropzoneRef) {
        dropzoneRef.corners = self.getCorners(ReactDOM.findDOMNode(dropzoneRef));
      }
    });
  }

  getCorners(el) {
    var top, left, width, height, corners = [];

    left = 0;
    top = 0;
    width = el.offsetWidth;
    height = el.offsetHeight;

    while (el) {
      if (el.className && el.className.indexOf('screen') !== -1) {
        break;
      }

      left += el.offsetLeft || 0;
      top += el.offsetTop || 0;
      el = el.offsetParent;
    }

    for (var i = 0; i < 4; i++) {
      corners.push({
        x: left + width * (i === 1 || i === 2 ? 1 : 0),
        y: top + height * (i > 1 ? 1 : 0),
      });
    }

    return corners;
  }

  componentWillMount() {
    this.dropzones = this.props.dropzones || this.dropzones;
    this.draggables = this.props.draggables || this.draggables;
  }

  start() {
    var self = this, dropzone, draggable;
    play.Component.prototype.start.call(this);
    this.prepareDropzones();

    // if (self.loadData && typeof self.loadData === 'object') {
      // if (self.loadData.type === 'drag-n-drop') this.loadDragNDropData();
      // if (self.loadData.type === 'multi-answer') this.loadMultiAnswerData {
      // }
    //     this.loadDragNDropData();
    //   } else {
    //     this.loadMultiAsnwerData();
    //   }
    // }


    if (self.loadData && typeof self.loadData === 'object') {
      _.forIn(self.loadData, (ref1, key1) => {
        if (ref1.ref && ref1.state) {
          _.forIn(self.refs, (ref2, key2) => {
            if (key2.indexOf('draggable-') === -1) return;
            if (self.refs[key1] && ref2.props.message === ref1.ref) {
              dropzone = self.refs[key1];
              draggable = ref2;
              dropzone.setState({content: draggable})
              draggable.setState(ref1.state);
              self.correct(draggable, key1.replace('dropzone-', ''));
            }
          });
        } else {
          _.forIn(self.loadData, (ref1, key1) => {
            self.refs[key1].setState({content: []});
            _.forIn(self.refs, (ref2, key2) => {
              if (key2.indexOf('draggable-') === -1) return;
              if (_.includes(ref1, ref2.props.message)) {
                self.refs[key1].state.content.push(ref2);
                ref2.markCorrect();
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
          dropzone.setState({content: draggable})
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

  dragRespond(draggable) {
    if (this.audio.drag) {
      this.audio.drag.play();
    }

    if (typeof this.props.dragRespond === 'function') {
      this.props.dragRespond.call(this, draggable);
    }
  }

  dropRespond(draggable, corners) {
    var self = this, isInBounds;
    isInBounds = self.dropzones.some((dropzone, key) => {
      var dropzoneRef = self.refs[`dropzone-${key}`];
      if (skoash.util.doIntersect(corners, dropzoneRef.corners)) {
        self.inBounds(draggable, key);
        return true;
      }
      return false;
    });

    if (!isInBounds) self.outOfBounds(draggable);
  }

  inBounds(draggable, dropzoneKey) {
    var dropzoneRef = this.refs[`dropzone-${dropzoneKey}`];
    if (!dropzoneRef.props.answers || dropzoneRef.props.answers.indexOf(draggable.props.message) !== -1) {
      this.correct(draggable, dropzoneKey);
    } else {
      this.incorrect(draggable);
    }
  }

  outOfBounds(draggable) {
    // respond to out of bounds drop
    if (this.audio.out) {
      this.audio.out.play();
    }
    this.incorrect(draggable);
  }

  correct(draggable, dropzoneKey) {
    // respond to correct drop
    draggable.markCorrect();
    if (this.audio.correct) {
      this.audio.correct.play();
    }
    if (typeof this.props.correctRespond === 'function') {
      this.props.correctRespond.call(this, draggable, dropzoneKey);
    }
  }

  incorrect(draggable) {
    // respond to incorrect drop
    draggable.markIncorrect();
    if (this.audio.incorrect) {
      this.audio.incorrect.play();
    }
  }

  renderAssets() {
    if (this.props.assets) {
      return this.props.assets.map((asset, key) =>
        <asset.type
          {...asset.props}
          ref={asset.ref || asset.props['data-ref'] || ('asset-' + key)}
          key={key}
          data-ref={key}
        />
      );
    }

    return null;
  }

  renderDropzones() {
    return this.dropzones.map((component, key) =>
      <component.type
        {...component.props}
        className={this.getClassNames()}
        checkComplete={false || this.props.checkComplete}
        ref={`dropzone-${key}`}
        key={key}
      />
    );
  }

  renderDraggables() {
    return this.draggables.map((item, key) =>
      <li key={key}>
        <Draggable
          {...item.props}
          ref={"draggable-" + key}
          dragRespond={this.dragRespond}
          dropRespond={this.dropRespond}
        />
      </li>
    );
  }

  getClassNames() {
    return classNames({
      dropzone: true,
    });
  }

  render() {
    return (
      <div>
        {this.renderAssets()}
        {this.renderDropzones()}
        <ul>
          {this.renderDraggables()}
        </ul>
      </div>
    );
  }
}

export default Dropzone;
