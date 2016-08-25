import _ from 'lodash';
import classNames from 'classnames';

import Selectable from 'shared/components/selectable/0.1';

class Carousel extends Selectable {
  constructor() {
    super();

    this.next = this.next.bind(this);
  }

  componentDidMount() {
    this.bootstrap();
  }

  start() {
    super.start();
    this.next();
  }

  next() {
    var classes, list;
    classes = this.state.classes;
    list = this.state.list;

    list = list.concat(this.refs.bin.get(1));
    list.shift();
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
    var list;
    // skoash.Component is not the super here, but this is what we want
    skoash.Component.prototype.bootstrap.call(this);

    list = this.refs.bin ? this.refs.bin.get(this.props.showNum + 1) : this.props.list;

    this.setState({
      list
    });
  }

  selectHelper() {
    if (this.props.dataTarget) {
      this.updateGameState({
        path: this.props.dataTarget,
        data: {
          target: this.state.list[this.props.targetIndex]
        }
      });
    }

    if (typeof this.props.onSelect === 'function') {
      this.props.onSelect.call(this, this.state.list[this.props.targetIndex]);
    }
  }

  getClassNames() {
    return classNames('carousel', super.getClassNames());
  }

  /*
   * shortid is intentionally not used for key here because we want to make sure
   * that the element is transitioned and not replaced.
   */
  renderList() {
    return this.state.list.map((li, key) => {
      var ref, onTransitionEnd;
      ref = li.ref || li.props['data-ref'] || key;
      onTransitionEnd = key === 0 ? this.next : null;
      return (
        <li.type
          {...li.props}
          className={this.getClass(key, li)}
          data-ref={ref}
          data-message={li.props.message}
          onTransitionEnd={onTransitionEnd}
          ref={ref}
          key={key}
        />
      );
    });
  }

  render() {
    var onClick = this.props.clickable ? this.state.selectFunction.bind(this) : null;
    return (
      <div>
        {this.renderBin()}
        <div className={this.getClassNames()} onClick={onClick}>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

Carousel.defaultProps = _.defaults({
  showNum: 3,
  targetIndex: 1,
  pause: 500,
  clickable: false
}, Selectable.defaultProps);

export default Carousel;
