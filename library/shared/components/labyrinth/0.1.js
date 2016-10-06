import classNames from 'classnames';

const MAP = 'map';
const CANVAS = 'canvas';
const IMAGE = 'image';
const PLAYER = 'player';
const BUFFER = 'buffer';
const CONTEXT = 'context';

class Labyrinth extends skoash.Component {
  constructor() {
    super();

    this.update = _.debounce(this.update.bind(this), 10);
  }

  onReady() {
    this[IMAGE] = ReactDOM.findDOMNode(this.refs[IMAGE]);
    this[MAP] = ReactDOM.findDOMNode(this.refs[MAP]);
    this[PLAYER] = ReactDOM.findDOMNode(this.refs[PLAYER]);
    this[BUFFER] = ReactDOM.findDOMNode(this.refs[CANVAS]);

    this[CONTEXT] = this[BUFFER].getContext('2d');

    this.setState({
      playerX: this.props.startX,
      playerY: this.props.startY,
    });
  }

  update() {
    var hasTrue, playerX = this.state.playerX, playerY = this.state.playerY;

    if (this.props.input.up) playerY -= this.props.speed;
    if (this.props.input.down) playerY += this.props.speed;
    if (this.props.input.left) playerX -= this.props.speed;
    if (this.props.input.right) playerX += this.props.speed;

    hasTrue = _.some(this.props.input, v => v);

    if (!this.isColliding(playerX, playerY)) {
      this.setState({
        playerX,
        playerY,
      }, () => {
        if (hasTrue) window.requestAnimationFrame(this.update);
      });
    } else {
      if (hasTrue) window.requestAnimationFrame(this.update);
      this.props.onCollide.call(this);
    }
  }

  isColliding(x, y) {
    var offset, playerOffset;
    offset = this[IMAGE].getBoundingClientRect();
    playerOffset = this[PLAYER].getBoundingClientRect();

    this[BUFFER].width = offset.width / this.props.scale;
    this[BUFFER].height = offset.height / this.props.scale;
    this[CONTEXT].clearRect(0, 0, this[BUFFER].width, this[BUFFER].height);
    this[CONTEXT].drawImage(this[MAP], 0, 0, this[BUFFER].width, this[BUFFER].height);

    return (
      // top
      !this[CONTEXT].getImageData(x + (playerOffset.width / this.props.scale / 2), y, 1, 1).data[0] ||
      // right
      !this[CONTEXT].getImageData(x + (playerOffset.width / this.props.scale), y + (playerOffset.width / this.props.scale / 2), 1, 1).data[0] ||
      // bottom
      !this[CONTEXT].getImageData(x + (playerOffset.width / this.props.scale / 2), y + (playerOffset.height / this.props.scale), 1, 1).data[0] ||
      // left
      !this[CONTEXT].getImageData(x, y + (playerOffset.height / this.props.scale / 2), 1, 1).data[0]
    );
  }

  getPlayerStyle() {
    return {
      left: this.state.playerX,
      top: this.state.playerY,
    };
  }

  componentWillReceiveProps(props) {
    super.componentWillReceiveProps(props);
    window.requestAnimationFrame(this.update);
  }

  getClassNames() {
    return classNames('labyrinth', super.getClassNames());
  }

  render() {
    return (
      <div {...this.props} className={this.getClassNames()}>
        <canvas
          ref={CANVAS}
          className={CANVAS}
        />
        <skoash.Image
          ref={MAP}
          className={MAP}
          src={this.props.map}
        />
        <skoash.Image
          ref={IMAGE}
          className={IMAGE}
          src={this.props.img}
        />
        {this.renderContentList('items')}
        {this.renderContentList('enimies')}
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
  input: {},
  startX: 0,
  startY: 0,
  speed: 1,
  scale: 1,
  items: [],
  enimies: [],
  onCollide: _.identity,
}, skoash.Component.defaultProps);

export default Labyrinth;
