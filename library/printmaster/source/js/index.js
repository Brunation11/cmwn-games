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
			if(this.is(_event.targetScope)) {
				this.title.start();
			}
		});

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

	this.screen('info-discover', typing('5s'));

	this.screen('info-arch', typing('.5s'));

	this.screen('info-loops', typing('.5s'));

	this.screen('info-whorl', typing('.5s'));

	this.screen('info-double-loop', typing('.5s'));

	this.screen('info-id', typing('4.25s'));

	this.screen('identify', identify);

	this.screen('carousel', carousel);

	this.screen('info-lets-dust', function() {
		typing('1s').call(this);

		this.on('audio-play', function(_event) {
			if(this.audioSequence.audio.voiceOver.count === _event.target) {
				this.addClass('COUNT');
			} else if(this.audioSequence.audio.voiceOver.engage === _event.target) {
				this.addClass('ENGAGE');
				this.game.audio.sfx.typing.play();
				this.delay('.75s', function() {
					this.game.audio.sfx.typing.pause();
				});
			} else {
				this.removeClass('COUNT ENGAGE');
			}
		});
	});

	this.screen('info-need', function() {
		this.on('audio-play', function(_event) {
			var id = _event.target.getAttribute('pl-id');
			id = id ? id.toUpperCase() : false;
			this.addClass(id);
		});

		this.on('ui-close', function() {
			this.removeClass('LOTION TAPE POWDER BRUSH PAPER GLASS');
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
