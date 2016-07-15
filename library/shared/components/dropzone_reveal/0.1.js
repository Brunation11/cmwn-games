import Dropzone from '../dropzone/0.1.js';
import Reveal from '../reveal/0.1.js';

import classNames from 'classnames';

class DropzoneReveal extends play.Component {
  constructor() {
    super();

    this.state = {
      answers: [],
    };
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

  renderDropzone() {
    return (
      <Dropzone
        ref="dropzone"
        message={this.props.dropzoneMessage}
        list={this.props.dropzoneList}
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

  getClasses() {
    return classNames({
      'dropzone-reveal': true,
      COMPLETE: this.state.complete,
    });
  }

  render() {
    return (
      <div className={this.getClasses()}>
        {this.renderAssets()}
        {this.renderDropzone()}
        {this.renderReveal()}
      </div>
    );
  }
}

export default DropzoneReveal;
