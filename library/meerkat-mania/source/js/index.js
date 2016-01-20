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
		
		this.ready = function () {
			this.open();
			this.close($('#loader'));
		};

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
		});

	});

	this.screen('roles', function () {

		this.respond('select', function (_event) {
			var index, stateMethod;

			console.log(_event);

			index = _event.message;
			stateMethod = this.properties.selectState || 'select';

			if (~index) {
				this[stateMethod](_event.behaviorTarget);
				// if(this.audio.sfx.correct) this.audio.sfx.correct.play();
			}
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

	this.screen('flip', function () {
		this.next = function () {
			this.game.quit.okay();
		};
	});


});
