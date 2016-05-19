/**
 * Printmaster - Carousel Screen
 */
export default function carousel() {
  this.setTarget = function (_idx) {
    this.idx = _idx || 0;
    this.$target = $(this.$targets[this.idx]);
    this.target = this.$target.id();
    this.amount = this.$target.attr('pl-amount');

    if (this.target) {
      this.select(this.$target);

      if (this.score) {
        this.score.removeClass('loops whorl arch doubleloops').addClass(this.target);
        this.score.attr('pl-max', this.amount);
        this.score.properties.max = this.amount;
        this.score.reset();
      }
    } else {
      this.deselect(this.$targets);
    }
  };

  this.respond('complete', function (_event) {
    if (_event.message === 'score') {
      this.modal.item(this.idx);
      this.setTarget(++this.idx);
    }
  });

  this.start = function () {
    this.proto();
    this.carousel.start();
  };

  this.stop = function () {
    this.carousel.stop();
  };

  this.on('ui-open', function (_event) {
    if (!this.is(_event.target)) return;

    this.$targets = this.find('.target img');

    this.carousel.start();
    this.modal.item(8);
    this.setTarget();

    this.game.audio.sfx.typing.play();
    this.delay('3.5s', function () {
      this.game.audio.sfx.typing.stop();
    });
  });

  this.state('incomplete', '-COMPLETE', {
    willSet: function () {
      this.isComplete = false;
    }
  });

  this.respond('hit', function (_event) {
    if (_event.message === _event.behaviorTarget.id()) {
      this.score.up();
      this.playSFX('correct');
    } else {
      this.playSFX('incorrect');
    }
  });

  this.respond('next', function () {
    this.cannon.reload();
  });

  this.complete = function () {
    var r = this.proto();
    return r;
  };

  this.playSFX = function (_name) {
    var sfx;

    sfx = pl.util.resolvePath(this, 'audio.sfx.' + _name);

    if (sfx) sfx.play();

    return this;
  };
}
