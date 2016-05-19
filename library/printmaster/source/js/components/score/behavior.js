pl.game.component('score', function () {

  this.value = 0;

  this.entity('.board', function () {

    this.template = null;

    this.on('ready', function (_event) {
      if (!this.is(_event.target)) return;

      this.items = this.find('div');
    });

    this.render = function () {
      this.highlight(this.items[this.value - 1]);
      return this;
    };
  });

  this.init = function () {
    this.screen.require(this);
  };

  this.ready = function () {
    this.board.render();
  };

  this.reset = function () {
    this.value = 0;
    this.unhighlight(this.board.items);
  };

  this.up = function (_count) {
    this.value += _count || 1;

    this.board.render();

    if (this.value === parseInt(this.properties.max, 10)) {
      this.delay(this.properties.completeDelay || '0s', this.complete);
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

  this.behavior('complete', function () {
    return {
      message: 'score'
    };
  });
});
