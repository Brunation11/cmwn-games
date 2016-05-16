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
  }

  close() {
    this.setState({
      open: false,
    });
  }

  playAudio(message) {
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
