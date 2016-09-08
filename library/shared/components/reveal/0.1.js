import classNames from 'classnames';

class Reveal extends skoash.Component {
  constructor() {
    super();

    this.list = [
      <li></li>,
      <li></li>,
      <li></li>,
      <li></li>
    ];

    this.state = {
      openReveal: '',
      currentlyOpen: []
    };
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

    this.setState({
      open: true,
      openReveal: message,
      currentlyOpen,
    });

    this.playAudio(message);

    this.requireForComplete.forEach(item => {
      if (item === message && self.refs[item]) self.refs[item].complete(); 
    });

  }

  close() {
    var prevMessage = this.state.openReveal;
    var currentlyOpen = this.state.currentlyOpen;
    currentlyOpen.splice(currentlyOpen.indexOf(prevMessage), 1);

    this.setState({
      open: false,
      openReveal: '',
      currentlyOpen,
    });

    if (typeof this.props.closeRespond === 'function') {
      this.props.closeRespond(prevMessage);
    }
  }

  start() {
    skoash.Component.prototype.start.call(this);
    this.close();

    if (this.props.openOnStart != null) {
      this.open(this.props.openOnStart);
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
        audio = 'asset-' + audio;
        if (this.audio[audio]) {
          this.audio[audio].play();
        } else if (this.media[audio] && typeof this.media[audio].play === 'function') {
          this.media[audio].play()
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
        var ref = 'asset-';
        ref += asset.props['data-ref'] || key;
        return (
          <asset.type
            {...asset.props}
            ref={ref}
            key={key}
            data-ref={key}
          />
        );
      });
    }

    return null;
  }

  renderList() {
    var list = this.props.list || this.list;

    return list.map((li, key) => {
      var ref = li.ref || li.props['data-ref'] || key;
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
    var classes = '';

    if (li.props.className) classes = li.props.className;

    if (this.state.currentlyOpen.indexOf(key) !== -1 ||
        this.state.currentlyOpen.indexOf(li.props['data-ref']) !== -1 ||
        this.state.currentlyOpen.indexOf(li.ref) !== -1
    ) {
      classes = classNames(classes, 'OPEN');
    }

    return classes;
  }

  getClassNames() {
    var classes;
    var open = 'none-open';

    if (this.state.open) {
      open = '';
      this.state.currentlyOpen.forEach(ref => {
        open += 'open-' + ref + ' ';
      });
      open += 'OPEN';
    }

    var classes = classNames(
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

export default Reveal;
