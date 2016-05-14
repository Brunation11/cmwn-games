import Reveal from '../../shared/components/reveal/0.1';

class BulbsReveal extends Reveal {
  constructor() {
    super();

  }

  renderListItems() {
    return (
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    );
  }
}

export default BulbsReveal;
