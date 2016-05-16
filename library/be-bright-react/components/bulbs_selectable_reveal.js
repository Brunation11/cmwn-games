import SelectableReveal from '../../shared/components/selectable_reveal/0.1';
import BulbsSelectable from './bulbs_selectable';
import BulbsReveal from './bulbs_reveal';

class BulbsSelectableReveal extends SelectableReveal {
  constructor() {
    super();

  }

  renderSelectable() {
    return (
      <BulbsSelectable ref="selectable" selectRespond={this.selectRespond.bind(this)} />
    );
  }

  renderReveal() {
    return (
      <BulbsReveal ref="reveal" />
    );
  }
}

export default BulbsSelectableReveal;
