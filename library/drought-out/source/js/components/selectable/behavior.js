pl.game.component('selectable', function () {

  this.behavior('select', function (_target) {
    var $target, message;

    if (this.event) {
      $target = $(this.event.target).closest('li');
      message = $target.id() || $target.index();

      if (this.shouldSelect($target) !== false) {
        return {
          message,
          behaviorTarget: $target
        };
      }
    } else {
      this.proto(_target);
    }

    return false;
  });

  this.shouldSelect = function (_$target) {
    if (this.allowSelectAll || _$target.prev().hasClass(this.STATE.HIGHLIGHTED) || _$target.index() === 0) {
      return !this.screen.state(this.STATE.VOICE_OVER);
    }

    return false;
  };

  this.start = function () {
    this.allowSelectAll = typeof this.attr('pl-allow-select-all') !== 'undefined';
  };

});
