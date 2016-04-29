/**
 * Monarch - Fly-Across Screen
 */
export default function flyAcross() {
  var count = 0;

  this.on('ready', function (_event) {
    if (!this.is(_event.target)) return;
    this.length = this.modal.reveal.find('li').length;
  });

  this.respond('landed', function (_event) {
    if (_event.message === 'red') {
      this.audio.sfx.correct.play();
      this.modal.item(count++);
      if (count >= this.length) count = 0;
    } else {
      this.audio.sfx.incorrect.play();
    }
  });

  this.entity('modal', function () {
    this.close = function () {
      if (!this.screen.state(this.screen.STATE.VOICE_OVER) || this.game.demoMode) {
        if (this.game.audio.sfx.button) this.game.audio.sfx.button.play();
        this.deselect();
        this.screen.runner.restart();
      }
    };
  });
}
