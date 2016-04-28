pl.game.component('reveal', function () {

  this.item = function (_id) {
    var vo, index;

    this.close(this.find('li.OPEN'));

    if (typeof _id === 'number') {
      this.open(this.find('li').eq(_id));
      this.screen.playSound(this.audio.voiceOver[_id]);
    }

    else if (typeof _id === 'string') {
      if (this[_id]) {
        this.open(this[_id]);

        if (this.audio) {
          index = this[_id].index();
          vo = this.audio.voiceOver[_id] || this.audio.voiceOver[index];

          if (vo) this.screen.playSound(vo);
        }
      }
    }
  };

  this.closeAll = function (_$target) {
    if (this.allowAction()) {
      if (this.game.audio.sfx.button) this.game.audio.sfx.button.play();
      this.close(this.find('li.OPEN'));
    }
  };
});
