import _ from 'lodash';
import Selectable from 'shared/components/selectable/0.1';

class SelectableAudio extends skoash.Component {
  constructor() {
    super();

    this.state = {
      selected: 0
    };
  }

  bootstrap() {
    super.bootstrap();
    var self = this;
    var correctAnswers;

    // only require audio assets for complete
    this.requireForComplete = this.requireForComplete.filter(ref => {
      if (ref.includes('asset'))
        return self.refs[ref].checkComplete;
    });

    // if there are "correct" answers, only require correct answers
    correctAnswers = this.requireForComplete.filter(ref => {
      ref = ref.split('-')[1];
      var element = self.refs.selectable.refs[ref];
      return (element && element.className.includes('correct'));
    });

    if (correctAnswers.length > 0) {
      this.requireForComplete = correctAnswers;
    }
  }

  start() {
    super.start();

    if (this.props.requireAll) {
      this.checkComplete = super.checkComplete.bind(this);
    }
  }

  selectRespond(data) {
    this.playAudio(data);

    if (typeof this.props.selectRespond === 'function') {
      this.props.selectRespond(data);
    }
  }

  playAudio(data) {
    var ref = 'asset-' + data;
    if (this.audio[ref]) {
      this.audio[ref].play();
    }
  }

  checkComplete() {
    var self = this, complete;

    if (!self.props.checkComplete || !self.requireForComplete) return;

    self.requireForComplete.forEach(key => {
      if (self.refs[key] && typeof self.refs[key].checkComplete === 'function') {
        self.refs[key].checkComplete();
      }
    });

    complete = self.requireForComplete.some(key => {
      if (self.refs[key] instanceof Node) {
        return true;
      }
      if (!self.refs[key] || !self.refs[key].state || (self.refs[key].state && !self.refs[key].state.complete)) {
        return false;
      }
      return true;
    });

    if (complete && !self.state.complete) {
      self.complete();
    } else if (self.state.started && !complete && self.state.complete) {
      self.incomplete();
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

SelectableAudio.defaultProps = _.merge(
  skoash.Component.defaultProps, {
  requireAll: false,
});


export default SelectableAudio;
