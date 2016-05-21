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
    var startX, startY, endX, endY, grabX, grabY;

    if (e.target !== this.refs['el']) return;

    grabX = e.offsetX;
    grabY = e.offsetY;

    startX = endX = e.x - grabX;
    startY = endY = e.y - grabY;

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
      endX: e.x - this.state.grabX,
      endY: e.y - this.state.grabY,
    });
  }

  endEvent() {
    var x, y;

    if (this.props.return) {
      this.setState({
        dragging: false,
        return: this.props.return,
        endX: this.state.startX,
        endY: this.state.startY,
      });
    } else {
      this.setState({
        dragging: false,
        return: this.props.return,
      });
    }

    if (typeof this.props.dropRespond === 'function') {
      this.props.dropRespond();
    }
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
    this.bootstrap();
  }

  bootstrap() {
    play.Component.prototype.bootstrap.call(this);

    this.setZoom();

    this.refs['el'].addEventListener('mousedown', this.boundMouseDown);
    this.refs['el'].addEventListener('touchstart', this.boundTouchStart);

    window.addEventListener('resize', this.setZoom.bind(this));
  }

  setZoom() {
    this.setState({
      zoom: play.trigger('getState').scale,
    });
  }

  getStyle() {
    var x, y;

    x = ((this.state.endX-this.state.startX)/this.state.zoom);
    y = ((this.state.endY-this.state.startY)/this.state.zoom);

    return {
      transform: 'translateX('+x+'px) translateY('+y+'px)',
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
