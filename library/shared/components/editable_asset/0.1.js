import Draggable from '../draggable/0.1.js';

import classNames from 'classnames';

class EditableAsset extends Draggable {
  constructor() {
    super();

    this.state = {
      width: 0,
      height: 0,
      left: 0,
      top: 0,
      scale: .75,
      minScale: .1,
      maxScale: 1,
      rotation: 0,
      layer: 1000,
      zoom: 1,
      active: false,
      valid: true,
      corners: [],
      lastValid: {},
    };

    this.boundScale = this.scale.bind(this);
    this.boundAdjustScale = this.adjustScale.bind(this);
    this.boundOffScale = this.offScale.bind(this);

    this.boundRotate = this.rotate.bind(this);
    this.boundAdjustRotation = this.adjustRotation.bind(this);
    this.boundOffRotate = this.offRotate.bind(this);
  }

  shouldDrag() {
    return this.state.active;
  }

  activate() {
    this.setState({
      active: true,
    });

    if (typeof this.props.deactivateItems === 'function') {
      this.props.deactivateItems(this.props['data-ref'], this.props.type);
    }
  }

  deactivate() {
    var self = this;

    if (!this.state.valid) {
      this.setState({
        left: this.state.lastValid.left || this.state.left,
        top: this.state.lastValid.top || this.state.top,
        scale: this.state.lastValid.scale || this.state.scale,
        rotation: this.state.lastValid.rotation || this.state.rotation,
        active: false,
      }, () => {
        setTimeout(() => {
          self.checkItem();
        }, 0);
      });
    } else {
      this.setState({
        active: false,
      });
    }
  }

  moveEvent(e) {
    this.setState({
      endX: e.pageX - this.state.grabX,
      endY: e.pageY - this.state.grabY,
      left: ((e.pageX - this.state.grabX - this.state.startX) / this.state.zoom),
      top: ((e.pageY - this.state.grabY - this.state.startY) / this.state.zoom),
    });
    this.checkItem();
  }

  delete() {
    if (typeof this.props.deleteItem === 'function') {
      this.props.deleteItem(this.props['data-ref'], this.props.type);
    }
  }

  rotate() {
    this.refs.el.parentNode.addEventListener('mousemove', this.boundAdjustRotation);
    this.refs.el.parentNode.addEventListener('mouseup', this.boundOffRotate);
  }

  offRotate() {
    this.refs.el.parentNode.removeEventListener('mousemove', this.boundAdjustRotation);
    this.refs.el.parentNode.removeEventListener('mouseup', this.boundOffRotate);
  }

  adjustRotation(e) {
    var rotation, deltaX, deltaY;

    deltaX = (e.pageX / this.state.zoom) - (this.refs.el.offsetParent.offsetLeft) - (this.state.left + this.state.width / 2);
    deltaY = (e.pageY / this.state.zoom) - (this.refs.el.offsetParent.offsetTop) - (this.state.top + this.state.height / 2);

    rotation = Math.atan2(deltaY, deltaX) + (Math.PI / 4) % (2 * Math.PI);

    this.setState({
      rotation,
    });

    this.checkItem();
  }

  layer() {
    var layer, self = this;

    layer = this.state.layer - 1;

    this.setState({
      layer,
    }, () => {
      if (typeof self.props.relayerItems === 'function') {
        self.props.relayerItems(self.props.type);
      }
    });
  }

  relayer(layer) {
    this.setState({
      layer,
    });
  }

  scale() {
    this.refs.el.parentNode.addEventListener('mousemove', this.boundAdjustScale);
    this.refs.el.parentNode.addEventListener('mouseup', this.boundOffScale);
  }

  offScale() {
    this.refs.el.parentNode.removeEventListener('mousemove', this.boundAdjustScale);
    this.refs.el.parentNode.removeEventListener('mouseup', this.boundOffScale);
  }

  adjustScale(e) {
    var scale, deltaX, deltaY, delta, base;

    deltaX = (e.pageX / this.state.zoom) - (this.refs.el.offsetParent.offsetLeft) - (this.state.left + this.state.width / 2);
    deltaY = (e.pageY / this.state.zoom) - (this.refs.el.offsetParent.offsetTop) - (this.state.top + this.state.height / 2);

    delta = Math.pow(Math.pow(deltaX, 2) + Math.pow(deltaY, 2), .5);
    base = Math.pow(Math.pow(this.state.width / 2, 2) + Math.pow(this.state.height / 2, 2), .5);

    scale = Math.max(Math.min(delta / base, 1), this.state.minScale);

    this.setState({
      scale,
    });

    this.checkItem();
  }

