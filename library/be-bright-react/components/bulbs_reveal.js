import Reveal from '../../shared/components/reveal/0.1';

class BulbsReveal extends Reveal {
  constructor() {
    super();

    this.state = {
      classes: {}
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

  renderAssets() {
    return (
      <div>
        <play.Audio ref="vo-0" type="voiceOver" src="media/S_3/VO_3.2.mp3" delay={2000} />
        <play.Audio ref="vo-1" type="voiceOver" src="media/S_3/VO_3.3.mp3" delay={2000} />
        <play.Audio ref="vo-2" type="voiceOver" src="media/S_3/VO_3.4.mp3" delay={2000} />
        <play.Audio ref="vo-3" type="voiceOver" src="media/S_3/VO_3.5.mp3" delay={2000} />
        <play.Audio ref="open-sound" type="sfx" src="media/_Buttons/S_BU_3.mp3" />
      </div>
    );
  }
}

export default BulbsReveal;
