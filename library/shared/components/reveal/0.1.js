import classNames from 'classnames';
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
    this.setState({
      open: true,
      openReveal: '' + message,
    });

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
      openReveal: ''
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
            onComplete={() => {
              if (typeof this.props.onAudioComplete === 'function') this.props.onAudioComplete.call(this, asset);
              if (typeof asset.props.onComplete === 'function') asset.props.onComplete();
            }}
          />
        );
      });
    }

    return null;
  }

  renderList() {
    var list = this.props.list;

    return list.map((li, key) => {
      var ref = li.props['data-ref'] == null ? key : li.props['data-ref'];
      return (
        <li
          {...li.props}
          className={this.getClass(li, key)}
          data-ref={ref}
          ref={key}
          key={key}
        ></li>
      );
    });
  }

  componentWillReceiveProps(props) {
    if (props.openReveal && props.openReveal !== this.props.openReveal) {
      this.open(props.openReveal);
    }
  }

  getClass(li, key) {
    var classes = '';

    if (li.props.className) classes += li.props.className;
    if (this.state.openReveal && this.state.openReveal.indexOf(key) !== -1) classes += ' OPEN';
    if (this.state.openReveal && this.state.openReveal.indexOf(li.props['data-ref']) !== -1) classes += ' OPEN';

    return classes;
  }

  getClasses() {
    return classNames('reveal', super.getClassNames());
  }

  render() {
    return (
      <div className={this.getClasses()}>
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
