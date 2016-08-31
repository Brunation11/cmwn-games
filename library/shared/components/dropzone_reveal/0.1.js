import Dropzone from 'shared/components/dropzone/0.1.js';
import Reveal from 'shared/components/reveal/0.1.js';

import classNames from 'classnames';

class DropzoneReveal extends skoash.Component {
  constructor() {
    super();

    this.state = {
      answers: [],
    };
  }

  bootstrap() {
    super.bootstrap();
    var answers;

    if (this.props) {
      answers = this.props.dropzoneDraggables.filter(asset => {
        return (asset.props.correct && asset.props.message);
      });
      answers = answers.map(asset => asset.props.message);
      this.setState({answers});
    }

    this.refs.dropzone.complete();
  }

  correctRespond(message) {
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
            ref={asset.props['data-ref'] || ('asset-' + key)}
            key={key}
            data-ref={key}
          />
        );
      });
    }

    return null;
  }

  renderDropzone() {
    return (
      <Dropzone
        ref="dropzone"
        checkComplete={false}
        dropzones={this.props.dropzones}
        draggables={this.props.dropzoneDraggables}
        assets={this.props.dropzoneAssets}
        correctRespond={this.correctRespond.bind(this)}
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
      />
    );
  }

  getClassNames() {
    return classNames(
      'dropzone-reveal',
      super.getClassNames(),
    );
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        {this.renderAssets()}
        {this.renderReveal()}
        {this.renderDropzone()}
      </div>
    );
  }
}

export default DropzoneReveal;
