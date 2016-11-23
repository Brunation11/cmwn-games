/**
 * Index script
 * @module
 */
import './config.game';

import 'shared/js/screen-ios-splash';
import './source/js/components/audio-sequence/behavior';
import './source/js/components/frame/behavior';
import './source/js/components/modal/behavior';
import './source/js/components/multiple-choice/behavior';
import './source/js/components/reveal/behavior';
import './source/js/components/runner/behavior';
import './source/js/components/score/behavior';
import './source/js/components/screen-basic/behavior';
import './source/js/components/screen-quit/behavior';
import './source/js/components/selectable-reveal/behavior';
import './source/js/components/selectable/behavior';
import './source/js/components/video/behavior';

// import 'shared/js/test-platform-integration';
import 'shared/js/google-analytics';

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

    this.screen('fly-across', function () {
        var count = 0;

        this.on('ui-open', function (_event) {
            if (!this.is(_event.target)) return;
            this.length = this.modal.reveal.find('li').length;
        });

        this.respond('landed', function (_event) {
            if (_event.message === 'red') {
                this.audio.sfx.correct.play();
                this.modal.item(count++);
                if (count >= this.length) count = 0;
            } else {
                this.audio.sfx.incorrect.play();
            }
        });

        this.respond('close', function (_event) {
            if (!this.modal.is(_event.target)) return;
            this.screen.runner.restart();
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

    this.screen('four-generations', function () {
        this.on('ui-open', function () {
            this.deselect(this.selectableReveal.reveal.find('li'));
        });

        this.on('audio-ended', function (_event) {
            if (this.audio.voiceOver.lifespan === _event.target) {
                this.selectableReveal.reveal.item(4);
            }
        });
    });

    this.screen('flip', function () {
        this.next = function () {
            this.game.quit.okay();
        };

        this.on('animationend', function (_event) {
            if (!this.flipContainer.is(_event.target)) return;
            this.find('.pupa').addClass('SHAKE');
            this.screen.audio.sfx.shake.play();
        });

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
