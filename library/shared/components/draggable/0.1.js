import classNames from 'classnames';

class Draggable extends play.Component {
  constructor() {
    super();

    this.boundMouseDown = this.mouseDown.bind(this);
    this.boundMouseUp = this.mouseUp.bind(this);

    this.boundMoveEvent = this.moveEvent.bind(this);

    this.boundTouchStart = this.touchStart.bind(this);
    this.boundTouchEnd = this.touchEnd.bind(this);
  }

  startEvent(e) {
    var top, left, el;

    if (typeof this.state.top !== 'number') {
      left = 0;
      top = 0;
      el = this.refs['el'];

      while (el) {
          if (el.className.indexOf('screen') !== -1) {
            break;
          }

          left += el.offsetLeft || 0;
          top += el.offsetTop  || 0;
          el = el.offsetParent;
      }
    }

    this.setState({
      dragging: true,
      return: false,
      offsetX: e.offsetX,
      offsetY: e.offsetY,
      left,
      top,
    });
  }

  attachMouseEvents() {
    window.addEventListener('mousemove', this.boundMoveEvent);
    window.addEventListener('mouseup', this.boundMouseUp);
  }

  attachTouchEvents() {
    window.addEventListener('touchmove', this.boundMoveEvent);
    window.addEventListener('touchend', this.boundTouchEnd);
  }

  mouseDown(e) {
    this.startEvent(e);
    this.attachMouseEvents();
  }

  touchStart(e) {
    this.startEvent(e);
    this.attachTouchEvents();
  }

  moveEvent(e) {
    this.setState({
      x: (e.x-this.state.offsetX)/this.state.scale-this.state.left,
      y: (e.y-this.state.offsetY)/this.state.scale-this.state.top,
    })
  }

  endEvent() {
    var x, y;

    if (this.props.return) {
      x = 0;
      y = 0;
    }

    this.setState({
      dragging: false,
      return: this.props.return,
      x,
      y,
    });
  }

  dettachMouseEvents() {
    window.removeEventListener('mousemove', this.boundMoveEvent);
    window.removeEventListener('mouseup', this.boundMouseUp);
  }

  dettachTouchEvents() {
    window.removeEventListener('touchmove', this.boundMoveEvent);
    window.removeEventListener('touchend', this.boundTouchEnd);
  }

  mouseUp(e) {
    this.endEvent();
    this.dettachMouseEvents();
  }

  touchEnd(e) {
    this.endEvent();
    this.dettachTouchEvents();
  }

  componentDidMount() {
    play.Component.prototype.componentDidMount.call(this);
    this.setScale();

    this.refs['el'].addEventListener('mousedown', this.boundMouseDown);
    this.refs['el'].addEventListener('touchstart', this.boundTouchStart);

    window.addEventListener('resize', this.setScale.bind(this));
  }

  setScale() {
    this.setState({
      scale: play.trigger('getState').scale,
    });
  }

  getStyle() {
    return {
      transform: 'translateX('+this.state.x+'px) translateY('+this.state.y+'px)',
    }
  }

  getClassNames() {
    return classNames({
      DRAGGING: this.state.dragging,
      RETURN: this.state.return,
    });
  }

  render() {
    return (
      <div
        ref="el"
        className={"draggable "+this.getClassNames()}
        style={this.getStyle()}
      >{this.props.children}</div>
    );
  }
}

export default Draggable;
