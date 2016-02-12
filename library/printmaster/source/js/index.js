/**
 * Index script
 * @module
 */
import './testPlatformIntegration';
import '../../../../../js-interactive-library';
import './config.game';

// SCREENS
import identify from './screens/identify';
import carousel from './screens/carousel';

import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/title/behavior';
import './components/frame/behavior';
import './components/score/behavior';
import './components/reveal/behavior';
import './components/multiple-choice/behavior';
import './components/selectable/behavior';
import './components/selectable-reveal/behavior';
import './components/audio-sequence/behavior';
import './components/modal/behavior';

pl.game('printmaster', function () {

	var typing = function(_duration) {
		var duration = _duration || '.5s';
		return function() {
			this.on('ui-open', function() {
				this.game.audio.sfx.typing.play();
				this.delay(duration, function() {
					this.game.audio.sfx.typing.pause();
				});
			});
		};
	}

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
			this.close($('#loader'));
		});

	});

	this.screen('info-discover', typing('5s'));

	this.screen('info-arch', typing('.5s'));

	this.screen('info-loops', typing('.5s'));

	this.screen('info-whorl', typing('.5s'));

	this.screen('info-double-loop', typing('.5s'));

	this.screen('info-id', typing('3.25s'));

	this.screen('identify', identify);

	this.screen('carousel', carousel);

	this.screen('flip', function () {
		this.next = function () {
			this.game.quit.okay();
		};

		this.on('ui-open', function() {
			if(this.audio && this.audio.sfx) {
				this.delay('11s', this.audio.sfx.play.bind(this.audio.sfx));
			}
		});
	});


});
