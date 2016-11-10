import classNames from 'classnames';

class InteractiveItem extends skoash.Component {
  constructor() {
    super();

    this.state = _.defaults({
      enabled: true,
    }, this.state);
  }

  enable() {
    this.setState({enabled: true});
  }

  disable() {
    this.setState({enabled: false});
  }

  interact(opts = {}) {
    this.canInteract() && this.props.onInteract.call(this, opts);
  }

  canInteract() {
    return this.state.enabled && this.props.canInteract.call(this);
  }

  bootstrap() {
    super.bootstrap();

    this.DOM = ReactDOM.findDOMNode(this);
  }

  getClassNames() {
    return classNames('interactive-item', {
      ENABLED: this.state.enabled,
    }, super.getClassNames());
  }
}

InteractiveItem.defaultProps = _.defaults({
  onInteract: _.noop,
  canInteract: () => true,
}, skoash.Component.defaultProps);

export default InteractiveItem;
