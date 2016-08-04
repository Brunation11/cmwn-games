import _ from 'lodash';

import Selectable from 'shared/components/selectable/0.1';

class MatchGame extends Selectable {
  constructor() {
    super();
  }

  selectHelper(e, classes) {
    var dataRef, activeDataRef, message, target;

    target = e.target.closest('LI');

    if (!target) return;

    dataRef = target.getAttribute('data-ref');
    message = target.getAttribute('data-message');
    classes[dataRef] = this.state.selectClass;

    if (this.state.message) {
      if (message === this.state.message) {
        if (typeof this.props.onMatch === 'function') {
          this.props.onMatch(message);
        }
      } else {
        setTimeout(function (oldDataRef) {
          delete classes[dataRef];
          delete classes[oldDataRef];
          this.setState({classes});
        }.bind(this, this.state.activeDataRef), this.props.flipPause || 500);
      }
      message = null;
    } else {
      activeDataRef = dataRef;
    }

    if (typeof this.props.selectRespond === 'function') {
      this.props.selectRespond(message);
    }

    this.setState({
      classes,
      message,
      activeDataRef,
    });

    this.checkComplete();
  }
}

MatchGame.defaultProps = _.merge({
  selectClass: 'HIGHLIGHTED'
}, Selectable.defaultProps);

export default MatchGame;
