import _ from 'lodash';
import classNames from 'classnames';

import SelectableReveal from 'shared/components/selectable_reveal/0.1.js';
import Selectable from 'shared/components/selectable/0.1.js';

class TargetSelectable extends SelectableReveal {
  constructor() {
    super();

    this.selectRespond = this.selectRespond.bind(this);
  }

  start() {
    super.start();

    this.list = _.map(this.refs.selectable.refs, ref =>
      ReactDOM.findDOMNode(ref)
    );

    this.setItem();
  }

  selectRespond(message) {
    if (this.state.target) {
      if (this.state.target === message) {
        this.onCorrect(message);
      } else {
        this.onIncorrect(message);
      }
    } else if (this.props.allCorrect) {
      this.onCorrect(message);
    }
  }

  onCorrect(message) {
    var classes;
    if (this.audio.correct) this.audio.correct.play();
    if (this.audio['correct-sound']) this.audio['correct-sound'].play();

    classes = this.refs.selectable.state.classes;
    classes[message] = 'SELECTED';
    this.refs.selectable.setState({
      classes
    }, () => {
      this.setItem((this.state.idx + 1) % this.props.targets.length);
    });
  }

  onIncorrect() {
    if (this.audio.incorrect) this.audio.incorrect.play();
    if (this.audio['incorrect-sound']) this.audio['incorrect-sound'].play();
  }

  setItem(idx = 0) {
    this.setState({
      idx,
      target: this.props.targets[idx].ref,
      amount: this.props.targets[idx].props.amount
    }, () => {
      if (this.state.target) {
        setTimeout(() => {
          this.refs.selectable.setState({
            classes: []
          });
        }, 450);

        for (var i = 3; i < 8; i++) {
          setTimeout(() => {
            _.forEach(this.list, node => {
              node.style.order = Math.round(20 * Math.random());
            });
          }, i * 150);
        }
      }
    });
  }

  getClassNames() {
    return classNames(
      super.getClassNames(),
      'target-selectable',
      this.state.target,
      this.props.className, {
        ['amount-' + this.state.amount]: typeof this.state.amount === 'number',
      }
    );
  }

  renderSelectable() {
    if (this.props.selectable) {
      return (
        <this.props.selectable.type
          ref="selectable"
          {...this.props.selectable.props}
          selectRespond={this.selectRespond}
        />
      );
    }

    return (
      <Selectable
        ref="selectable"
        list={this.props.selectableList}
        selectRespond={this.selectRespond}
        selectClass={this.props.selectableSelectClass}
        selectOnStart={this.props.selectOnStart}
      />
    );
  }

  renderTargets() {
    return (
      <div className="header">
        {this.renderContentList('targets')}
      </div>
    );
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        {this.renderAssets()}
        {this.renderTargets()}
        {this.renderSelectable()}
      </div>
    );
  }
}

export default TargetSelectable;
