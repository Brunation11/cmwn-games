import Dropzone from 'shared/components/dropzone/0.1.js';
import Reveal from 'shared/components/reveal/0.1.js';

import classNames from 'classnames';

class DropzoneReveal extends skoash.Component {
  bootstrap() {
    super.bootstrap();
  }

  correctRespond(message, dropzoneKey) {
    this.dropRespond(message);

    if (typeof this.props.correctRespond === 'function') {
      this.props.correctRespond.call(this, message, dropzoneKey);
    }
  }

  incorrectRespond(message, dropzoneKey) {
    this.dropRespond(message);
  }

  dropRespond(message, incorrect) {
    if (typeof this.refs.reveal.open === 'function') {
      this.refs.reveal.open(message);
    }
  }

  closeRespond() {
    if (typeof this.props.closeRespond === 'function') {
      this.props.closeRespond();
    }
  }

  revealComplete() {
    if (this.audio.complete) {
      this.audio.complete.play();
    }
  }

  renderAssets() {
    if (this.props.assets) {
      return this.props.assets.map((asset, key) => {
        return (
          <asset.type
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
        dropzones={this.props.dropzones}
        draggables={this.props.dropzoneDraggables}
        draggablesLeft={this.props.dropzoneDraggablesLeft}
        draggablesRight={this.props.dropzoneDraggablesRight}
        assets={this.props.dropzoneAssets}
        onComplete={this.props.onDropzoneComplete}
        correctRespond={this.correctRespond.bind(this)}
        incorrectRespond={this.incorrectRespond.bind(this)}
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
        onComplete={this.revealComplete.bind(this)}
        onOpen={this.props.onOpen}
        openOnStart={this.props.openOnStart}
        openReveal={this.props.openReveal}
        closeReveal={this.props.closeReveal}
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
