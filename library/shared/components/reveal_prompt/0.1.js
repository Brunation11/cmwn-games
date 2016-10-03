import _ from 'lodash';
import ClassNames from 'classnames';

export default class RevealPrompt extends skoash.Component {
  constructor() {
    super();

    this.state = {
      openReveal: '',
    };

    this.index = 0;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.openReveal != null && nextProps.openReveal !== this.props.openReveal) {
      this.open(nextProps.openReveal);
    }

    if (nextProps.closeReveal === true && nextProps.closeReveal !== this.props.closeReveal) {
      this.close();
    }
  }

  start() {
    super.start();

    if (this.props.openOnStart) {
      this.open(this.props.openOnStart);
    } else {
      this.close();
    }
  }

  open(message) {
    var self = this;
    self.setState({
      open: true,
      openReveal: '' + message,
    });

    self.callProp('onOpen', message);

    if (self.props.completeOnOpen) {
      self.complete();
    } else {
      self.requireForComplete.map(key => {
        if (key === message && self.refs[key]) {
          self.refs[key].complete();
        }
      });
    }

    if (self.props.autoClose) {
      setTimeout(function() {
        self.close();
      }, 2000);
    }
  }

  close() {
    var prevMessage = this.state.openReveal;

    this.callProp('onClose', prevMessage);

    this.setState({
      open: false,
      openReveal: '',
    });
  }

  renderList() {
    return this.props.list.map((li, key) => {
      var ref = li.props['ref'] == null ? key : li.props['ref'];
      return (
        <li.type
          {...li.props}
          type="li"
          className={this.getClass(li, key)}
          data-ref={ref}
          ref={ref}
          key={key}
        />
      );
    });
  }

  getClass(li, key) {
    return ClassNames(
      {
        [li.props.className]: li.props.className,
        OPEN: this.state.openReveal.indexOf(key) !== -1 || this.state.openReveal.indexOf(li.props['data-ref']) !== -1
      }
    );
  }

  getClassNames() {
    return ClassNames(
      super.getClassNames(),
      'reveal',
      {
        ['open-' + this.state.openReveal]: this.state.openReveal,
        'open-none': !this.state.openReveal
      }
    );
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        <div>
          <ul>
            {this.renderList()}
          </ul>
          <button className="close-reveal" onClick={this.close.bind(this)}></button>
        </div>
      </div>
    );
  }
}

RevealPrompt.defaultProps = _.defaults({}, skoash.Component.defaultProps);
