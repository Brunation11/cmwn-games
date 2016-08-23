import Selectable from 'shared/components/selectable/0.1.js';
import Reveal from 'shared/components/reveal/0.1.js';

class SelectableReveal extends skoash.Component {
  constructor() {
    super();

    this.state = {
      answers: [],
    };
  }

  open(message) {
    this.refs.reveal.open(message);
  }

  selectRespond(message) {
    var answers = this.state.answers.length ? this.state.answers : this.props.answers ? this.props.answers : [];
    if (answers.length) {
      if (answers.indexOf(message) === -1) {
        if (this.audio.incorrect) this.audio.incorrect.play();
        if (this.props.revealAll) {
          if (typeof this.refs.reveal.open === 'function') {
            this.open(message);
          }
        }
      } else {
        if (this.audio.correct) this.audio.correct.play();
        if (typeof this.refs.reveal.open === 'function') {
          this.open(message);
        }
      }
    } else {
      if (this.props.allCorrect && this.audio.correct) {
        this.audio.correct.play();
      }
      if (typeof this.refs.reveal.open === 'function') {
        this.open(message);
      }
    }
  }

  closeRespond() {
    if (typeof this.props.closeRespond === 'function') {
      this.props.closeRespond();
    }
  }

  renderAssets() {
    if (this.props.assets) {
      return this.props.assets.map((asset, key) => {
        return (
          <skoash.Audio
            {...asset.props}
            ref={asset.ref || asset.props['data-ref'] || ('asset-' + key)}
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
        selectOnStart={this.props.selectOnStart}
      />
    );
  }

  renderReveal() {
    return (
      <Reveal
        ref="reveal"
        list={this.props.revealList}
        assets={this.props.revealAssets}
        closeRespond={this.closeRespond.bind(this)}
        openOnStart={this.props.openOnStart}
      />
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
