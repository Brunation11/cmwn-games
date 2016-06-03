/**
 * Adds behavior to the reveal modal.
 * @todo Create a modal component which handles its layering.
 */
pl.game.component('modal', function () {

  /**
   * Expose reveal component method
   */
  this.item = function (_id) {
    this
      .removeClass('LAYER')
      .open();
    this.reveal.item(_id);
  };
  /**
   * Close the modal and play the standard button sound.
   * @override
   */
  this.close = function () {
    var so = pl.util.resolvePath(this, 'game.audio.sfx.button');

    if (this.screen.state(this.STATE.VOICE_OVER) && !this.screen.completed()) return;
    if (so) so.play();

    this.screen.enable('.draggables');
    this.disable($('.draggables [pl-id=' + this.find('li.SELECTED').id() + ']'));

    return this.sup();
  };
  /**
   * Watches for completion of state change tranisions and puts the view in a LAYER state.
   * We want to re-layer the view after it finishes transitioning out.
   * @see ~/source/css/flush-it.scss:134
   */
  this.on('transitionend', function (_event) {
    if (!this.is(_event.target)) return;
    if (!this.state(this.STATE.OPEN)) {
      this.addClass('LAYER').removeClass('PROGRESS');
    } else {
      this.addClass('PROGRESS');
    }
  });

});
