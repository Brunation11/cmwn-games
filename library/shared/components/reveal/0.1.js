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
    };
  }

  open(message) {
    this.setState({
      open: true,
      openReveal: message,
    });
    console.log(this);
    this.playAudio(message);

    if (this.props.completeOnOpen) {
      this.complete();
    } else {
      this.requireForComplete = this.requireForComplete.filter(item => {
        return (item !== message) || (this.refs[message] instanceof play.Audio);
      });
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
      message = 'asset-' + message;
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
        return (
          <asset.type
            {...asset.props}
            ref={asset.props['data-ref'] || ('asset-' + key)}
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
