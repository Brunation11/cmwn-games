import SelectableReveal from '../../shared/components/selectable_reveal/0.1';
import BulbsSelectable from './bulbs_selectable';
import BulbsReveal from './bulbs_reveal';

class BulbsSelectableReveal extends SelectableReveal {
  constructor() {
    super();

  }

  renderSelectable() {
    return (
      <BulbsSelectable />
    );
  }

  renderReveal() {
    return (
      <BulbsReveal />
    );
  }
}

export default BulbsSelectableReveal;
