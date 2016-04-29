pl.game.component('selectable-remove', function () {

  this.behavior('select', function (_target) {
    var $target;
    $target = $(this.event.target).closest('li');

    if (this.event && !_target && !$target.hasClass(this.STATE.HIGHLIGHTED)) {

      if (this.shouldSelect($target) !== false) {
        $target.is('li') && this.audio.sfx.correct.play();
        return {
          message: $target.attr('class'),
          behaviorTarget: $target
        };
      } else {
        this.audio.sfx.incorrect.play();
      }
    }

    return false;
  });

  this.respond('select', function (_event) {
    var index, stateMethod;

    index = _event.message;
    stateMethod = this.properties.selectState || 'select';

    if (index) {
      this[stateMethod](_event.behaviorTarget);
      this.items.correct.ready(index);
    }
  });

  this.shouldSelect = function (_target) {
    var $target = $(_target);
    if (!$target.is('[pl-incorrect]')) {
      return !this.screen.state(this.STATE.VOICE_OVER);
    }

    return false;
  };

  this.start = function () {
    var correct = pl.Queue.create();

    correct.on('complete', this.bind(function () {
      this.complete();
    }));

    this.items = this
      .find('.items li:not([pl-incorrect])')
      .map(function (_index, _node) {
        correct.add(_node.className);
        return _node;
      })
      .toArray();

    this.items.correct = correct;
  };

  this.ready = function () {
    var $net = $('.selectable-remove-component .net');

    this.mousemove(this.bind(function (e){
      $net.css({left: e.clientX / this.game.zoom - 72, top: e.clientY / this.game.zoom - 50});
    }));
  };

});
