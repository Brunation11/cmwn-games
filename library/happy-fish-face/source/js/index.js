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

  this.screen('clean-water', garbage);

  this.screen('flip', function () {
    this.next = function () {
      this.game.quit.okay();
    };

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
