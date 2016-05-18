import SelectableReveal from '../../shared/components/selectable_reveal/0.1';
import SwitchesSelectable from './bulbs_selectable';
import SwitchesReveal from './bulbs_reveal';

class SwitchesSelectableReveal extends SelectableReveal {
  constructor() {
    super();

  }

  renderSelectable() {
    return (
      <SwitchesSelectable ref="selectable" selectRespond={this.selectRespond.bind(this)} />
    );
  }

  renderReveal() {
    return (
      <SwitchesReveal ref="reveal" />
    );
  }
}

export default SwitchesSelectableReveal;
