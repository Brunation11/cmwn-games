/**
 * Index script
 * @module
 */
import './config.game';

// SCREENS
import identify from './screens/identify';
import carousel from './screens/carousel';

import '../../../shared/js/screen-ios-splash';
import './components/audio-sequence/behavior';
import './components/cannon/behavior';
import './components/carousel/behavior';
import './components/frame/behavior';
import './components/modal/behavior';
import './components/multiple-choice/behavior';
import './components/reveal/behavior';
import './components/score/behavior';
import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/selectable-reveal/behavior';
import './components/selectable/behavior';
import './components/title/behavior';

import '../../../shared/js/test-platform-integration';
import '../../../shared/js/google-analytics';

pl.game('printmaster', function () {

  var typing = function (_duration) {
    var duration = _duration || '.5s';
    return function () {
      this.on('ui-open', function () {
        this.game.audio.sfx.typing.play();
        this.delay(duration, function () {
          this.game.audio.sfx.typing.stop();
        });
      });
      this.on('ui-close ui-leave', function () {
        this.game.audio.sfx.typing.stop();
      });
    };
  };

  this.screen('title', function () {

    this.on('ready', function (_event) {
      if (!this.is(_event.target)) return;

      if (this.game.iosSplash.state(this.STATE.READY)) this.game.iosSplash.splash();
    });

    this.on('ui-open', function (_event) {
      if (this.is(_event.target)) {
        this.title.start();
        this.delay('1.75s', function () {
          this.complete();
        });
      }
    });

    this.startAudio = function () {
      this.title.audio.background.play();
      this.title.audio.voiceOver.play();
    };

    this.stopAudio = function () {
      this.title.audio.voiceOver.stop('@ALL');
    };

  });

  this.screen('info-discover', typing('5s'));

  this.screen('info-arch', typing('.5s'));

  this.screen('info-loops', typing('.5s'));

  this.screen('info-whorl', typing('.5s'));

  this.screen('info-double-loop', typing('.5s'));

  this.screen('info-id', typing('4.25s'));

  this.screen('identify', identify);

  this.screen('carousel', carousel);

  this.screen('info-lets-dust', function () {
    typing('1s').call(this);

    this.on('audio-play', function (_event) {
      if (this.audioSequence.audio.voiceOver.count === _event.target) {
        this.addClass('COUNT');
      } else if (this.audioSequence.audio.voiceOver.engage === _event.target) {
        this.addClass('ENGAGE');
        this.game.audio.sfx.typing.play();
        this.delay('.75s', function () {
          this.game.audio.sfx.typing.stop();
        });
      } else {
        this.removeClass('COUNT ENGAGE');
      }
    });
  });

  this.screen('info-need', function () {
    this.on('audio-play', function (_event) {
      var id = _event.target.id();
      if (id) this.addClass(id.toUpperCase());
    });

    this.on('ui-close', function () {
      this.removeClass('LOTION TAPE POWDER BRUSH PAPER GLASS');
    });
  });

  this.screen('flip', function () {
    this.next = function () {
      this.game.quit.okay();
    };

    this.on('ready', function (_event) {
      if (!this.is(_event.target)) return;
      this.require('shake');
    });

    this.on('animationend', function (_event) {
      if (this.isComplete || this.find('.flip')[0] !== _event.target || !this.allowAction()) return;
      this.requiredQueue.ready('shake');
    });

    this.complete = function () {
      var eventCategory;
      var theEvent = new Event('game-event', {bubbles: true, cancelable: false});
      theEvent.name = 'flip';
      theEvent.gameData = {
        id: this.game.id(),
        name: 'flip'
      };
      if (window.frameElement) window.frameElement.dispatchEvent(theEvent);
      eventCategory = (['game', this.game.id(), this.id() + '(' + (this.index() + 1) + ')']).join(' ');
      ga('send', 'event', eventCategory, 'complete');
      return this.proto();
    };
  });

  this.exit = function () {
    var screen, eventCategory;

    screen = this.findOwn(pl.game.config('screenSelector') + '.OPEN:not(#quit)').scope();
    eventCategory = (['game', this.id(), screen.id() + '(' + (screen.index() + 1) + ')']).join(' ');

    ga('send', 'event', eventCategory, 'quit');

    pl.game.report.flip(this, {
      name: 'flip',
      gameData: {id: this.id()}
    });

    return this.proto();
  };

});
