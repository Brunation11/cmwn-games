/**
 * Index script
 * @module
 */
import './config.game';

import '../../../shared/js/screen-ios-splash';
import './components/cannon/behavior';
import './components/carousel/behavior';
import './components/frame/behavior';
import './components/map/behavior';
import './components/multiple-choice/behavior';
import './components/reveal/behavior';
import './components/score/behavior';
import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/selectable-reveal/behavior';
import './components/selectable/behavior';
import './components/slides/behavior';
import './components/title/behavior';

import '../../../shared/js/test-platform-integration';
import '../../../shared/js/google-analytics';

pl.game('polar-bear', function () {

  var resetMultipleChoice = function () {
    this.on('ui-open', function (_e) {
      if (!this.is(_e.target)) return;

      if (this.isComplete) this.deselect(this.find('.' + this.STATE.SELECTED));
    });
  };

  this.screen('title', function () {
    this.on('ready', function (_event) {
      if (!this.is(_event.target)) return;

      if (this.game.iosSplash.state(this.STATE.READY)) this.game.iosSplash.splash();
    });

    this.startAudio = function () {
      this.title.audio.background.play();
      this.title.audio.voiceOver.play();
    };

    this.stopAudio = function () {
      this.title.audio.voiceOver.stop('@ALL');
    };
  });

  this.screen('what-color', function () {
    this.on('ui-open', function (_e) {
      if (!this.slides.mc.is(_e.target)) return;

      if (this.isComplete) this.deselect(this.find('.' + this.STATE.SELECTED));
    });
  });

  this.screen('bears', function () {

    this.start = function () {
      this.proto();
      this.carousel.start();
    };

    this.stop = function () {
      this.carousel.stop();
    };

    this.on('ui-select', function (_event) {
      if (_event.targetScope === this.reveal) {
        this.reveal.delay('1s', function () {
          var $selected;

          $selected = this.getSelected();

          this.close();
          $selected
            .addClass('animated slideOutUp')
            .on('animationend', function () {
              $selected.removeClass('slideOutUp');
              $selected.off();
            });
        });

      }
    });

    this.on('ui-open', function (_event) {
      if (!this.is(_event.target)) return;

      if (this.isComplete) this.score.reset();
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

      this.reveal.item(_event.behaviorTarget.id());
    });

    this.respond('next', function () {
      this.cannon.ball.reload();
    });

    this.playSFX = function (_name) {
      var sfx;

      sfx = pl.util.resolvePath(this, 'audio.sfx.' + _name);

      if (sfx) sfx.play();

      return this;
    };

  });

  this.screen('experiment-hands', resetMultipleChoice);
  this.screen('experiment-why-warmer', resetMultipleChoice);
  this.screen('experiment-how-warmer', resetMultipleChoice);

  this.screen('experiment-discover', function () {
    this.on('ui-open', function (_e) {
      if (!this.is(_e.target)) return;

      this.unhighlight(this.find('.' + this.STATE.HIGHLIGHTED));
    });

    this.respond('select', function (_event) {
      var id = _event.message;

      if (id) {
        this.highlight(_event.behaviorTarget);
        this.audio.voiceOver[id].play();
      }
    });

    // this.entity('selectable', function () {
    //   this.behavior('select', function (_target) {
    //     var $target;

    //     if (this.event) {
    //       $target = $(this.event.target).closest('li');

    //       if (this.shouldSelect($target) !== false) {
    //         return {
    //           message: $target.id(),
    //           behaviorTarget: $target
    //         };
    //       }
    //     } else {
    //       this.proto(_target);
    //     }

    //     return false;
    //   });
    // });
  });

  this.screen('flip', function () {

    this.complete = function () {
      var eventCategory = (['game', this.game.id(), this.id() + '(' + (this.index() + 1) + ')']).join(' ');

      ga('send', 'event', eventCategory, 'complete');

      pl.game.trigger($.Event('platform-event', {
        name: 'flip',
        gameData: {id: this.game.id()}
      }));

      return this.proto();
    };

  });

  this.exit = function () {
    var screen, eventCategory;

    screen = this.findOwn(pl.game.config('screenSelector') + '.OPEN:not(#quit)').scope();
    eventCategory = (['game', this.id(), screen.id() + '(' + (screen.index() + 1) + ')']).join(' ');

    ga('send', 'event', eventCategory, 'quit');

    return this.proto();
  };

});
