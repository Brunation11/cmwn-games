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
