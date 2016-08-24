class Reveal extends skoash.Component {
  constructor() {
    super();

    this.state = {
      openReveal: '',
      list: [
        <li></li>,
        <li></li>,
        <li></li>,
        <li></li>
      ],
    };
  }

  open(message) {
    var self = this;
    self.setState({
      open: true,
      openReveal: message,
    });

    self.playAudio(message);

    if (self.props.completeOnOpen) {
      self.complete();
    } else {
      self.requireForComplete = self.requireForComplete.filter(item => {
        return (item !== message) || (self.refs[message] instanceof skoash.Audio);
      });
    }
    if (self.props.autoClose) {
      setTimeout(function() {
        self.close();
      }, 2000);
    }
  }

  close() {
    this.setState({
      open: false,
      openReveal: '',
    });

    if (typeof this.props.closeRespond === 'function') {
      this.props.closeRespond();
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
    var messages, media;

    if (this.media['open-sound']) {
      this.media['open-sound'].play();
    }

    if ('' + parseInt(message, 10) === message) {
      message = parseInt(message, 10);
    }

    if (typeof message === 'string') {
      messages = message.split(' ');
      messages.map(audio => {
        if (this.media[audio]) {
          this.media[audio].play();
        }
      });
    } else {
      media = this.media[message] || this.media.audio.voiceOver[message];
      if (media) media.play();
    }
  }

  renderAssets() {
    if (this.props.assets) {
      return this.props.assets.map((asset, key) => {
        var ref = asset.ref || asset.props['data-ref'] || ('asset-' + key);
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
    var list = this.props.list || this.state.list;

    return list.map((li, key) => {
      var ref = li.props['data-ref'] == null ? key : li.props['data-ref'];
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

    if (li.props.className) classes += li.props.className;
    if (this.state.openReveal.indexOf(key) !== -1) classes += ' OPEN';
    if (this.state.openReveal.indexOf(li.props['data-ref']) !== -1) classes += ' OPEN';

    return classes;
  }

  getClasses() {
    var classes = '';

    if (this.state.open) classes += 'OPEN';
    if (this.state.complete) classes += ' COMPLETE';

    return classes;
  }

  render() {
    return (
      <div className={'reveal ' + this.getClasses()}>
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
