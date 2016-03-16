/**
 * Index script
 * @module
 */
import './testPlatformIntegration';
import 'js-interactive-library';
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

	this.screen('floating-weed', function() {
		var count = 0;

		this.respond('select', function (_event) {
			this.audio.sfx.correct.play();
			this.modal.item(count++);
		});
	});

	this.screen('flip', function () {
		this.next = function () {
			this.game.quit.okay();
		};
	});


});
