pl.game.component('multiple-choice', function () {

  this.validateAnswer = function () {
    var answers;

    if (this.properties.correct) {
      answers = this.properties.correct.split(/\s*,\s*/);

      if (~answers.indexOf(String(this.getSelected().id()))) {
        this.complete();
      }
    }

    return false;
  };

  this.answer = function () {
    if (this.event) {
      $li = $(this.event.target).closest('li');

      if (this.select($li)) {
        this.validateAnswer();
      }
    }
  };

});
