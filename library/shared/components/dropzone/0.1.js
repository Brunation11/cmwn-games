import Draggable from '../draggable/0.1.js';

import classNames from 'classnames';

class Dropzone extends play.Component {
  constructor() {
    super();

    this.state = {
      corners: [],
    };

    this.boundDropRespond = this.dropRespond.bind(this);
  }

  setCorners() {
    var top, left, width, height, el, corners = [];

    left = 0;
    top = 0;
    el = this.refs.dropzone;
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

  start() {
    play.Component.prototype.start.call(this);
    this.setCorners();
  }

  dropRespond(message, corners) {
    // console.log(corners, this.state.corners);
    if (play.util.doIntersect(corners, this.state.corners)) {
      this.inBounds(message);
    } else {
      this.outOfBounds();
    }
  }

  inBounds(message) {
    if (message === this.props.message) {
      this.correct();
    } else {
      this.incorrect();
    }
  }

  outOfBounds() {
    // respond to out of bounds drop
  }

  correct() {
    // respond to correct drop
  }

  incorrect() {
    // respond to incorrect drop
  }

  getClassNames() {
    return classNames({
      dropzone: true,
    });
  }

  render() {
    return (
      <div>
        <div
          className={this.getClassNames()}
          ref={'dropzone'}
        ></div>
        <ul>
          <li>
            <Draggable message={'drag'} dropRespond={this.boundDropRespond}>drag me!</Draggable>
          </li>
          <li>
            <Draggable message={'return'} dropRespond={this.boundDropRespond} return={true} >return</Draggable>
          </li>
        </ul>
      </div>
    );
  }
}

export default Dropzone;
