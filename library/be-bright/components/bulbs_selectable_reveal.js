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
    var assets = [
      <skoash.Audio type="voiceOver" src="media/S_3/VO_3.2.mp3" delay={2000} />,
      <skoash.Audio type="voiceOver" src="media/S_3/VO_3.3.mp3" delay={2000} />,
      <skoash.Audio type="voiceOver" src="media/S_3/VO_3.4.mp3" delay={2000} />,
      <skoash.Audio type="voiceOver" src="media/S_3/VO_3.5.mp3" delay={2000} />,
      <skoash.Audio data-ref="open-sound" type="sfx" src="media/_Buttons/S_BU_3.mp3" />
    ];

    return (
      <BulbsReveal ref="reveal" assets={assets} />
    );
  }
}

export default BulbsSelectableReveal;
