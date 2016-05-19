/**
 * Index script
 * @module
 */
import './config.game';

// COMPONENTS
import '../../../shared/js/screen-ios-splash';
import './components/audio-sequence/behavior';
import './components/bubbles/behavior';
import './components/modal/behavior';
import './components/multiple-choice/behavior';
import './components/reveal/behavior';
import './components/score/behavior';
import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/selectable-reveal/behavior';
import './components/selectable/behavior';
import './components/timer/behavior';

import '../../../shared/js/test-platform-integration';
import '../../../shared/js/google-analytics';

pl.game('happy-fish-face', function () {

  var self = this;

  pl.game.attachScreen = function(cb) {
    cb.call(self);
  };

  var garbage = function () {
    this.on('ui-open', function () {
      this.game.addClass('garbage');
    });

    this.on('ui-close ui-leave', function () {
      this.game.removeClass('garbage');
    });
  };

  this.screen('title', function () {

    this.on('ready', function (_event) {
      if (!this.is(_event.target)) return;

      if (this.game.iosSplash.state(this.STATE.READY)) this.game.iosSplash.splash();
    });

    this.entity('.fish', function () {
      this.on('animationend', function (_event) {
        if (!this.is(_event.target) || !this.screen.allowAction()) return;
        this.complete();
      });
    });
  });

  this.screen('you-feel', function () {
    garbage.call(this);

    this.respond('select', function (_event) {
      var id, stateMethod;

      id = _event.message;
      stateMethod = this.properties.selectState || 'select';

      if (id != null) {
        this.audio.sfx.stop('@ALL');
        this.audio.sfx.play(id);
        this[stateMethod](_event.behaviorTarget);
        this.delay('2s', function () {
          this.requiredQueue.ready('select');
        });
      }
    });

    this.on('ready', function (_event) {
      if (!this.is(_event.target)) return;
      this.require('select');
    });

    this.on('ui-open', function () {
      this.deselect(this.find('.SELECTED'));
    });
  });

  this.screen('water-pollution', garbage);

  this.screen('healthy-water', function () {
    this.on('ui-open', function () {
      this.game.addClass('garbage');
    });

    this.on('ui-close ui-leave', function () {
      this.game.removeClass('garbage');
    });

    this.on('ui-open', function () {
      this.deselect(this.find('.SELECTED'));
    });
  });

  this.screen('clean-water', garbage);

  this.screen('multi-bubbles', function () {
    this.SELECTER = {
      CORRECT: '[pl-correct]'
    };

    this.respond('select', function (_event) {
      if (_event.behaviorTarget.hasClass('HIGHLIGHTED')) return;
      if (~this.items.correct.indexOf(_event.message)) {
        this.audio.voiceOver.play(_event.message);
        this.highlight(_event.behaviorTarget);
        this.score.up(10);
        this.items.correct.ready(_event.message);
      } else {
        this.score.down(10);
        this.audio.sfx.incorrect.play();
      }
    });

    this.on('ui-open', function (_e) {
      var correct;

      if (!this.is(_e.target)) return;

      if (this.isComplete) {
        this.unhighlight(this.find('.' + this.STATE.HIGHLIGHTED));
        this.start();
      }

      if(!this.items) {
        correct = pl.Queue.create();

        correct.on('complete', this.bind(function () {
          this.game.audio.sfx.screenComplete.play();
          this.complete();
        }));

        this.items = this
          .find(this.SELECTER.CORRECT)
          .map(function (_index, _node) {
            correct.add($(_node).id());
            return _node;
          })
          .toArray();

        this.items.correct = correct;
      }
    });
  });

  this.screen('trash', function () {
    this.SELECTOR = {
      CORRECT: '[pl-correct]'
    };

    this.on('ready', function (_event) {
      if (!this.is(_event.target)) return;

      this.on('touchstart', function () {
        this.addClass('TOUCH');
      }.bind(this));
    });

    this.setup = function () {
      var correct = pl.Queue.create();

      correct.on('complete', this.bind(function () {
        this.timer.stop();
        this.modal.item('goodJob');
        this.addClass('GOOD-JOB');
      }));

      this.items = this
        .$items
        .map(function (_index, _node) {
          correct.add($(_node).id());
          return _node;
        })
        .toArray();

      this.unhighlight(this.$items);

      this.items.correct = correct;

      this.removeClass('TRY-AGAIN GOOD-JOB');
    };

    this.reset = function () {
      this.setup();
      this.deselect(this.modal);
      this.timer.restart();
    };

    this.respond('select', function (_event) {
      if (~this.items.correct.indexOf(_event.message)) {
        this.audio.sfx.correct.play();
        this.highlight(_event.behaviorTarget);
        this.items.correct.ready(_event.message);
      } else {
        this.audio.sfx.incorrect.play();
      }
    });

    this.respond('timerComplete', function() {
      this.addClass('TRY-AGAIN').modal.item('tryAgain');
    });

    this.on('ui-open', function (_e) {
      if (!this.is(_e.target)) return;

      if (this.modal.state(this.STATE.SELECTED)) {
        this.reset();
      }

      if (!this.$net) {
        this.$net = this.find('.net');

        this.mousemove(function (e){
          this.$net.css({left: e.clientX / this.game.zoom - 50, top: e.clientY / this.game.zoom - 65});
        }.bind(this));
      }

      if (!this.$items) {
        this.$items = this
          .find(this.SELECTOR.CORRECT);
        this.setup();

      }

      this.modal.reveal.audio.voiceOver.on('ended', function (_e) {
        if (this.screen.state(this.STATE.OPEN)) {
          if (_e.target.id() === 'goodJob') this.audio.voiceOver.neverThrow.play();
        }
      }.bind(this.modal.reveal));
    });

    this.on('ui-leave ui-close', function() {
      this.modal.reveal.audio.voiceOver.off('ended');
    });
  });

  this.screen('flip', function () {
    this.next = function () {
      this.game.quit.okay();
    };

    this.complete = function () {
      var eventCategory = (['game', this.game.id(), this.id() + '(' + (this.index() + 1) + ')']).join(' ');

      ga('send', 'event', eventCategory, 'complete');

      pl.game.report.flip(this, {
        name: 'flip',
        gameData: {id: this.game.id()}
      });

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
