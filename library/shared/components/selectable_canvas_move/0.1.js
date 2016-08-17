import _ from 'lodash';
import classNames from 'classnames';

import Selectable from 'shared/components/selectable/0.1';
import SelectableCanvas from 'shared/components/selectable_canvas/0.1';

var Item = function (component, context) {
  this.position = {
    x: 100,
    y: 100,
  };
  this.margin = 0;
  this.left = 0;
  this.selected = false;
  this.speed = ((Math.random() * 5) % 3 + 2) / 2;

  this.component = component;
  this.image = ReactDOM.findDOMNode(component);

  this.context = context;

  this.backgroundSize = {
    width: 200,
    height: 200
  };
  this.size = {
    width: 360,
    height: 460
  };

  this.render = function () {
    this.context.drawImage(this.image, this.left, this.image.getAttribute('top') * this.image.naturalHeight / 15, this.size.width, this.size.height, this.position.x, this.position.y, this.backgroundSize.width, this.backgroundSize.height);
  };

  this.hover = function () {
    if (!this.selected) this.left = this.image.naturalWidth / 3;
  };

  this.unhover = function () {
    if (!this.selected) this.left = 0;
  };

  this.select = function () {
    this.selected = true;
    this.left = this.image.naturalWidth * 2 / 3;
  };

  this.deselect = function () {
    this.selected = false;
    this.left = 0;
  };

  // this.is = function (_type) {
  //   return $(this.image).is(_type);
  // };

  // this.id = function () {
  //   return this.$image.id();
  // };

  return this;
};

class SelectableCanvasMove extends SelectableCanvas {
  constructor() {
    super();

    this.state = {
      classes: {},
      selectFunction: this.highlight,
    };

    this.move = this.move.bind(this);
  }

  bootstrap() {
    Selectable.prototype.bootstrap.call(this);

    this.buffer = document.createElement('canvas');
    this.bctx = this.buffer.getContext('2d');

    this.context = this.refs.canvas.getContext('2d');

    this.el = ReactDOM.findDOMNode(this);

    this.items = [];

    _.forIn(this.refs, component => {
      if (!(component instanceof skoash.Image)) return;
      this.items.push(new Item(component, this.context));
    });
  }

  start() {
    super.start();

    this.isRunning = true;
    window.requestAnimationFrame(this.move);

    // this.items.forEach(item => {
    //   item.deselect();
    // });
  }

  move() {
    var self = this;
    _.forEach(this.items, item => {
      var y, height;
      item.position.y -= item.speed;

      y = item.position.y + item.margin;
      height = item.size.height;

      if (y + height < 0) item.position.y = self.height() * 1.1;

      item.render(self.refs.canvas);
    });
  }

  selectHelper(e, classes) {
    var offset, target;

    offset = this.el.getBoundingClientRect();
    this.buffer.width = offset.width;
    this.buffer.height = offset.height;

    this.items.some((item, key) => {
      if (this.isImageTarget(item, e, offset)) {
        target = this.refs[key];
        target.complete();
        classes[key] = this.props.selectClass;
        return true;
      }

      return false;
    });

    this.setState({
      classes,
    });

    if (target && typeof this.props.onSelect === 'function') {
      this.props.onSelect.call(this, target);
    }

    this.checkComplete();
  }

  isImageTarget(item, e, parentOffset) {
    var offset, pixel;

    offset = {
      left: item.left,
      top: item.position.y,
    };

    this.bctx.clearRect(0, 0, this.buffer.width, this.buffer.height);
    this.bctx.drawImage(item.image, offset.left - parentOffset.left, offset.top - parentOffset.top, offset.width, offset.height);
    pixel = this.bctx.getImageData(e.pageX, e.pageY, 1, 1);

    this.bctx.fillStyle = 'blue';
    this.bctx.fillRect(e.pageX, e.pageY, 5, 5);

    // opaque pixel
    return pixel.data[3] > 0;
  }

  getClassNames() {
    return classNames('selectable-canvas-move', super.getClassNames());
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        <div className="items hidden">
          {this.renderContentList('items')}
        </div>
        <canvas
          ref="canvas"
          onClick={this.state.selectFunction.bind(this)}
        />
      </div>
    );
  }
}

SelectableCanvasMove.defaultProps = _.defaults({
  items: []
}, SelectableCanvas.defaultProps);

export default SelectableCanvasMove;
