import Dropzone from '../dropzone/0.2.js';
import Reveal from '../reveal/0.1.js';

import classNames from 'classnames';

class DropzoneReveal extends skoash.Component {
  constructor() {
    super();

    this.state = {
      answers: [],
    };

    this.dragRespond = this.dragRespond.bind(this);
  }

  dragRespond(draggable) {
    if (typeof this.props.dragRespond === 'function') {
      this.props.dragRespond.call(this, draggable);
    }
  }

  correctRespond(draggable, dropzoneKey) {
    var message = draggable.props.message;
    if (this.state.answers.length) {
      if (this.state.answers.indexOf(message) === -1) {
        if (this.audio.incorrect) this.audio.incorrect.play();
      } else {
        if (this.audio.correct) this.audio.correct.play();
        if (typeof this.refs.reveal.open === 'function') {
          this.refs.reveal.open(message);
        }
        this.callCorrectRespond(draggable, dropzoneKey);
      }
    } else {
      if (typeof this.refs.reveal.open === 'function') {
        this.refs.reveal.open(message);
      }
      this.callCorrectRespond(draggable, dropzoneKey);
    }
  }

  callCorrectRespond(draggable, dropzoneKey) {
    if (typeof this.props.correctRespond === 'function') {
      this.props.correctRespond.call(this, draggable, dropzoneKey);
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
        dragRespond={this.dragRespond}
        message={this.props.dropzoneMessage}
        draggables={this.props.dropzoneList}
        assets={this.props.dropzoneAssets}
        correctRespond={this.correctRespond.bind(this)}
        dropzones={this.props.dropzones}
        checkComplete={this.props.checkComplete}
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
