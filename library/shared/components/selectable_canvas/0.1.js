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
      if (!component.refs) return;
      this.items.push(ReactDOM.findDOMNode(component.refs.img));
    });
  }

  selectHelper(e, classes) {
    var offset, target;

    offset = this.el.getBoundingClientRect();
    this.buffer.width = offset.width;
    this.buffer.height = offset.height;

    this.items.some((item, key) => {
      if (this.isImageTarget(item, e, offset)) {
        target = this.refs[key];
        target.complete();
        classes[key] = this.props.selectClass;
        return true;
      }

      return false;
    });

    this.setState({
      classes,
    });

    if (target && typeof this.props.selectRespond === 'function') {
      this.props.selectRespond(target.props.message);
    }

    this.checkComplete();
  }

  isImageTarget(image, e, parentOffset) {
    var offset, pixel;

    offset = image.getBoundingClientRect();

    this.bctx.clearRect(0, 0, this.buffer.width, this.buffer.height);
    this.bctx.drawImage(image, offset.left - parentOffset.left, offset.top - parentOffset.top, offset.width, offset.height);
    pixel = this.bctx.getImageData(e.pageX, e.pageY, 1, 1);

    this.bctx.fillStyle = 'blue';
    this.bctx.fillRect(e.pageX, e.pageY, 5, 5);

    // opaque pixel
    return pixel.data[3] > 0;
  }

  getClassNames() {
    return classNames('selectable-canvas', super.getClassNames());
  }

  render() {
    return (
      <div>
        <ul
          className={this.getClassNames()}
          onClick={this.state.selectFunction.bind(this)}
        >
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default SelectableCanvas;
