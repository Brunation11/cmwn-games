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
import './components/background/behavior';

pl.game('drought-out', function () {

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

	this.screen('info-no-water', function() {

		this.on('ready', function(_event) {
			if (!this.is(_event.target)) return;

			if(this.audio && this.audio.voiceOver) {
				this.audio.voiceOver.onended = function() {
					if(this.audio.sfx) this.audio.sfx.play();
				}.bind(this);
			}
		});
	});

	this.screen('info-environment', function() {

		this.on('ready', function(_event) {
			if (!this.is(_event.target)) return;

			if(this.audio && this.audio.voiceOver && this.audio.voiceOver.greatJob) {
				this.audio.voiceOver.greatJob.onended = function() {
					if(this.audio.voiceOver.letsLook) this.audio.voiceOver.letsLook.play();
				}.bind(this);
			}
		});
	});

	this.screen('flip', function () {
		this.next = function () {
			this.game.quit.okay();
		};
	});


});
