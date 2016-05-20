import classNames from 'classnames';

class Draggable extends play.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    var self = this;

    play.Component.prototype.componentDidMount.call(this);

    console.log(this.refs['el']);
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
      >drag me!</div>
    );
  }
}

export default Draggable;
