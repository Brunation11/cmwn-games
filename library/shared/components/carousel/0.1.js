import _ from 'lodash';

import Selectable from 'shared/components/selectable/0.1';

class Carousel extends Selectable {
  constructor() {
    super();
  }

  bootstrap() {
    skoash.Component.prototype.bootstrap.call(this);
    if (this.refs.bin) {
      this.setState({
        list: this.refs.bin.get(this.props.showNum)
      });
    }
  }

  selectHelper() {
    if (typeof this.props.selectRespond === 'function') {
      this.props.selectRespond(this.state.target);
    }
  }
}

Carousel.defaultProps = _.merge({
  showNum: 3
}, Selectable.defaultProps);

export default Carousel;
