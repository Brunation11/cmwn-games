import SelectableReveal from '../../shared/components/selectable_reveal/0.1.js';

import Selectable from '../selectable/0.1.js';
import Reveal from '../reveal/0.1.js';

class IDSelectableReveal extends SelectableReveal {
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
}

export default IDSelectableReveal;
