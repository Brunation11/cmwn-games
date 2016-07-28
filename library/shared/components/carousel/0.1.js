import _ from 'lodash';
import classNames from 'classnames';

import Selectable from 'shared/components/selectable/0.1';

class Carousel extends Selectable {
  constructor() {
    super();

    this.next = this.next.bind(this);
  }

  start() {
    super.start();
    this.next();
  }

  next() {
    var classes, list;
    classes = this.state.classes;
    list = this.state.list;

    list.shift();
    list = list.concat(this.refs.bin.get(1));
    classes[0] = '';

    this.setState({
      classes,
      list,
    }, () => {
      setTimeout(() => {
        classes[0] = 'LEAVE';
        this.setState({
          classes,
        });
      }, this.props.pause);
    });
  }

  bootstrap() {
    skoash.Component.prototype.bootstrap.call(this);
    if (this.refs.bin) {
      this.setState({
        list: this.refs.bin.get(this.props.showNum + 1)
      });
    }
  }

  selectHelper() {
    if (typeof this.props.selectRespond === 'function') {
      this.props.selectRespond(this.state.target);
    }
  }

  getClassNames() {
    return classNames('carousel', super.getClassNames());
  }

  renderList() {
    var list = this.props.list || this.state.list;

    return list.map((li, key) => {
      var ref = li.ref || li.props['data-ref'] || key;
      li.type = li.type || skoash.Component;
      return (
        <li.type
          {...li.props}
          className={this.getClass(ref, li)}
          data-ref={ref}
          data-message={li.props.message}
          onTransitionEnd={this.next}
          ref={ref}
          key={key}
        />
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderBin()}
        <div className={this.getClassNames()} onClick={this.state.selectFunction.bind(this)}>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

Carousel.defaultProps = _.merge({
  showNum: 3,
  pause: 500,
}, Selectable.defaultProps);

export default Carousel;
