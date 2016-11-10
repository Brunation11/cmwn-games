pl.game.component('characters', function () {
  /**
   * Responds to the "mousedown" event on the capture phase
   * to prevent propagation of the event.
   *
   * This will prevent the draggables inside to not be
   * draggable when the draggable or the container (this)
   * has the DISABLED UIState.
   */
  function preventDrag(_event) {
    var $target, isDisabled;

    $target = $(_event.target);
    isDisabled = [
      this.state(this.STATE.DISABLED),
      $target.state(this.STATE.DISABLED)
    ];

    if (~isDisabled.indexOf(true)) {
      _event.stopPropagation();
    }
  }

  this.$active = null;

  this.on('drag-start', function (_event) {
    (this.$active = _event.state.$draggable.closest('li'))
      .addClass('ACTIVE');
  });

  this.on('initialize', function () {
    var eventName = typeof this.$els[0].ontouchstart !== 'undefined' ? 'touchstart' : 'mousedown';
    // Add a vanilajs event listener attached to the capture event propagation phase.
    this.listen(eventName, true, preventDrag.bind(this));
  });

  this.respond('answer', function (_event) {
    if (_event.message === 'correct') {
      this.disable(this.$active.removeClass('ACTIVE'));
    }
  });

});
