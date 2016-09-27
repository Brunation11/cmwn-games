// USE MEDIA SEQUENCE INSTEAD
import _ from 'lodash';

class AudioSequence extends play.Component {
  constructor() {
    super();

    this.playingIndex = 0;
    this.playNext = this.playNext.bind(this);
  }

  start() {
    this.setState({
      started: true
    });

    if (this.props.playOnStart) {
      this.play();
    }

    if (this.props.checkComplete !== false) {
      this.checkComplete();
    }
  }

  getInterval() {
    if (typeof this.props.playInterval === 'number') {
      return this.props.playInterval;
    }

    if (typeof this.props.playInterval === 'object') {
      return this.props.playInterval[this.playingIndex - 1];
    }

    return;
  }

  playInterval(lastInterval) {
    var interval = this.getInterval();
    if (!interval) interval = lastInterval;

    setTimeout(() => {
      if (this.playNext()) {
        this.playInterval(interval);
      }
    }, interval);
  }

  play() {
    this.playingIndex = 0;
    this.playNext();
    if (this.props.playInterval) { // TODO: make media sequence play on interval too 8/19/16 AIM
      this.playInterval();
    }
  }

  playNext() {
    var next = this.refs[this.playingIndex++];
    if (next) {

      next.play();
      if (typeof this.props.onPlay === 'function') {
        this.props.onPlay();
      }
    }
    return next;
  }

  renderContentList() {
    var self = this, children;
    children = [].concat(self.props.children);
    return children.map((component, key) =>
      <component.type
        {...component.props}
        ref={key}
        key={key}
        onComplete={!this.props.playInterval ? self.playNext.bind(self) : null}
      />
    );
  }
}

AudioSequence.defaultProps = _.defaults({
  playOnStart: true
}, skoash.Component.defaultProps);


export default AudioSequence;
