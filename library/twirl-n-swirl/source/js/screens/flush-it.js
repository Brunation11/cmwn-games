/**
 * Twirl n Swirl - Toilet Flush Game
 */
export default function flushIt() {
  /**
   * Adds an ability for the screen to respond to items dropped in the
   * toilet bowl. Its responsibility is to show the reveal via the
   * dropped item's ID and disable draggable bins.
   */
  this.respond('drop', function (_event) {
    var id = _event.behaviorTarget.id();

    this.toilet.addClass('FLUSH').reveal.item(id).find('.FLUSH').removeClass('FLUSH');
    $('.draggables [pl-id=' + id + ']').addClass('TOILET');
    this.disable('.draggables');
  });
  /**
   * Show the instructional modal when the screen starts.
   */
  this.start = function () {
    this.modalReveal.item(0);
  };
  /**
   * The flush button action.
   * Here we animate the dropped item flushing and display the modal
   * by the item's ID.
   */
  this.flush = function () {
    var current = this.reveal.currentItem();

    this.game.audio.sfx.flush.play();

    if (!current) return;

    this.toilet.removeClass('FLUSH');
    current.addClass('FLUSH');

    this.game.audio.sfx.flush.off('ended').on('ended', function () {
      if (this.screen.state(this.screen.STATE.OPEN)) this.modalReveal.item(current.id());
    }.bind(this));
  };

  this.on('ui-close', function () {
    this.game.audio.sfx.flush.off('ended');
  });

  this.on('ui-open', function (_event) {
    if (!this.is(_event.target)) return;
    this.find('.TOILET').removeClass('TOILET');
    this.deselect(this.toilet.reveal.find('.SELECTED'));

    if (this.isComplete) this.find('.DISABLED').removeClass('DISABLED');
  });

}
