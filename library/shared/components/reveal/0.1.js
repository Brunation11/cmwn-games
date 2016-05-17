class Reveal extends play.Component {
  constructor() {
    super();

    this.list = [
      <li></li>,
      <li></li>,
      <li></li>,
      <li></li>
    ];
  }

  open(message) {
    this.setState({
      open: true,
      openReveal: message,
    });

    this.playAudio(message);

    this.requireForComplete = this.requireForComplete.filter(item => {
      return item !== message;
    });
  }

  close() {
    this.setState({
      open: false,
      openReveal: null,
    });
  }

  playAudio(message) {
    if (this.audio['open-sound']) {
      this.audio['open-sound'].play();
    }

    if (this.audio.voiceOver[message]) {
      this.audio.voiceOver[message].play();
    }
  }

  renderAssets() {
    return null;
  }

  renderList() {
    return this.list.map((li, key) => {
      return (
        <li {...li.props} className={this.getClass(li,key)} ref={key} key={key} data-ref={key} ></li>
      );
    });
  }

  getClass(li,key) {
    var classes = '';

    if (li.props.className) classes += li.props.className;
    if (''+key === ''+this.state.openReveal) classes += ' OPEN';

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
      <div className={'reveal '+this.getClasses()}>
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
