import Selectable from 'shared/components/selectable/0.1';

class SelectableAudio extends skoash.Component {
  selectRespond(data) {
    var ref = 'asset-' + data;
    this.playAudio(data);

    if (typeof this.props.selectRespond === 'function') {
      this.props.selectRespond.call(this, data);
    }

    if (this.props.chooseOne) {
      this.requireForComplete = [ref];
    }
  }

  playAudio(ref) {
    var component;

    this.audio['asset-' + ref] && this.audio['asset-' + ref].play();

    component = this.refs.selectable.refs[ref];

    if (component) {
      if (component.props.correct) {
        this.audio['asset-correct'] && this.audio['asset-correct'].play();
      } else {
        this.audio['asset-incorrect'] && this.audio['asset-incorrect'].play();
      }
    }
  }

  renderAssets() {
    if (this.props.audioAssets) {
      return this.props.audioAssets.map((asset, key) => {
        var dataRef = asset.props['data-ref'] || key;
        var ref = 'asset-' + dataRef;
        return (
          <skoash.Audio
            {...asset.props}
            ref={ref}
            key={key}
            data-ref={dataRef}
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
        selectClass={this.props.selectClass}
      />
    );
  }

  getClassNames() {
    return 'selectable-audio ' + super.getClassNames();
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        {this.renderAssets()}
        {this.renderSelectable()}
      </div>
    );
  }
}

export default SelectableAudio;
