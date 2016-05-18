import PigSelectable from './pig_selectable';

class PigScreen extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'pig'
    };
  }

  selectRespond(message) {
    if (message === 'saver') {
      this.audio.saver.play();
      this.audio.correct.play();
    } else {
      this.audio.pig.play();
    }
  }

  renderContent() {
    console.log(this.requireForComplete);
    return (
      <div>
        <play.Audio ref="vo" type="voiceOver" src="media/S_4/VO_4.1.mp3" pl-delay={1000} />
        <play.Audio ref="saver" type="voiceOver" src="media/S_4/VO_4.2.mp3" />
        <play.Audio ref="pig" type="voiceOver" src="media/S_4/S_4.1.mp3" complete />
        <play.Audio ref="correct" type="sfx" src="media/S_4/S_4.2.mp3" />
        <play.Image ref="title" className="animated" src="media/S_4/img_4.1.png" />
        <PigSelectable ref="selectable" selectRespond={this.selectRespond.bind(this)} />
      </div>
    );
  }
}

export default PigScreen;
