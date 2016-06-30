/**
 * Index script
 * @module
 */
import './config.game';

// SCREENS

// COMPONENTS
import '../../../shared/js/screen-ios-splash';
import './components/audio-sequence/behavior';
import './components/frame/behavior';
import './components/modal/behavior';
import './components/multiple-choice/behavior';
import './components/reveal/behavior';
import './components/score/behavior';
import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/screen-title/behavior';
import './components/selectable-reveal/behavior';
import './components/selectable/behavior';
import './components/slides/behavior';

import '../../../shared/js/test-platform-integration';
import '../../../shared/js/google-analytics';

pl.game('tag-it', function () {

  var audioClasses, audioScreens, k;

  this.changeWallpaper = function (wallpaper) {
    this.removeClass('PRECIOUS RECYCLE STEPS SCISSORS SPREAD').addClass(wallpaper);
  };

  audioClasses = function () {
    var classes = '';

    this.on('audio-play', function (_event) {
      var id = _event.target.$el[0].id;
      id = id ? id.toUpperCase() : false;
      classes += id + ' ';
      this.addClass(id);
    });

    this.on('ui-close', function (_event) {
      if (!this.is(_event.target)) return;
      this.removeClass(classes);
      classes = '';
    });
  };

  audioScreens = ['step-1', 'step-2', 'what-need'];

  for (k in audioScreens) {
    this.screen(audioScreens[k], audioClasses);
  }

  this.screen('what-faucet', function () {
    audioClasses.call(this);

    this.respond('select', function (_event) {
      this.playSound(this.audio.sfx);
      this.select(_event.behaviorTarget);
    });
  });

  this.screen('tips', function () {
    var classes = '';

    this.on('audio-play', function (_event) {
      var id = _event.target.$el[0].id;
      var ids = [
        'use-your',
        'try-glow',
        'use-multiple',
        'create',
        'personalize'
      ];
      if (ids.indexOf(id) === -1) return;
      id = id ? id.toUpperCase() : false;
      classes += id + ' ';
      this.addClass(id);
      if (id) this.playSound(this.audio.sfx.answer);
    });

    this.on('ui-close', function (_event) {
      if (!this.is(_event.target)) return;
      this.removeClass(classes);
      classes = '';
    });
  });

  this.screen('flip', function () {
    audioClasses.call(this);

    this.next = function () {
      this.game.quit.okay();
    };

    this.complete = function () {
      var eventCategory;
      var theEvent = new Event('game-event', {bubbles: true, cancelable: false});
      theEvent.name = 'flip';
      theEvent.gameData = {id: this.game.id()};
      if (window.frameElement) window.frameElement.dispatchEvent(theEvent);
      eventCategory = (['game', this.game.id(), this.id() + '(' + (this.index() + 1) + ')']).join(' ');
      ga('send', 'event', eventCategory, 'complete');
      return this.proto();
    };
  });

  this.screen('quit', function () {
    var ctx;

    this.on('ready', function (_e) {
      if (!this.is(_e.target)) return;

      ctx = new (window.AudioContext || window.webkitAudioContext);
      this.audio.voiceOver.sure.setContext(ctx);
      this.audio.sfx.button.setContext(ctx);
    });

    this.on('ui-open', function () {
      var vo;

      vo = this.audio.voiceOver.sure;
      if (vo) vo.play();
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