  checkItem() {
    var valid;

    this.setCorners();

    if (typeof this.props.checkItem === 'function') {
      valid = this.props.checkItem(this.props['data-ref'], this.props.type);

      if (valid) {
        this.setState({
          valid,
          lastValid: new Object(this.state),
        });
      } else {
        this.setState({
          valid,
        });
      }
    }
  }

  setCorners() {
    var center, distance, angle, corners = [];

    center = {
      x: this.state.left + this.state.width / 2,
      y: this.state.top + this.state.height / 2,
    };

    distance = Math.pow(Math.pow(this.state.width * this.state.scale / 2, 2) + Math.pow(this.state.height * this.state.scale / 2, 2), .5);

    for (var i = 0; i < 4; i++) {
      angle = this.state.rotation;
      angle += (i < 2 ? 0 : Math.PI);
      angle += Math.pow(-1, i) * Math.atan2(this.state.height, this.state.width);

      corners.push({
        x: center.x + distance * Math.cos(angle),
        y: center.y + distance * Math.sin(angle),
      });
    }

    this.setState({
      corners,
    });
  }

  getSize() {
    var image, self = this;

    image = new Image();

    image.onload = () => {
      var width, height, minDim, minScale;

      minDim = this.props.minDim || 100;
      width = image.width;
      height = image.height;

      minScale = Math.max(minDim / width, minDim / height);

      self.setState({
        width,
        height,
        minScale,
        scale: this.props.state.scale || Math.max(this.state.scale, minScale),
      }, () => {
        self.checkItem();
      });
    };

    image.src = this.props.src;
  }

  getLayer() {
    var layer = 1000;

    if (this.props.state.layer) {
      layer = this.props.state.layer;
    } else {
      switch (this.props.type) {
      case 'background':
        layer = 1;
        break;
      case 'message':
        layer = 10000;
        break;
      }
    }

    this.setState({
      layer,
    });
  }

  attachEvents() {
    this.refs.scale.addEventListener('mousedown', this.boundScale);
    this.refs.rotate.addEventListener('mousedown', this.boundRotate);
  }

  componentDidMount() {
    this.bootstrap();
  }

  bootstrap() {
    Draggable.prototype.bootstrap.call(this);

    if (this.props.state) {
      this.setState(this.props.state);
    }

    this.getSize();
    this.getLayer();

    this.attachEvents();
  }

  componentDidUpdate() {
    this.attachEvents();
  }

  getButtonStyle() {
    var style, transform = '';

    transform += 'scale(' + (1 / this.state.scale) + ') ';
    transform += 'rotate(' + (-this.state.rotation) + 'rad) ';

    style = {
      transform,
    };

    return style;
  }

  getStyle() {
    var style, transform = '';

    transform += 'scale(' + this.state.scale + ') ';
    transform += 'rotate(' + this.state.rotation + 'rad) ';

    style = {
      backgroundImage: 'url("' + this.props.src + '")',
      width: this.state.width,
      height: this.state.height,
      left: this.state.left,
      top: this.state.top,
      transform,
      zIndex: this.state.layer,
    };

    return style;
  }

  getClasses() {
    return classNames({
      DRAGGING: this.state.dragging,
      RETURN: this.state.return,
      ACTIVE: this.state.active,
      INVALID: !this.state.valid,
      'editable-asset': true,
      [this.props.type]: true,
    });
  }

  renderButtons() {
    return (
      <div className={'buttons'}>
        <button
          className="delete"
          style={this.getButtonStyle()}
          onClick={this.delete.bind(this)}
        >X</button>
        <button
          ref="rotate"
          className="rotate"
          style={this.getButtonStyle()}
        >R</button>
        <button
          className="layer"
          onClick={this.layer.bind(this)}
          style={this.getButtonStyle()}
        >L</button>
        <button
          ref="scale"
          className="scale"
          style={this.getButtonStyle()}
        >S</button>
      </div>
    );
  }

  render() {
    return (
      <li
        ref="el"
        className={this.getClasses()}
        style={this.getStyle()}
        onClick={this.activate.bind(this)}
      >
        {this.renderButtons()}
      </li>
    );
  }
}

export default EditableAsset;
