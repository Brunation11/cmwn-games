import Selectable from '../selectable/0.1.js';
import Reveal from '../reveal/0.1.js';

class SelectableReveal extends play.Component {
  constructor() {
    super();

  }

  selectRespond(message) {
    if (typeof this.refs.reveal.open === 'function') {
      this.refs.reveal.open(message);
    }
  }

  renderSelectable() {
    return (
      <Selectable ref="selectable" selectRespond={this.selectRespond.bind(this)} />
    );
  }

  renderReveal() {
    return (
      <Reveal ref="reveal" />
    );
  }

  getClasses() {
    var classes = '';

    if (this.state.complete) classes += ' COMPLETE';

    return classes;
  }

  render() {
    return (
      <div className={"selectable-reveal" + this.getClasses()}>
        {this.renderSelectable()}
        {this.renderReveal()}
      </div>
    );
  }
}

export default SelectableReveal;
