/**
 * Printmaster - Carousel Screen
 */
export default function carousel() {
  this.on('ready', function (_event) {
    if (!this.is(_event.target)) return;

    this.$targets = this.find('.target img');
  });

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

  this.start = function (_event) {
    this.proto();
    this.carousel.start();
  };

  this.stop = function () {
    this.carousel.stop();
  };

  this.on('ui-open', function (_event) {
    if (!this.is(_event.target)) return;

    this.carousel.start();
    this.modal.item(8);
    this.setTarget();

    this.game.audio.sfx.typing.play();
    this.delay('3.5s', function () {
      this.game.audio.sfx.typing.stop();
    });
  });

  this.state('incomplete', '-COMPLETE', {
    willSet: function (_target) {
      this.isComplete = false;
    }
  });

  this.entity('carousel', function () {
    // The event 'behaviorTarget' for this entities 'hit' behavior
    this.provideBehaviorTarget = function () {
      // Choose the item thats in the middle of the 3 visible.
      return this.current().next();
    };

  });

  this.entity('cannon', function () {
    this.behavior('fire', function () {
      if (this.isLaunchComplete) {
        this.launch(this.ball);
        return {
          message: this.screen.target
        };
      }

      return false;
    });
  });

  this.entity('score', function () {

    this.entity('board', function () {

      this.on('ready', function (_event) {
        if (!this.is(_event.target)) return;

        this.items = this.find('div');
      });

      this.render = function () {
        this.highlight(this.items[this.value - 1]);
        return this;
      };
    });

    this.up = function (_count) {
      this.value += _count || 1;

      this.board.render();

      console.log('score', this.value, this.properties.max);

      if (this.value == this.properties.max) {
        console.log('score complete');
        this.delay('1s', this.complete);
      }

      return this;
    };

    this.behavior('complete', function () {
      return {
        message: 'score'
      };
    });

    this.reset = function () {
      this.value = 0;
      this.unhighlight(this.board.items);
    };
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
