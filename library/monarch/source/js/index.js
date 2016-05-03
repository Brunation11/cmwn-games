/**
 * Index script
 * @module
 */
import './config.game';

import '../../../shared/js/screen-ios-splash';
import './components/audio-sequence/behavior';
import './components/frame/behavior';
import './components/modal/behavior';
import './components/multiple-choice/behavior';
import './components/reveal/behavior';
import './components/runner/behavior';
import './components/score/behavior';
import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/screen-title/behavior';
import './components/selectable-reveal/behavior';
import './components/selectable/behavior';
import './components/video/behavior';

import '../../../shared/js/test-platform-integration';
import '../../../shared/js/google-analytics';

pl.game('monarch', function () {

  this.screen('title', function () {
    this.on('ui-open', function () {
      this.repeat('4s', function () {
        this.audio.sfx.play();
      });
      this.audio.sfx.on('play', function () {
        this.pupa.addClass('SHAKE');
      }.bind(this));
      this.audio.sfx.on('ended', function () {
        this.pupa.removeClass('SHAKE');
      }.bind(this));
    });

    this.pause = function () {
      this.kill('repeat');
      this.__proto__.pause();
    };

    this.resume = function () {
      this.repeat('4s', function () {
        this.audio.sfx.play();
      });
      this.__proto__.resume();
    };

    this.on('ready', function (_event) {
      if (!this.is(_event.target)) return;

      if (this.game.iosSplash.state(this.STATE.READY)) this.game.iosSplash.splash();
    });

    this.on('ui-close', function () {
      this.kill('repeat');
    });
  });

  this.screen('floating-weed', function () {
    var count = 0;

    this.on('ui-open', function (_event) {
      if (!this.is(_event.target)) return;
      this.length = this.modal.reveal.find('li').length;
    });

    this.respond('select', function (_event) {
      if (!_event.behaviorTarget.is('li')) return;
      this.audio.sfx.correct.play();
      this.modal.item(count++);
      if (count >= this.length) count = 0;
    });
  });

  

  window._screenDeferred = function (cb) {
    cb.call(this);
  };

  this.exit = function () {
    var screen, eventCategory;

    screen = this.findOwn(pl.game.config('screenSelector') + '.OPEN:not(#quit)').scope();
    eventCategory = (['game', this.id(), screen.id() + '(' + (screen.index() + 1) + ')']).join(' ');

    ga('send', 'event', eventCategory, 'quit');

    return this.proto();
  };


});
