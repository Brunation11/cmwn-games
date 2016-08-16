class AudioSequence extends play.Component {
  constructor() {
    super();

    this.playNext = this.playNext.bind(this);
  }

  start() {
    this.setState({
      started: true
    });

    if (this.props.playOnStart && this.refs[0]) {
      this.playingIndex = 0;
      this.refs[0].play();
    }

    if (this.props.checkComplete !== false) {
      this.checkComplete();
    }
  }

  play() {
    if (this.refs[0]) {
      this.playingIndex = 0;
      this.refs[0].play();
    }
  }

  playNext() {
    var next = this.refs[++this.playingIndex];
    if (next) next.play();
  }

  renderContentList() {
    var self = this, children;
    children = [].concat(self.props.children);
    return children.map((component, key) =>
      <component.type
        {...component.props}
        ref={key}
        key={key}
        onComplete={self.playNext}
      />
    );
  }
}

AudioSequence.defaultProps = _.defaults({
  playOnStart: true
});


export default AudioSequence;
