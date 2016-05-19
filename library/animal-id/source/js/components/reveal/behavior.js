pl.game.component('reveal', function () {

  this.screen.STATE.COMPLETE = 'COMPLETE';
  this.nextOnClose = true;

  function playSound(_sound) {
    var delay;

    delay = $(_sound).attr('pl-delay');

    if (delay) {
      return this.delay(delay, _sound.play.bind(_sound));
    } else {
      return _sound.play();
    }
  }

  this.respond('select', function (_event) {
    var vo, index;

    index = _event.message;
    this.closeAll();

    if (typeof index !== 'undefined') {
      if (typeof index === 'number') {
        this.open(this.find('li').eq(index));
        this.audio.voiceOver[index].play();
      } else if (typeof index === 'string') {
        if (this[index]) {
          this.open(this[index]);

          if (this.audio) {
            if (this.audio.voiceOver.length) index = this[index].index();
            vo = this.audio.voiceOver ? this.audio.voiceOver[index] : null;

            if (vo) playSound.call(this, vo);
          }
        }
      }
    }
  });

  this.handleProperty({
    nextOnClose: function (_node, _name, _value) {
      if (this.is(_node)) {
        this.nextOnClose = _value === false ? false : true;
      }
    }
  });

  this.item = function (_id) {
    var vo;

    this.closeAll();

    if (typeof _id !== 'undefined') {
      if (typeof _id === 'number') {
        this.open('li:nth-child(' + _id + ')');
        this.audio.voiceOver[_id].play();
      } else if (typeof _id === 'string') {
        if (this[_id]) {
          this.open(this[_id]);

          if (this.audio) {
            if (this.audio.voiceOver.length) _id = this[_id].index();
            vo = this.audio.voiceOver ? this.audio.voiceOver[_id] : null;

            if (vo) playSound.call(this, vo);
          }
        }
      }
    }
  };

  this.closeAll = function () {
    if (!this.screen.state(this.screen.STATE.VOICE_OVER) || this.screen.state(this.screen.STATE.COMPLETE) || this.game.demoMode) {
      this.close(this.find('li.OPEN'));
    }
  };

  this.handleCloseClick = function () {
    if (!this.screen.state(this.screen.STATE.VOICE_OVER) || this.game.demoMode) {
      this.closeAll();
      if(this.nextOnClose) this.screen.next();
    }
  };
});
