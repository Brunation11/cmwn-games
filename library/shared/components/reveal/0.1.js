import _ from 'lodash';

class Reveal extends skoash.Component {
  constructor() {
    super();

    this.state = {
      openReveal: '',
    };

    this.index = 0;
  }

  open(message) {
    var self = this;
    self.setState({
      open: true,
      openReveal: '' + message,
    });

    self.playAudio(message);

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

    self.callProp('onOpen', message);
  }

  close() {
    var prevMessage = this.state.openReveal;

    this.setState({
      open: false,
      openReveal: '',
    });

    if (this.audio['close-sound']) {
      this.audio['close-sound'].play();
    }

    this.callProp('onClose');

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
      this.close();
    }
  }

  playAudio(message) {
    var messages;

    if ('' + parseInt(message, 10) === message) {
      message = 'asset-' + message;
    }

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
        var ref = asset.ref || asset.props['data-ref'] || ('asset-' + key);
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
    var list = this.props.list || this.list;

    return list.map((li, key) => {
      var ref = li.props['data-ref'] == null ? key : li.props['data-ref'];
      return (
        <li.type
          {...li.props}
          type="li"
          className={this.getClass(li, key)}
          data-ref={ref}
          ref={key}
          key={key}
        />
      );
    });
  }

  componentWillReceiveProps(props) {
    if (props.openReveal != null && props.openReveal !== this.props.openReveal) {
      this.open(props.openReveal);
    }

    if (props.closeReveal === true && props.closeReveal !== this.props.closeReveal) {
      this.close();
    }
  }

  getClass(li, key) {
    var classes = '';

    if (li.props.className) classes += li.props.className;
    if (this.state.openReveal.indexOf(key) !== -1) classes += ' OPEN';
    if (this.state.openReveal.indexOf(li.props['data-ref']) !== -1) classes += ' OPEN';

    return classes;
  }

  getClassNames() {
    var classes;
    var open = 'open-none ';

    if (this.state.openReveal) {
      open = 'open-' + this.state.openReveal + ' ';
    }

    classes = 'reveal ' + open + super.getClassNames();

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
}, skoash.Component.defaultProps);

export default Reveal;
