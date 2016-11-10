pl.game.component('modal', function () {

  this.item = function (_id) {
    this.select(this);
    this.reveal.item(_id);
  };

  this.behavior('close', function () {
    if (!this.screen.state(this.screen.STATE.VOICE_OVER) || this.game.demoMode) {
      if (this.game.audio.sfx.button) this.game.audio.sfx.button.play();
      this.deselect();
    }
  });
});
