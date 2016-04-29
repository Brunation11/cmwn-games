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
    }

    else {
      this.proto(_target);
    }

    return false;
  });

  this.shouldSelect = function (_target) {
    return true;
  };

  this.deselectAll = function() {
    var items = this.find('li');
    this.deselect(items);
    this.unhighlight(items);
  };

});
