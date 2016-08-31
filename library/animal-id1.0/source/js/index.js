/**
 * Index script
 * @module
 */
import './config.game';

import '../../../shared/js/screen-ios-splash';
import './components/class-switcher/behavior';
import './components/drop-responder/behavior';
import './components/dropzone/behavior';
import './components/flip-card/behavior';
import './components/frame/behavior';
import './components/match-game/behavior';
import './components/reveal/behavior';
import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/selectable/behavior';
import './components/sparkles/behavior';
import './components/title/behavior';

import '../../../shared/js/test-platform-integration';
import '../../../shared/js/google-analytics';

pl.game('animal-id', function () {

  var showNext, showNextScreens, self = this;

  showNext = function () {
    this.STATE.BACK = 'RETURN';

    this.state('return', '+RETURN');

    this.on('ui-open', function (_event) {
      if (!this.is(_event.target)) return;
      if (this.state(this.STATE.COMPLETE)) this.return(this);
      if (this.reveal) {
        this.reveal.close(this.reveal.find('li.OPEN'));
      }
    });
  };

  this.screen('title', function () {

    this.on('ready', function (_event) {
      if (!this.is(_event.target)) return;

      if (this.game.iosSplash.state(this.STATE.READY)) this.game.iosSplash.splash();
    });

    this.on('ui-open', function (_event) {
      if (this.is(_event.target)) this.title.startAudio();

      if (this.state(this.STATE.OPEN)) this.start();
    });

    this.startAudio = function () {
      this.title.audio.background.play();
    };

    this.stopAudio = function () {
      this.title.audio.background.stop();
    };

    this.entity('title', function () {
      this.on('animationend', function (_event) {
        if (!this.image.is(_event.target)) return;
        this.complete();
      });
    });

  });

  showNextScreens = [
    'id-carnivore',
    'id-marsupial',
    'id-rodent',
    'id-arachnid',
    'id-mammal',
    'id-mollusk',
    'id-reptile',
    'id-herbivore',
    'dnd-lion',
    'dnd-sloth',
    'dnd-wolf',
    'dnd-elephant',
    'dnd-dragon',
    'dnd-pig',
    'dnd-gorilla',
    'dnd-mule',
  ];

  showNextScreens.forEach(key => {
    self.screen(key, showNext);
  });

  this.screen('match-game', function () {
    this.on('ui-close', function (_event) {
      if (!this.is(_event.target)) return;
      this.reveal.close(this.reveal.find('li.OPEN'));
      this.delay('.5s', this.matchGame.randomize.bind(this.matchGame));
    });
  });

  this.screen('what-does-a-nose-do', function () {
    this.on('ui-open', function (_event) {
      if (!this.is(_event.target)) return;
      this.unhighlight(this.find('.HIGHLIGHTED'));
    });
  });

  this.screen('flip', function () {

    this.complete = function () {
      var eventCategory;
      var theEvent = new Event('game-event', {bubbles: true, cancelable: false});
      theEvent.name = 'flip';
      theEvent.gameData = {id: this.game.id()};
      if (window.frameElement) window.frameElement.dispatchEvent(theEvent);
      eventCategory = (['game', this.game.id(), this.id() + '(' + (this.index() + 1) + ')']).join(' ');
      ga('send', 'event', eventCategory, 'complete');

      pl.game.report.flip(this.game, {
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
