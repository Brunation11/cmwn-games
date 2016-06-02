/**
 * Defines the game scope and imports used component behaviors.
 */
import './config.game';

// INCLUDE USED COMPONENT BEHAVIORS HERE
import '../../../shared/js/screen-ios-splash';
import './components/characters/behavior';
import './components/dropzone/behavior';
import './components/frame/behavior';
import './components/multiple-choice/behavior';
import './components/reveal/behavior';
import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/selectable-all/behavior';
import './components/selectable-remove/behavior';
import './components/title/behavior';
import './components/video/behavior';

import '../../../shared/js/test-platform-integration';
import '../../../shared/js/google-analytics';

// Sea Turtle game scope.
// This selects the element `#sea-turtle`.
//
pl.game('sea-turtle', function () {

  /**
   * Make the title screen auto display when its ready.
   * @override
   */
  this.screen('title', function () {
    this.on('ready', function (_event) {
      if (!this.is(_event.target)) return;

      if (this.game.iosSplash.state(this.STATE.READY)) this.game.iosSplash.splash();
    });
  });

  this.screen('video', function () {

    this.on('ui-open', function () {
      this.video.start();
    });

    this.on('ui-close', function () {
      this.video.pause();
    });

  });

  this.screen('globe', function () {

    var onClose;

    /**
     * The reveal component holds the correct/incorrect splash
     * images. So its responsible for handling the multiple
     * choice "answer" behavior by displaying the
     * "correct" or "incorrect" image.
     */
    this.respond('answer', function (_event) {
      var message, playing;

      message = this.reveal[_event.message];
      playing = this.reveal.audio.playing();

      if (message && !this.reveal.isComplete) {
        this.reveal.select(message);
        this.delay('2s', function () {
          this.reveal.deselect(message);
        });

        if (playing) playing.stop();

        this.delay('2.5s', function () {
          if (this.reveal.wellDone.state(this.STATE.SELECTED)) return;
          this.reveal.item('instruction');
          this.characters.enable();
        });
      }
    });

    this.STATE.COMPLETE = 'COMPLETE';

    /**
     * When the screen has initialized, start watching the
     * background images we collected.
     */
    this.on('initialize', function (_event) {
      if (!this.is(_event.targetScope)) return;
      this.area = this.find('.area');
    });

    /**
     * When the character is droped, reveal the question.
     */
    this.respond('drop', function (_event) {
      var $character, sfx;

      $character = _event.behaviorTarget.parent();
      sfx = pl.util.resolvePath(this, 'dropzone.audio.sfx.drop');

      this.area.find('div:eq(' + $character.index() + ')').addClass('show active');
      this.reveal.item($character.index() + 1);

      this.characters.disable();
      this.deselect(this.reveal.find('img.response'));

      if (sfx) sfx.play();
    });

    this.respond('missed', function (_event) {
      _event.behaviorTarget.parent().removeClass('ACTIVE');
    });

    this.respond('answer', function (_event) {
      var sfx;

      sfx = pl.util.resolvePath(this, 'audio.sfx.' + _event.message);

      if (sfx) sfx.play();

      if (_event.targetScope.state(this.STATE.COMPLETE)) {
        this.area.find('div.active').removeClass('active');
      }
    });

    this.respond('complete', function (_event) {
      if (this.reveal.is(_event.targetScope)) {
        this.reveal.item('wellDone');
        this.audio.sfx.complete.play();
      }
    });

    this.on('ui-close ui-leave', function (_event) {
      if (!this.is(_event.target)) return;
      this.area.find('.active').removeClass('show active');
      if (this.characters.$active) this.characters.$active.removeClass('ACTIVE');
      this.characters.enable();
    });

    this.start = function () {
      // take advantage of the screen's start()
      this.proto();
      this.reveal.item(0);
    };

    this.on('ui-open', function (_e) {
      if (!this.is(_e.target)) return;

      if (this.isComplete) {
        this.deselect(this.dropzone.find('.SELECTED'));
        this.enable(this.characters.find('.DISABLED'));
        this.dropzone.find('.show').removeClass('show');
        this.reveal.item(0);
      }
    });

  });

  this.screen('trash', function () {
    this.on('ui-close', function (_e) {
      if (!this.is(_e.target)) return;

      if (this.isComplete) {
        this.delay('.5s', function () {
          this.unhighlight(this.find('.' + this.STATE.HIGHLIGHTED));
        });
      }
    });
  });

  this.screen('jellyfish', function () {
    this.respond('deselectTarget', function (_event) {
      if (!this.isComplete && (!this.state(this.STATE.VOICE_OVER) || this.game.demoMode)) {
        this.screen.requiredQueue.ready(this.reveal.audio.voiceOver[_event.message]);
      }
    });
  });

  this.screen('flip', function () {
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

  this.exit = function () {
    var screen, eventCategory;

    screen = this.findOwn(pl.game.config('screenSelector') + '.OPEN:not(#quit)').scope();
    eventCategory = (['game', this.id(), screen.id() + '(' + (screen.index() + 1) + ')']).join(' ');

    ga('send', 'event', eventCategory, 'quit');

    return this.proto();
  };

});
