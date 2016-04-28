pl.game.component('selectable', function () {

  this.behavior('select', function (_target) {
    var $target;

    if(this.screen.state(this.screen.STATE.VOICE_OVER) && !this.game.demoMode) return false;

    if (this.event && !_target) {
      $target = $(this.event.target).closest('li');

      if (this.shouldSelect($target) !== false) {
        $target.is('li') && this.audio.sfx.correct.play();
        if(this.showSelect($target)) {
          return {
            message: $target.id(),
            behaviorTarget: $target
          };
        }
      }

      else {
        if(this.audio.sfx.incorrect) this.audio.sfx.incorrect.play();
      }
    }

    else {
      this.proto(_target);
    }

    return false;
  });

  this.shouldSelect = function (_$target) {
    return _$target.is(this.screen.SELECTOR.CORRECT);
  };

  this.showSelect = function(_$target) {
    var stateMethod;

    stateMethod = this.properties.selectState || 'select';

    if (_$target) {
      this[stateMethod](_$target);
    }

    return true;
  };

  this.populateList = function(_$bin) {
    var $items, $bin, random;

    $items = this.find(".items");
    $bin = _$bin;

    while($bin.length) {
      random = Math.floor(_$bin.length*Math.random());
      $bin.eq(random).remove().appendTo($items);
      $bin = this.find('.bin li');
    }
  };

  this.ready = function () {
    var $bin = this.find('.bin li');
    if($bin.length) this.populateList($bin);
  };

});
