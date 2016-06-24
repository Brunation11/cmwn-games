import Reveal from '../../shared/components/reveal/0.1';

class SwitchesReveal extends Reveal {
  constructor() {
    super();

    this.state = {
      openReveal: '',
    };

    this.list = [
      <li>
        <p>They turn out the lights<br/> EVERY time they leave a room.</p>
      </li>,
      <li>
        <p>They help out by doing a walk through<br/> of their house before they leave<br/> to be sure the lights are out.</p>
      </li>,
      <li>
        <p>They even turn out lights that<br/> other people leave on!</p>
        </li>,
      <li>
        <p>They use notes to create reminders<br/> to help their families remember<br/> to flip that switch.</p>
      </li>,
      <li>
        <p>They inspire their friends and siblings<br/> to become Light Savers too!</p>
      </li>
    ];
  }

  renderAssets() {
    return (
      <div>
        <play.Audio ref="vo-0" type="voiceOver" src="media/S_5/VO_5.2.mp3" delay={2000} />
        <play.Audio ref="vo-1" type="voiceOver" src="media/S_5/VO_5.3.mp3" delay={2000} />
        <play.Audio ref="vo-2" type="voiceOver" src="media/S_5/VO_5.4.mp3" delay={2000} />
        <play.Audio ref="vo-3" type="voiceOver" src="media/S_5/VO_5.5.mp3" delay={2000} />
        <play.Audio ref="vo-4" type="voiceOver" src="media/S_5/VO_5.6.mp3" delay={2000} />
        <play.Audio ref="open-sound" type="sfx" src="media/_Buttons/S_BU_3.mp3" />
      </div>
    );
  }
}

export default SwitchesReveal;
