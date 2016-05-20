import classNames from 'classnames';

class Draggable extends play.Component {
  constructor() {
    super();

    this.boundMouseDown = this.mouseDown.bind(this);
    this.boundMouseMove = this.mouseMove.bind(this);
    this.boundMouseUp = this.mouseUp.bind(this);
  }

  mouseDown(e) {
    this.setState({
      dragging: true,
      return: false,
      offsetX: e.offsetX,
      offsetY: e.offsetY,
    });
    window.addEventListener('mousemove', this.boundMouseMove);
    window.addEventListener('mouseup', this.boundMouseUp);
  }

  mouseMove(e) {
    this.setState({
      x: (e.x-this.state.offsetX)/this.state.scale,
      y: (e.y-this.state.offsetY)/this.state.scale,
    })
  }

  mouseUp(e) {
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
    window.removeEventListener('mousemove', this.boundMouseMove);
    window.removeEventListener('mouseup', this.boundMouseUp);
  }

  componentDidMount() {
    play.Component.prototype.componentDidMount.call(this);

    this.refs['el'].addEventListener('mousedown', this.boundMouseDown);

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
