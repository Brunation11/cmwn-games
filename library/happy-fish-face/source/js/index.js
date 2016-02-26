/**
 * Index script
 * @module
 */
import './testPlatformIntegration';
import 'js-interactive-library';
// import '../../../../../js-interactive-library';
import './config.game';

// SCREENS

import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/frame/behavior';
import './components/score/behavior';
import './components/timer/behavior';
import './components/reveal/behavior';
import './components/multiple-choice/behavior';
import './components/selectable/behavior';
import './components/selectable-reveal/behavior';
import './components/audio-sequence/behavior';
import './components/modal/behavior';

pl.game('happy-fish-face', function () {

	this.screen('title', function () {

		this.on('ready', function (_event) {
			// Screens are display:none then when READY get display:block.
			// When a screen is OPEN then it transitions a transform,
			// the delay is to prevent the transition failing to play
			// because of collision of these styles.
			// 
			if (this.is(_event.target)) {
				this.delay(0, function() {
					this.open();
					this.close($('#loader'));
				});
			}
		});

	});

	this.screen('flip', function () {
		this.next = function () {
			this.game.quit.okay();
		};

		this.on('ready', function(_event) {
			if(!this.is(_event.target)) return;
			this.require('shake');
		});

		this.entity('.flip', function() {
			this.on('animationend', function(_event) {
				if(!this.is(_event.target) || !this.screen.allowAction()) return;
				this.screen.requiredQueue.ready('shake');
			});
		});
	});


});
