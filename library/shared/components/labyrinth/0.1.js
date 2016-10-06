import classNames from 'classnames';

const MAP = 'map';
const CANVAS = 'canvas';
const IMAGE = 'image';
const PLAYER = 'player';

class Labyrinth extends skoash.Component {
  constructor() {
    super();

    this.update = this.update.bind(this);
  }

  bootstrap() {
    super.bootstrap();

    this[CANVAS] = ReactDOM.findDOMNode(this.refs[CANVAS]);

    this.setState({
      playerX: this.props.startX,
      playerY: this.props.startY,
    });

    window.requestAnimationFrame(this.update);
  }

  update() {
    var playerX = this.state.playerX, playerY = this.state.playerY;

    switch (this.props.input) {
    case 'up': playerY -= this.props.speed; break;
    case 'down': playerY += this.props.speed; break;
    case 'left': playerX -= this.props.speed; break;
    case 'right': playerX += this.props.speed; break;
    }

    this.setState({
      playerX,
      playerY,
    });
  }

  getPlayerStyle() {
    return {
      left: this.state.playerX,
      top: this.state.playerY,
    };
  }

  getClassNames() {
    return classNames('labyrinth', super.getClassNames());
  }

  render() {
    return (
      <div {...this.props} className={this.getClassNames()}>
        <skoash.Image
          ref={MAP}
          className={MAP}
          src={this.props.map}
        />
        <canvas
          ref={CANVAS}
          className={CANVAS}
        />
        <skoash.Image
          ref={IMAGE}
          className={IMAGE}
          src={this.props.img}
        />
        <div
          ref={PLAYER}
          className={PLAYER}
          style={this.getPlayerStyle()}
        />
      </div>
    );
  }
}

Labyrinth.defaultProps = _.defaults({
  img: '',
  map: '',
  input: null,
  startX: 0,
  startY: 0,
  speed: 5,
}, skoash.Component.defaultProps);

export default Labyrinth;
