import _ from 'lodash';

import Selectable from 'shared/components/selectable/0.1';
import classNames from 'classnames';

class MatchGame extends Selectable {
  constructor() {
    super();
  }

  selectHelper(e, classes) {
    var dataRef, activeDataRef, message, target;

    target = e.target.closest('LI');

    if (!target) return;

    if (typeof this.props.onSelect === 'function') this.props.onSelect();

    dataRef = target.getAttribute('data-ref');
    message = target.getAttribute('data-message');
    classes[dataRef] = this.state.selectClass;

    if (this.state.message) {
      if (message === this.state.message) {
        if (typeof this.props.onMatch === 'function') this.props.onMatch(message);
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

    this.setState({
      classes,
      message,
      activeDataRef,
    });

    this.requireForComplete = this.requireForComplete.filter((key) => {
      return key !== message;
    });

    this.checkComplete();
  }

  getClassNames() {
    return classNames({
      matchable: true,
      COMPLETE: this.state.complete,
    }, this.props.className);
  }
}

MatchGame.defaultProps = _.merge(Selectable.defaultProps, {
  selectClass: 'HIGHLIGHTED'
});

export default MatchGame;
