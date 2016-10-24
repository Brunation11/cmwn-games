import classNames from 'classnames';

import Draggable from 'shared/components/draggable/0.1';

import Randomizer from 'shared/components/randomizer/0.1';
import Catchable from 'shared/components/catchable/0.1';

class Dropper extends Draggable {
  constructor() {
    super();

    this.state = _.defaults({
      items: [],
    }, this.state);
  }

  start() {
    super.start();
    this.next();
  }

  next() {
    var items = this.state.items;
    items = items.concat(this.refs.bin.get(1));

    this.setState({
      items,
    }, () => {
      var timeoutFunction = i => {
        var item = this.refs['items-' + (items.length - 1)];
        if (!item) return;
        item.addClassName(this.props.prepClasses[i]);
        if (i === this.props.prepClasses.length - 1) {
          ReactDOM.findDOMNode(item).addEventListener('transitionend', () => {
            items = this.state.items.splice(items.length - 1, 1);
            this.setState({
              items
            });
          });
        }
      };
      for (let i = 0; i < this.props.prepClasses.length; i++) {
        setTimeout(timeoutFunction.bind(this, i), i * this.props.prepTimeout);
      }
    });
  }

  getStyle() {
    var x = ((this.state.endX - this.state.startX) / this.state.zoom);

    return {
      transform: `translateX(${x}px)`,
      WebkitTransform: `translateX(${x}px)`,
    };
  }

  getClassNames() {
    return classNames('dropper', super.getClassNames());
  }

  /*
   * shortid is intentionally not used for key here because we want to make sure
   * that the element is transitioned and not replaced.
   */
  renderItems() {
    return _.map(this.state.items, (item, key) => {
      var ref, onTransitionEnd;
      ref = 'items-' + key;
      return (
        <item.type
          {...item.props}
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
        ref="el"
        className={this.getClassNames()}
        style={this.getStyle()}
      >
        {this.renderBin()}
        <ul className="items">
          {this.renderItems()}
        </ul>
        {this.renderContentList()}
      </div>
    );
  }
}

Dropper.defaultProps = _.defaults({
  prepClasses: ['ready', 'set', 'go'],
  prepTimeout: 250,
  bin: (
    <Randomizer
      bin={[
        <Catchable />,
      ]}
    />
  ),
}, Draggable.defaultProps);

export default Dropper;
