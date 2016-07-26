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

  shouldDrag() {
    return true;
  }

  markCorrect() {
    this.setState({
      correct: true,
    });
  }

  markIncorrect() {
    this.setState({
      correct: false,
    });

    if (this.props.returnOnIncorrect) {
      this.returnToStart();
    }
  }

  startEvent(e, cb) {
    var startX, startY, endX, endY, grabX, grabY;

    if (e.target !== this.refs.el) return;
    if (!this.shouldDrag()) return;

    grabX = e.offsetX;
    grabY = e.offsetY;

    startX = endX = e.pageX - grabX;
    startY = endY = e.pageY - grabY;

    if (!this.props.return) {
      startX = typeof this.state.startX === 'number' ? this.state.startX : startX;
      startY = typeof this.state.startY === 'number' ? this.state.startY : startY;
    }

    this.setState({
      dragging: true,
      return: false,
      startX,
      startY,
      grabX,
      grabY,
      endX,
      endY,
    });

    if (typeof this.props.dragRespond === 'function') {
      this.props.dragRespond(this);
    }

    if (typeof cb === 'function') {
      cb.call(this);
    }
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
    this.startEvent(e, this.attachMouseEvents);
  }

  touchStart(e) {
    this.startEvent(e, this.attachTouchEvents);
  }

  moveEvent(e) {
    this.setState({
      endX: e.pageX - this.state.grabX,
      endY: e.pageY - this.state.grabY,
    });
  }

  endEvent(cb) {
    this.dropRespond();

    if (this.props.return) {
      this.returnToStart();
    } else {
      this.setState({
        dragging: false,
        return: this.props.return,
      });
    }

    if (typeof cb === 'function') {
      cb.call(this);
    }
  }

  returnToStart() {
    var endX, endY;

    if (this.props.stayOnCorrect && this.state.correct) {
      endX = this.state.endX;
      endY = this.state.endY;
    } else {
      endX = this.state.startX;
      endY = this.state.startY;
    }

    this.setState({
      dragging: false,
      return: this.props.return,
      endX,
      endY,
    });
  }

  detachMouseEvents() {
    window.removeEventListener('mousemove', this.boundMoveEvent);
    window.removeEventListener('mouseup', this.boundMouseUp);
  }

  detachTouchEvents() {
    window.removeEventListener('touchmove', this.boundMoveEvent);
    window.removeEventListener('touchend', this.boundTouchEnd);
  }

  mouseUp() {
    this.endEvent(this.detachMouseEvents);
  }

  touchEnd() {
    this.endEvent(this.detachTouchEvents);
  }

  dropRespond() {
    var corners;

    corners = this.setCorners();

    if (typeof this.props.dropRespond === 'function') {
      this.props.dropRespond(this, corners);
    }
  }

  setCorners() {
    var top, left, width, height, el, corners = [];

    left = 0;
    top = 0;
    el = this.refs.el;
    width = el.offsetWidth;
    height = el.offsetHeight;

    while (el) {
      if (el.className.indexOf('screen') !== -1) {
        break;
      }

      left += el.offsetLeft || 0;
      top += el.offsetTop || 0;
      el = el.offsetParent;
    }

    left += ((this.state.endX - this.state.startX) / this.state.zoom);
    top += ((this.state.endY - this.state.startY) / this.state.zoom);

    for (var i = 0; i < 4; i++) {
      corners.push({
        x: left + width * (i === 1 || i === 2 ? 1 : 0),
        y: top + height * (i > 1 ? 1 : 0),
      });
    }

    this.setState({
      corners,
    });

    return corners;
  }

  componentDidMount() {
    this.bootstrap();
  }

  bootstrap() {
    play.Component.prototype.bootstrap.call(this);

    this.setZoom();

    this.refs.el.addEventListener('mousedown', this.boundMouseDown);
    this.refs.el.addEventListener('touchstart', this.boundTouchStart);

    window.addEventListener('resize', this.setZoom.bind(this));
  }

  setZoom() {
    this.setState({
      zoom: play.trigger('getState').scale,
    });
  }

  getStyle() {
    var x, y;

    x = ((this.state.endX - this.state.startX) / this.state.zoom);
    y = ((this.state.endY - this.state.startY) / this.state.zoom);

    return {
      transform: 'translateX(' + x + 'px) translateY(' + y + 'px)',
    };
  }

  getClassNames() {
    return classNames({
      draggable: true,
      [this.props.className]: true,
      DRAGGING: this.state.dragging,
      RETURN: this.state.return,
      CORRECT: this.state.correct,
    });
  }

  render() {
    return (
      <div
        ref="el"
        className={this.getClassNames()}
        style={this.getStyle()}
      >{this.props.children}</div>
    );
  }
}

export default Draggable;
