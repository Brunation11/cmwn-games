class Flip extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'flip'
    };

  }

  complete() {
    play.Screen.prototype.call(this);
    this.trigger('emit', {
      name: 'flip',
    });
  }

  renderNextButton() {
    return (
      <button className='next-screen' onClick={() => {play.trigger('quit')}}></button>
    );
  }

  renderContent() {
    return (
      <div>
        <play.Audio ref="vo" type="voiceOver" src="media/S_10/VO_10.1.mp3" />
        <play.Audio ref="start" type="sfx" src="media/S_10/S_10.2.mp3" delay={4000} />
        <h2>
          Good Job!<br/> Be a super Light Saver hero<br/> and <play.Image ref="flip-img" className="inline animated" src="media/S_10/img_10.1.png" /> that switch!
        </h2>
        <play.Image ref="stamp-img" className="stamp animated" src="media/S_10/img_10.2.png" />
      </div>
    );
  }
}

export default Flip;
