pl.game.component('score', function () {

  this.value = 0;

  this.entity('board', function () {

    this.template = null;
    this.images = null;

    this.ready = function () {
      this.template = this.counter.html();
      this.images = this.find('img');
    };

    this.render = function () {
      var image;

      if (this.images.length) {
        image = this.images[this.value];
        this.select(image);
      }

      this.counter.html(this.template.replace('{{score}}', this.value));

      return this;
    };

  });

  this.start = () => {
    this.value = 0;
    this.board.render();
  };

  this.ready = function () {
    this.board.render();
  };

  this.up = function (_count) {
    this.value += _count || 1;

    this.board.render();

    if (this.value >= this.properties.max) {
      this.complete();
    }

    return this;
  };

  this.down = function (_count) {
    this.value -= _count || 1;

    this.board.render();

    if (this.value >= this.properties.max) {
      this.complete();
    }

    return this;
  };

  this.state('incomplete', '-COMPLETE', {
    willSet: function () {
      this.isComplete = false;

      if (this.value >= this.properties.max) {
        this.value = this.properties.max - 1;
      }
    }
  });

});
