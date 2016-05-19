pl.game.component('score', function () {

  this.value = 0;

  this.entity('.board', function () {

    this.template = null;

    this.ready = function () {
      this.template = this.html();
    };

    this.render = function () {
      this.html(this.template.replace('{{score}}', this.value));
      return this;
    };

  });

  this.init = function () {
    this.screen.require(this);
  };

  this.ready = function () {
    this.board.render();
  };

  this.up = function (_count) {
    this.value += _count || 1;

    this.board.render();

    if (this.value === parseInt(this.properties.max, 10)) {
      this.complete();
    }

    return this;
  };

  this.down = function (_count) {
    this.value -= _count || 1;

    this.board.render();

    if (this.value === parseInt(this.properties.max, 10)) {
      this.complete();
    }

    return this;
  };

});
