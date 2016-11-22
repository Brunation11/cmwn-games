import classNames from 'classnames';
import _ from 'lodash';

class Reveal extends skoash.Component {
  constructor() {
    super();

    this.state = {
      openReveal: '',
      currentlyOpen: []
    };

    this.index = 0;
  }

  incomplete() {
    this.setState({
      openReveal: '',
      currentlyOpen: []
    });

    super.incomplete();
  }

  open(message) {
    var self = this;
    var currentlyOpen = this.state.currentlyOpen.concat(message);

    self.setState({
      open: true,
      currentlyOpen,
      openReveal: '' + message,
    });

    self.playAudio(message);

    if (self.props.completeOnOpen) {
      self.complete();
    } else {
      _.each(self.refs, (ref, key) => {
        if (ref && key === message) ref.complete();
      });
    }

    if (self.props.autoClose) {
      setTimeout(function () {
        self.close();
      }, 2000);
    }

    if (self.props.openTarget) {
      self.updateGameState({
        path: self.props.openTarget,
        data: {
          open: '' + message
        }
      });
    }

    self.props.onOpen.call(self, message);
  }

  close(opts = {}) {
    var prevMessage = this.state.openReveal;
    var currentlyOpen = this.state.currentlyOpen;
    currentlyOpen.splice(currentlyOpen.indexOf(prevMessage), 1);

    this.setState({
      open: false,
      openReveal: '',
      currentlyOpen,
    });

    if (!opts.silent && this.audio['close-sound']) {
      this.audio['close-sound'].play();
    }

    this.props.onClose.call(this);

    if (typeof this.props.closeRespond === 'function') {
      this.props.closeRespond(prevMessage);
    }
  }

  start() {
    super.start();
    if (this.props.openOnStart != null) {
      this.open(this.props.openOnStart);
    } else if (this.props.start && typeof this.props.start === 'function') {
      this.props.start.call(this);
    } else {
      this.close({silent: true});
    }
  }

  playAudio(message) {
    var messages;

    if ('' + parseInt(message, 10) === message) {
      message = 'asset-' + message;
    }

    if (!message) return;

    if (this.audio['open-sound']) {
      this.audio['open-sound'].play();
    }

    if (typeof message === 'string') {
      messages = message.split(' ');
      messages.map(audio => {
        if (this.audio[audio]) {
          this.audio[audio].play();
        } else if (this.media[audio] && typeof this.media[audio].play === 'function') {
          this.media[audio].play();
        }
      });
    } else {
      if (this.audio.voiceOver[message]) {
        this.audio.voiceOver[message].play();
      }
    }
  }

  renderAssets() {
    if (this.props.assets) {
      return this.props.assets.map((asset, key) => {
        var ref = asset.ref || asset.props['data-ref'] || 'asset-' + key;
        return (
          <asset.type
            {...asset.props}
            data-ref={key}
            ref={ref}
            key={key}
          />
        );
      });
    }

    return null;
  }

  renderList() {
    var list = this.props.list;

    return list.map((li, key) => {
      var dataRef = li.props['data-ref'] || key;
      var ref = li.ref || dataRef;
      return (
        <li.type
          {...li.props}
          type="li"
          className={this.getClass(li, key)}
          data-ref={dataRef}
          ref={ref}
          key={key}
        />
      );
    });
  }

  componentWillReceiveProps(props) {
    super.componentWillReceiveProps(props);

    if (props.openReveal != null && props.openReveal !== this.props.openReveal) {
      this.open(props.openReveal);
    }

    if (props.closeReveal === true && props.closeReveal !== this.props.closeReveal) {
      this.close();
    }
  }

  getClass(li, key) {
    var classes = '';

    if (li.props.className) classes = li.props.className;

    if (this.state.currentlyOpen.indexOf(key) !== -1 ||
        this.state.currentlyOpen.indexOf('' + key) !== -1 ||
        this.state.currentlyOpen.indexOf(li.props['data-ref']) !== -1 ||
        this.state.currentlyOpen.indexOf(li.ref) !== -1
    ) {
      classes = classNames(classes, 'OPEN');
    }

    return classes;
  }

  getClassNames() {
    var classes, open = 'open-none ';

    if (this.state.open) {
      open = '';
      this.state.currentlyOpen.forEach(ref => {
        open += 'open-' + ref + ' ';
      });
      open += 'OPEN';
    }

    classes = classNames(
      'reveal',
      open,
      super.getClassNames(),
    );

    return classes;
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        {this.renderAssets()}
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

Reveal.defaultProps = _.defaults({
  list: [
    <li></li>,
    <li></li>,
    <li></li>,
    <li></li>
  ],
  onOpen: _.noop,
  onClose: _.noop,
}, skoash.Component.defaultProps);

export default Reveal;
