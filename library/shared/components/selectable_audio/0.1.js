import _ from 'lodash';
import Selectable from 'shared/components/selectable/0.1';

class SelectableAudio extends skoash.Component {
  constructor() {
    super();
  }

  selectRespond(data) {
    var ref = 'asset-' + data;
    this.playAudio(ref);

    if (typeof this.props.selectRespond === 'function') {
      this.props.selectRespond(data);
    }

    if (this.props.chooseOne) {
      this.requireForComplete = [ ref ];
    }
  }

  playAudio(ref) {
    if (this.audio[ref]) {
      this.audio[ref].play();
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
