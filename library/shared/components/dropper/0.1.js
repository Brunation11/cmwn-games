import classNames from 'classnames';

import Draggable from 'shared/components/draggable/0.1';

import Randomizer from 'shared/components/randomizer/0.1';
import Catchable from 'shared/components/catchable/0.1';

class Dropper extends Draggable {
  constructor() {
    super();

    this.state = _.defaults({
      items: [],
      itemEndXs: [],
      direction: '',
    }, this.state);
  }

  next() {
    var items, index, itemEndXs;

    if (!this.state.started) return;

    items = this.state.items;
    items = items.concat(this.refs.bin.get(1));
    index = items.length - 1;

    this.setState({
      items,
    }, () => {
      var timeoutFunction = i => {
        var item = this.refs['items-' + (items.length - 1)];
        if (!item) return;
        item.addClassName(this.props.prepClasses[i]);
        if (i === this.props.prepClasses.length - 1) {
          itemEndXs = this.state.itemEndXs;
          itemEndXs[index] = this.state.endX;
          ReactDOM.findDOMNode(item).addEventListener('transitionend', () => {
            items = this.state.items;
            delete items[index];
            this.setState({
              items
            });
          });
        } else if (i === this.props.prepClasses.length) {
          this.next();
        }
      };
      for (let i = 0; i <= this.props.prepClasses.length; i++) {
        setTimeout(timeoutFunction.bind(this, i), i * this.props.prepTimeout);
      }
    });
  }

  moveEvent(e) {
    var endX;

    if (e.targetTouches && e.targetTouches[0]) {
      e.pageX = e.targetTouches[0].pageX;
    }

    endX = Math.min(Math.max(e.pageX - this.state.grabX, this.props.leftBound), this.props.rightBound);

    this.setState({
      endX,
      direction: endX > this.state.endX ? 'right' : 'left'
    });
  }

  getItemStyle(key) {
    var endX, x;

    endX = this.state.itemEndXs[key] || this.state.endX;
    x = ((endX - this.state.startX) / this.state.zoom);

    return {
      transform: `translateX(${x}px)`,
      WebkitTransform: `translateX(${x}px)`,
    };
  }

  getStyle() {
    var x = ((this.state.endX - this.state.startX) / this.state.zoom);

    return {
      transform: `translateX(${x}px)`,
      WebkitTransform: `translateX(${x}px)`,
    };
  }

  getClassNames() {
    return classNames('dropper', this.state.direction, super.getClassNames());
  }

  /*
   * shortid is intentionally not used for key here because we want to make sure
   * that the element is transitioned and not replaced.
   */
  renderItems() {
    return _.map(this.state.items, (item, key) => {
      var ref = 'items-' + key;
      if (!item) return null;
      return (
        <item.type
          {...item.props}
          style={this.getItemStyle(key)}
          data-ref={ref}
          data-message={item.props.message}
          ref={ref}
          key={key}
        />
      );
    });
  }

  renderBin() {
    return (
      <this.props.bin.type
        {...this.props.bin.props}
        ref="bin"
      />
    );
  }

  render() {
    return (
      <div
        className={this.getClassNames()}
      >
        {this.renderBin()}
        <div
          ref="el"
          className="el"
          style={this.getStyle()}
        >
          {this.renderContentList()}
        </div>
        <ul className="items">
          {this.renderItems()}
        </ul>
      </div>
    );
  }
}

Dropper.defaultProps = _.defaults({
  prepClasses: ['ready', 'set', 'go'],
  prepTimeout: 500,
  bin: (
    <Randomizer
      bin={[
        <Catchable />,
      ]}
    />
  ),
  onStart: function () {
    this.next();
  },
  leftBound: 0,
  rightBound: 800,
}, Draggable.defaultProps);

export default Dropper;
