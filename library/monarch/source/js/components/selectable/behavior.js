pl.game.component('selectable', function () {

  this.behavior('select', function (_target) {
    var $target, id;

    if (this.event) {
      $target = $(this.event.target).closest('li');
      id = $target.id() || $target.index();

      if (this.shouldSelect($target) !== false) {
        return {
          message: id,
          behaviorTarget: $target
        };
      }
    } else {
      this.proto(_target);
    }

    return false;
  });

  this.shouldSelect = function (_$target) {
    console.log(this.properties);
    if (this.properties.eachSelectable || _$target.prev().hasClass(this.STATE.HIGHLIGHTED) || _$target.index() === 0) {
      return !this.screen.state(this.STATE.VOICE_OVER);
    }

    return false;
  };

  this.deselectAll = function () {
    var items = this.find('li');
    this.deselect(items);
    this.unhighlight(items);
  };

});
