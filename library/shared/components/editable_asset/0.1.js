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
      rotate: 0,
      layer: 1000,
      zoom: 1,
    }

    this.boundScale = this.scale.bind(this);
    this.boundAdjustScale = this.adjustScale.bind(this);
    this.boundOffScale = this.offScale.bind(this);
  }

  moveEvent(e) {
    this.setState({
      endX: e.x - this.state.grabX,
      endY: e.y - this.state.grabY,
    });
    this.checkItem();
  }

  delete() {
    if (typeof this.props.deleteItem === 'function') {
      this.props.deleteItem(this.props['data-ref']);
    }
  }

  rotate() {
    
    this.checkItem();
  }

  layer() {
    var layer;

    layer = this.state.layer - 1;

    this.setState({
      layer,
    });
  }

  scale() {
    this.refs['el'].parentNode.addEventListener('mousemove', this.boundAdjustScale);
    this.refs['el'].parentNode.addEventListener('mouseup', this.boundOffScale);
  }

  offScale() {
    this.refs['el'].parentNode.removeEventListener('mousemove', this.boundAdjustScale);
    this.refs['el'].parentNode.removeEventListener('mouseup', this.boundOffScale);
  }

  adjustScale(e) {
    var scale, deltaX, deltaY, delta, base;

    // scale = this.state.scale;

    deltaX = e.x - (this.state.left + this.state.width * this.state.scale / 2) - this.refs.el.offsetParent.offsetLeft;
    deltaY = e.y - (this.state.top + this.state.height * this.state.scale / 2) - this.refs.el.offsetParent.offsetTop;

    delta = Math.pow(Math.pow(deltaX, 2) + Math.pow(deltaY, 2), .5);
    base = Math.pow(Math.pow(this.state.width / 2, 2) + Math.pow(this.state.height / 2, 2), .5);

    scale = Math.max(Math.min(delta / base, 1), this.state.minScale);

    this.setState({
      scale,
    });

    this.checkItem();
  }

  checkItem() {
    if (typeof this.props.checkItem === 'function') {
      this.props.checkItem(this.props['data-ref']);
    }
  }

  getClasses() {
    return classNames({
      'editable-asset': true,
      [this.props.type]: true,
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
        scale: Math.max(this.state.scale, minScale),
      });
    }

    image.src = this.props.src;
  }

  getLayer() {
    var layer = 1000;

    switch (this.props.type) {
      case 'background':
        layer = 1;
        break;
      case 'text':
        layer = 10000;
        break;
    }

    this.setState({
      layer,
    })
  }

  attachEvents() {
    this.refs['scale'].addEventListener('mousedown', this.boundScale);
  }

  componentDidMount() {
    Draggable.prototype.bootstrap.call(this);
    this.getSize();
    this.getLayer();
    this.attachEvents();
  }

  getStyle() {
    var style, x, y, transform = '';

    transform += 'scale('+this.state.scale+') ';
    transform += 'rotate('+this.state.rotate+'deg) ';

    if (typeof this.state.startX === 'number') {
      x = ((this.state.endX-this.state.startX)/this.state.zoom)/this.state.scale;
      y = ((this.state.endY-this.state.startY)/this.state.zoom)/this.state.scale;
      transform += 'translateX('+x+'px) ';
      transform += 'translatey('+y+'px) ';
    }

    style = {
      backgroundImage: 'url("'+this.props.src+'")',
      width: this.state.width,
      height: this.state.height,
      left: this.state.left,
      top: this.state.top,
      transform,
      zIndex: this.state.layer,
    };

    return style;
  }

  renderButtons() {
    return (
      <div>
        <button className="delete" onClick={this.delete.bind(this)}>X</button>
        <button ref="rotate" className="rotate">R</button>
        <button className="layer" onClick={this.layer.bind(this)}>L</button>
        <button ref="scale" className="scale">S</button>
      </div>
    );
  }

  render() {
    return (
      <li
        ref="el"
        className={this.getClasses()}
        style={this.getStyle()}
      >
        {this.renderButtons()}
      </li>
    );
  }
}

export default EditableAsset;
