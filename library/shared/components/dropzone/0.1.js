import Draggable from '../draggable/0.1.js';

import classNames from 'classnames';

class Dropzone extends play.Component {
  constructor() {
    super();

    this.state = {
      corners: [],
      list: [
        <Draggable message={'drag'} dropRespond={this.boundDropRespond}>drag me!</Draggable>,
        <Draggable message={'return'} dropRespond={this.boundDropRespond} return={true} >return</Draggable>
      ],
    };

    this.boundDropRespond = this.dropRespond.bind(this);
    this.boundDragRespond = this.dragRespond.bind(this);
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
    var list;

    list = this.props.list || this.state.list;

    this.setState({
      list,
    });

    play.Component.prototype.start.call(this);
    this.setCorners();
  }

  dragRespond() {
    if (this.audio.drag) {
      this.audio.drag.play();
    }
  }

  dropRespond(message, corners) {
    if (play.util.doIntersect(corners, this.state.corners)) {
      this.inBounds(message);
    } else {
      this.outOfBounds();
    }
  }

  inBounds(message) {
    if (message === this.props.message) {
      this.correct(message);
    } else {
      this.incorrect();
    }
  }

  outOfBounds() {
    // respond to out of bounds drop
    if (this.audio.out) {
      this.audio.out.play();
    }
  }

  correct(message) {
    // respond to correct drop
    if (this.audio.correct) {
      this.audio.correct.play();
    }

    if (typeof this.props.correctRespond === 'function') {
      this.props.correctRespond(message);
    }
  }

  incorrect() {
    // respond to incorrect drop
    if (this.audio.incorrect) {
      this.audio.incorrect.play();
    }
  }

  renderAssets() {
    if (this.props.assets) {
      return this.props.assets.map((asset, key) => {
        return (
          <play.Audio
            {...asset.props}
            ref={asset.props['data-ref'] || ('asset-' + key)}
            key={key}
            data-ref={key}
          />
        );
      });
    }

    return null;
  }

  renderList() {
    return this.state.list.map((item, key) => {
      return (
        <li key={key}>
          <Draggable
            {...item.props}
            dragRespond={this.boundDragRespond}
            dropRespond={this.boundDropRespond}
          />
        </li>
      );
    });
  }

  getClassNames() {
    return classNames({
      dropzone: true,
    });
  }

  render() {
    return (
      <div>
        {this.renderAssets()}
        <div
          className={this.getClassNames()}
          ref={'dropzone'}
        ></div>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default Dropzone;
