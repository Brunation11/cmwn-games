/**
 * Index script
 * @module
 */
import './testPlatformIntegration';
import 'js-interactive-library';
import './config.game';

import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/title/behavior';
import './components/frame/behavior';
import './components/score/behavior';
import './components/reveal/behavior';
import './components/multiple-choice/behavior';
import './components/selectable/behavior';
import './components/selectable-all/behavior';
import './components/selectable-reveal/behavior';
import './components/video/behavior';

pl.game('meerkat-mania', function () {

	this.screen('title', function () {

		this.on('ui-open', function (_event) {
			if (this === _event.targetScope) {
				this.title.start();
			}
		});

		this.on('ready', function (_event) {
			// Screens are display:none then when READY get display:block.
			// When a screen is OPEN then it transitions a transform,
			// the delay is to prevent the transition failing to play
			// because of collision of these styles.
			// 
			if (this.is(_event.target)) this.delay(0, this.open);
			this.close(this.game.loader);
		});

	});

	this.screen('roles', function () {

		this.respond('select', function (_event) {
			var index = _event.message;

			if (Number.isInteger(index) && ~index) {
				this.highlight(_event.behaviorTarget);
				this.selectableCanvas.activate(_event.behaviorTarget);
				this.reveal.item(index);
				// if(this.audio.sfx.correct) this.audio.sfx.correct.play();
			}
		});

		this.respond('closeAll', function(didClose) {
			if(didClose) this.selectableCanvas.deactivateAll();
		});

		this.entity('selectable-canvas', function() {
			this.start = function() {
				this.ready();
				this.deactivateAll();
				this.unhighlightAll();
				this.reveal.item(6);
			};
		});
	});

	this.screen('video', function() {
		this.on("ui-close", function() {
			this.video.pause();
			if(this.game.bgSound) this.game.bgSound.play();
		});
	});

	this.screen('feel', function () {

		this.respond('select', function (_event) {
			var index, stateMethod;

			index = _event.message;
			stateMethod = this.properties.selectState || 'select';

			if (~index) {
				this[stateMethod](_event.behaviorTarget);
				if(this.audio.sfx.correct) this.audio.sfx.correct.play();
				if(this.selectable.audio.voiceOver[index]) this.selectable.audio.voiceOver[index].play();
				this.complete();
			}
		});
	});

	/**
	 * Adds Flip screen behavior to send game completion to GA.
	 */
	this.screen('flip', function () {
		this.next = function () {
			this.game.quit.okay();
		};

		this.on('ui-open', function() {
			this.delay('4.5s', function() {
				if(this.audio.sfx.flip && this.state(this.STATE.OPEN)) this.audio.sfx.flip.play();
			});
		});

		this.complete = function (_event) {
			var eventCategory = (['game', this.game.id(), this.id()+'('+(this.index()+1)+')']).join(' ');

			ga('send', 'event', eventCategory, 'complete');

			return this.proto();
		};
	});

	/**
	 * When the game exits submit a GA (Google Analytics) event.
	 * @override
	 */
	this.exit = function () {
		var screen, eventCategory;

		screen = this.findOwn(pl.game.config('screenSelector')+'.OPEN:not(#quit)').scope();
		eventCategory = (['game', this.id(), screen.id()+'('+(screen.index()+1)+')']).join(' ');

		ga('send', 'event', eventCategory, 'quit');

		return this.proto();
	};
});
