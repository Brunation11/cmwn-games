import Selectable from 'shared/components/selectable/0.1.js';

class SelectableAudio extends skoash.Component {
  constructor() {
    super();

    this.state = {
      selected: 0
    };
  }

  bootstrap() {
    var self = this;
    this.requireForReady = Object.keys(this.refs);
    this.requireForComplete = this.requireForReady.filter(ref => {
      if (ref.includes('asset'))
        return this.refs[ref].checkComplete;
    });

    this.collectMedia();
    this.checkReady();
  }

  start() {
    super.start();

    if (this.props.requireAll)
      this.checkComplete = super.checkComplete;
  }

  selectRespond(message) {
    this.playAudio(message);
    if (this.props.selectN) this.count();
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
        }
      });
    }
  }

  checkComplete() {
    var self = this, complete;

    if (!self.props.checkComplete || !self.requireForComplete) return;

    self.requireForComplete.forEach(key => {
      if (self.refs[key] && typeof self.refs[key].checkComplete === 'function') {
        self.refs[key].checkComplete();
      }
    });

    complete = self.requireForComplete.some(key => {
      if (self.refs[key] instanceof Node) {
        return true;
      }
      if (!self.refs[key] || !self.refs[key].state || (self.refs[key].state && !self.refs[key].state.complete)) {
        return false;
      }
      return true;
    });

    if (complete && !self.state.complete) {
      self.complete();
    } else if (self.state.started && !complete && self.state.complete) {
      self.incomplete();
    }
  }

  renderAssets() {
    if (this.props.audioAssets) {
      return this.props.audioAssets.map((asset, key) => {
        return (
          <skoash.Audio
            {...asset.props}
            ref={'asset-' + key}
            key={key}
            data-ref={key}
          />
        );
      });
    }
    return null;
  }

  renderSelectable() {
    return (
      <Selectable
        ref="selectable"
        list={this.props.selectableList}
        selectRespond={this.selectRespond.bind(this)}
        selectClass={this.props.selectableSelectClass}
      />
    );
  }

  getClassNames() {
    return 'selectable-audio ' + super.getClassNames();
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        {this.renderAssets()}
        {this.renderSelectable()}
      </div>
    );
  }
}

SelectableAudio.defaultProps = skoash.Component.defaultProps;

export default SelectableAudio;
