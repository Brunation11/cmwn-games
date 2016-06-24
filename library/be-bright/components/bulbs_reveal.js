import Reveal from '../../shared/components/reveal/0.1';

class BulbsReveal extends Reveal {
  constructor() {
    super();

    this.state = {
      openReveal: '',
    };

    this.list = [
      <li>
        <p>Light bulbs burn electricity!</p>
      </li>,
      <li>
        <p>Making electricity burns fossil fuels!</p>
      </li>,
      <li>
        <p>Burning fossil fuels contributes<br/> to bad air quality and climate change!</p>
        </li>,
      <li>
        <p>Leaving the lights on when<br/> you don’t need them costs money!</p>
      </li>
    ];
  }
}

export default BulbsReveal;
