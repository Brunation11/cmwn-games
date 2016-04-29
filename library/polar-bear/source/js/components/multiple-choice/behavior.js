pl.game.component('multiple-choice', function () {

  function validateAnswer(_scope) {
    var $selected, answers, $correct;

    $selected = _scope.getSelected();

    if (_scope.properties.correct) {
      answers = _scope.properties.correct.split(/\s*,\s*/);

      if (~answers.indexOf(String($selected.index()))) {
        if (_scope.isComplete) _scope.playSFX('correct');
        _scope.complete();
      } else {
        _scope.playSFX('incorrect');
      }
    } else {
      $correct = _scope.find('[pl-correct]');

      if (~$.inArray($selected[0], $correct)) {
        if (_scope.isComplete) _scope.playSFX('correct');
        _scope.complete();
      } else {
        _scope.playSFX('incorrect');
      }
    }

    return false;
  }

  this.playSFX = function (_answer) {
    var sfx;

    sfx = pl.util.resolvePath(this, 'audio.sfx.' + _answer);

    if (sfx) sfx.play();

    return sfx;
  };

  this.playVO = function (_name) {
    var vo;

    vo = pl.util.resolvePath(this, 'audio.voiceOver.' + _name);

    if (vo) vo.play();

    return vo;
  };

  this.answer = function () {
    var $li;

    if (this.screen.state(this.screen.STATE.VOICE_OVER) && !this.game.demoMode) return;

    if (this.event) {
      $li = $(this.event.target).closest('li');
      this.playVO($li.id());

      if (this.select($li)) {
        validateAnswer(this);
      }
    }
  };

  this.start = function () {};

});
