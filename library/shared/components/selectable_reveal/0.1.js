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
    if (this.state.answers.length) {
      if (this.state.answers.indexOf(message) === -1) {
        if (this.audio.incorrect) this.audio.incorrect.play();
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
        completeOnSelect={this.props.selectableCompleteOnSelect}
        checkComplete={this.props.selectableCheckComplete}
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
        closeRespond={this.closeRespond.bind(this)}
        completeOnOpen={this.props.revealCompleteOnOpen}
        checkComplete={this.props.revealCheckComplete}
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
