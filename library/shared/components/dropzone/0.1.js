import Draggable from '../draggable/0.1.js';

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

  bootstrap() {
    super.bootstrap();

    this.dropzones = this.props.dropzones || this.dropzones;
    this.draggables = this.props.draggables || this.draggables;
  }

  start() {
    super.start();
    this.prepareDropzones();
  }

  dragRespond(message) {
    if (this.audio.drag) {
      this.audio.drag.play();
    }

    if (typeof this.props.dragRespond === 'function') {
      this.props.dragRespond.call(this, message);
    }
  }

  dropRespond(message, corners) {
    var self = this, isInBounds;

    isInBounds = self.dropzones.some((dropzone, key) => {
      var dropzoneRef = self.refs[`dropzone-${key}`];
      if (skoash.util.doIntersect(corners, dropzoneRef.corners)) {
        self.inBounds(message, key);
        return true;
      }
      return false;
    });

    if (!isInBounds) self.outOfBounds();
  }

  inBounds(message, dropzoneKey) {
    var dropzoneRef = this.refs[`dropzone-${dropzoneKey}`];
    if (!dropzoneRef.props.answers || dropzoneRef.props.answers.indexOf(message) !== -1) {
      this.correct(message, dropzoneKey);
    } else {
      this.incorrect(message);
    }
  }

  outOfBounds() {
    // respond to out of bounds drop
    if (this.audio.out) {
      this.audio.out.play();
    }
  }

  correct(message, dropzoneKey) {
    // respond to correct drop
    if (this.audio.correct) {
      this.audio.correct.play();
    }

    this.refs[message].markCorrect();

    if (typeof this.props.correctRespond === 'function') {
      this.props.correctRespond.call(this, message, dropzoneKey);
    }
  }

  incorrect(message) {
    // respond to incorrect drop
    if (this.audio.incorrect) {
      this.audio.incorrect.play();
    }
  }

  renderAssets() {
    if (this.props.assets) {
      return this.props.assets.map((asset, key) =>
        <skoash.Audio
          {...asset.props}
          ref={asset.props['data-ref'] || ('asset-' + key)}
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
        className={this.getClass()}
        checkComplete={false}
        ref={`dropzone-${key}`}
        key={key}
      />
    );
  }

  renderDraggables() {
    return this.draggables.map((item, key) => {
      return (
        <Draggable
          {...item.props}
          ref={item.props.message}
          key={key}
          dragRespond={this.dragRespond}
          dropRespond={this.dropRespond}
        />
      );
    });
  }

  getClass() {
    return classNames(
      'dropzone',
    );
  }

  getClassNames() {
    return classNames(
      'dropzone-container',
      super.getClassNames,
    );
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        {this.renderAssets()}
        {this.renderDropzones()}
        <ul>
          {this.renderDraggables()}
        </ul>
        <ul>
          {this.renderMoreDraggables()}
        </ul>
      </div>
    );
  }
}

export default Dropzone;
