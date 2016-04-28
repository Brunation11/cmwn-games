/**
 * Index script
 * @module
 */
// import 'js-interactive-library';
// import '../../../../../js-interactive-library';
import './config.game';

import '../../..//shared/js/screen-ios-splash';
import './components/multiple-choice/behavior';
import './components/reveal/behavior';
import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/selectable-reveal/behavior';
import './components/selectable/behavior';
import './components/title/behavior';
import './components/video/behavior';

import '../../../shared/js/test-platform-integration';
import '../../../shared/js/google-analytics';

pl.game('be-bright', function () {

  var screens, restart, vScreens, startVideo;

  restart = function () {
    this.on('ui-open', function (_event) {
      if (!this.is(_event.target)) return;

      this.unhighlight(this.find('.HIGHLIGHTED'));
      this.selectableReveal.reveal.closeAll();
    });
  };

  startVideo = function () {
    this.on('ui-open', function () {
      if (this.game.bgSound) this.game.bgSound.pause();
      setTimeout(function () {
        this.video.start();
      }.bind(this), 250);
    });
    this.on('ui-close', function () {
      this.video.pause();
      if (this.game.bgSound) this.game.bgSound.play();
    });
  };

  this.screen('title', function () {
    this.on('ready', function (_event) {
      if (!this.is(_event.target)) return;

      if (this.game.iosSplash.state(this.STATE.READY)) this.game.iosSplash.splash();
    });

    this.on('ui-open', function (_event) {
      if (!this.is(_event.target)) return;

      this.start();
      this.delay('3s', function () {
        this.title.complete();
        this.title.audio.sfx.play();
      });
    });

    this.startAudio = function () {
      this.title.startAudio();
    };

  });

  screens = ['bulbs', 'switches'];

  screens.map(function (name) {
    this.screen(name, restart);
  }.bind(this));

  this.screen('pig', function () {
    this.on('ui-open', function (_event) {
      if (!this.is(_event.target)) return;

      this.deselect(this.find('.SELECTED'));
      this.multipleChoice.removeClass('COMPLETE').isComplete = false;
    });
  });

  vScreens = ['video', 'video-2'];

  vScreens.map(function (name) {
    this.screen(name, startVideo);
  }.bind(this));

  this.screen('flip', function () {

    this.ready = function () {
      this.audio.voiceOver.on('ended', function (_event) {
        this.stampImg.addClass('START');
        this.audio.sfx.stamp.play();
      }.bind(this));
    };

    this.next = function () {
      this.game.quit.okay();
    };

    this.complete = function (_event) {
      var eventCategory = (['game', this.game.id(), this.id() + '(' + (this.index() + 1) + ')']).join(' ');

      ga('send', 'event', eventCategory, 'complete');

      return this.proto();
    };
  });

  this.screen('quit', function () {
    this.on('ui-open', function () {
      this.game.audio.sfx.button.play();
    });
  });

  this.exit = function () {
    var screen, eventCategory;

    screen = this.findOwn(pl.game.config('screenSelector') + '.OPEN:not(#quit)').scope();
    eventCategory = (['game', this.id(), screen.id() + '(' + (screen.index() + 1) + ')']).join(' ');

    ga('send', 'event', eventCategory, 'quit');

    return this.proto();
  };

});
