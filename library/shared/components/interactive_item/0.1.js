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
    this.props.onInteract.call(this, opts);
  }

  canInteract() {
    return this.props.canInteract.call(this);
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
  onInteract: _.identity,
  canInteract: () => true,
}, skoash.Component.defaultProps);

export default InteractiveItem;
