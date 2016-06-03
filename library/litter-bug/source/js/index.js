/**
 * Index script
 * @module
 */
import './config.game';

import '../../../shared/js/screen-ios-splash';
import './components/frame/behavior';
import './components/no/behavior';
import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/selectable-remove/behavior';
import './components/slides/behavior';
import './components/title/behavior';
import './components/video/behavior';

import '../../../shared/js/test-platform-integration';
import '../../../shared/js/google-analytics';

pl.game('litterbug', function () {

  this.screen('title', function () {

    this.on('ui-open', function (_event) {
      if (this === _event.targetScope) {
        this.title.start();
      }
    });

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

  this.screen('clean-up', function () {

    this.state('incomplete', '-COMPLETE', {
      didSet: function (_target) {
        _target.isComplete = false;
      }
    });

    this.on('ui-open', function (_event) {
      if (!this.is(_event.target)) return;
      this.game.removeClass('sun');
      this.incomplete(this);
      this.incomplete(this.slides.trash);
      this.slides.trash.ready();
    });
  });

  this.screen('video', function () {
    this.on('ui-open', function (_e) {
      if (!this.is(_e.target)) return;
      setTimeout(function () {
        this.start();
      }.bind(this), 250);
    });

    this.on('ui-close', function () {
      this.video.pause();
      if (this.game.bgSound) this.game.bgSound.play();
    });
  });

  this.screen('flip', function () {
    this.next = function () {
      var buttonSound = pl.util.resolvePath(this, 'game.audio.sfx.button');
      if (buttonSound) buttonSound.play();
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
