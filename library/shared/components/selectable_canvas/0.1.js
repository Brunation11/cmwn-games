import _ from 'lodash';
import classNames from 'classnames';

import Selectable from 'shared/components/selectable/0.1';

class SelectableCanvas extends Selectable {
  constructor() {
    super();

    this.state = {
      classes: {},
      selectFunction: this.select,
    };
  }

  bootstrap() {
    super.bootstrap();

    this.buffer = document.createElement('canvas');
    this.bctx = this.buffer.getContext('2d');

    this.el = ReactDOM.findDOMNode(this);

    this.items = [];

    _.forIn(this.refs, component => {
      this.items.push(component);
    });
  }

  selectHelper(e, classes) {
    var message, target;

    target = e.target.closest('LI');

    if (!target) return;

    message = target.getAttribute('data-ref');
    classes[message] = this.props.selectClass;

    this.setState({
      classes,
    });

    if (typeof this.props.selectRespond === 'function') {
      this.props.selectRespond(message);
    }

    this.requireForComplete = this.requireForComplete.filter((key) => {
      return key !== message;
    });

    this.checkComplete();
  }

  isImageTarget(_$image, _point, _offset, _scale) {
    var offset, pixel;

    offset = _$image.offset();

    this.bctx.clearRect(0, 0, this.buffer.width, this.buffer.height);
    this.bctx.drawImage(_$image[0], offset.left / _scale - _offset[0], offset.top / _scale - _offset[1], _$image.width(), _$image.height());
    pixel = this.bctx.getImageData(_point.x, _point.y, 1, 1);

    this.bctx.fillStyle = 'white';
    this.bctx.fillRect(_point.x, _point.y, 5, 5);

    // opaque pixel
    return pixel.data[3] > 0;
  }

  getClassNames() {
    return classNames('selectable-canvas', super.getClassNames());
  }

  render() {
    return (
      <ul
        className={this.getClassNames()}
        onClick={this.state.selectFunction.bind(this)}
      >
        {this.renderList()}
      </ul>
    );
  }
}

export default SelectableCanvas;
