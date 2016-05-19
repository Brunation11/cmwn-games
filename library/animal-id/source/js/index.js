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

  var showNext = function () {
    this.STATE.BACK = 'RETURN';

    this.state('return', '+RETURN');

    this.on('ui-open', function (_event) {
      if (!this.is(_event.target)) return;
      if (this.state(this.STATE.COMPLETE)) this.return(this);
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

  this.screen('id-carnivore', showNext);
  this.screen('id-marsupial', showNext);
  this.screen('id-rodent', showNext);
  this.screen('id-arachnid', showNext);
  this.screen('id-mammal', showNext);
  this.screen('id-mollusk', showNext);
  this.screen('id-reptile', showNext);
  this.screen('id-herbivore', showNext);

  this.screen('match-game', function () {
    this.entity('reveal', function () {
      this.handleCloseClick = function () {
        if (!this.screen.state(this.screen.STATE.VOICE_OVER) || this.game.demoMode) {
          this.closeAll();
        }
      };
    });

  this.screen('what-does-a-nose-do', function() {
    this.on('ui-open', function(_e) {
      if(!this.is(_e.target)) return;
      if(this.state(this.STATE.COMPLETE)) this.unhighlight(this.find('.'+this.STATE.HIGHLIGHTED));
    });

    this.on('ui-close', function (_event) {
      if (!this.is(_event.target)) return;
      this.reveal.closeAll();
      this.delay('.5s', this.matchGame.randomize.bind(this.matchGame));
    });
  });

  this.screen('dnd-lion', showNext);
  this.screen('dnd-sloth', showNext);
  this.screen('dnd-wolf', showNext);
  this.screen('dnd-elephant', showNext);
  this.screen('dnd-dragon', showNext);
  this.screen('dnd-pig', showNext);
  this.screen('dnd-gorilla', showNext);
  this.screen('dnd-mule', showNext);

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
