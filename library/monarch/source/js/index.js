/**
 * Index script
 * @module
 */
// import 'js-interactive-library';
import '../../../../../js-interactive-library';
import './config.game';

// SCREENS
import flyAcross from './screens/fly-across';

import './components/screen-title/behavior';
import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/frame/behavior';
import './components/score/behavior';
import './components/reveal/behavior';
import './components/multiple-choice/behavior';
import './components/selectable/behavior';
import './components/selectable-reveal/behavior';
import './components/audio-sequence/behavior';
import './components/modal/behavior';
import './components/video/behavior';
import './components/runner/behavior';

pl.game('monarch', function () {

	this.screen('title', function() {
		this.on('ui-open', function() {
			this.repeat('4s', function() {
				this.audio.sfx.play();
			});
		});

		this.on('ready', function(_event) {
			if(!this.is(_event.target)) return;
			this.audio.sfx.onplay = function() {
				this.pupa.addClass('SHAKE');
			}.bind(this);
			this.audio.sfx.onended = function() {
				this.pupa.removeClass('SHAKE');
			}.bind(this);
		});

		this.on('ui-close', function() {
			this.kill('repeat');
		});
	});

	this.screen('fly-across', flyAcross);

	this.screen('floating-weed', function() {
		var count = 0;

		this.on('ready', function(_event) {
			if(!this.is(_event.target)) return;
			this.length = this.modal.reveal.find('li').length;
		});

		this.respond('select', function (_event) {
			if(!_event.behaviorTarget.is('li')) return;
			this.audio.sfx.correct.play();
			this.modal.item(count++);
			if(count >= this.length) count = 0;
		});
	});

	this.screen('four-generations', function() {
		this.on('ui-open', function() {
			this.deselect(this.selectableReveal.reveal.find('li'));
		});

		this.on('audio-ended', function(_event) {
			if(this.audio.voiceOver.lifespan === _event.target) {
				this.selectableReveal.reveal.item(4);
			}
		});

		this.entity('selectable-reveal', function() {
			this.start = function() {};

			this.respond('select', function (_event) {
				var index, stateMethod;

				index = _event.message;
				stateMethod = this.properties.selectState || 'select';

				if (~index) {
					this[stateMethod](_event.behaviorTarget);
					if(this.audio.sfx.button) this.audio.sfx.button.play();
					this.reveal.item(index);
				}
			});

			this.entity('selectable', function () {
				
				this.shouldSelect = function (_$target) {
					if (_$target.prev().hasClass(this.STATE.HIGHLIGHTED) || _$target.index() === 0) {
						return !this.screen.state(this.STATE.VOICE_OVER);
					}

					return false; 
				};

			});
		});
	});

	this.screen('flip', function () {
		this.next = function () {
			this.game.quit.okay();
		};

		this.entity('.flip-container', function() {
			this.on('animationend', function(_event) {
				if(!this.is(_event.target)) return;
				this.find('.pupa').addClass('SHAKE');
				this.screen.audio.sfx.shake.play();
			});
		});
	});

	this.exit = function () {
		var screen, eventCategory;

		screen = this.findOwn(pl.game.config('screenSelector')+'.OPEN:not(#quit)').scope();
		eventCategory = (['game', this.id(), screen.id()+'('+(screen.index()+1)+')']).join(' ');

		ga('send', 'event', eventCategory, 'quit');

		return this.proto();
	};


});
