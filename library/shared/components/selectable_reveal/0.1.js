import Selectable from '../selectable/0.1.js';
import Reveal from '../reveal/0.1.js';

class SelectableReveal extends play.Component {
  constructor() {
    super();

    this.state = {
      answers: [],
    };
  }

  selectRespond(message) {
    if (this.state.answers.length) {
      if (this.state.answers.indexOf(message) === -1) {
        if (this.audio.incorrect) this.audio.incorrect.play();
      } else {
        if (this.audio.correct) this.audio.correct.play();
        if (typeof this.refs.reveal.open === 'function') {
          this.refs.reveal.open(message);
        }
      }
    } else {
      if (typeof this.refs.reveal.open === 'function') {
        this.refs.reveal.open(message);
      }
    }
  }

  renderAssets() {
    if (this.props.assets) {
      return this.props.assets.map((asset, key) => {
        return (
          <play.Audio
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

  renderSelectable() {
    return (
      <Selectable ref="selectable" list={this.props.selectableList} selectRespond={this.selectRespond.bind(this)} />
    );
  }

  renderReveal() {
    return (
      <Reveal ref="reveal" list={this.props.revealList} assets={this.props.revealAssets} />
    );
  }

  getClasses() {
    var classes = '';

    if (this.state.complete) classes += ' COMPLETE';

    return classes;
  }

  render() {
    return (
      <div className={'selectable-reveal' + this.getClasses()}>
        {this.renderAssets()}
        {this.renderSelectable()}
        {this.renderReveal()}
      </div>
    );
  }
}

export default SelectableReveal;
