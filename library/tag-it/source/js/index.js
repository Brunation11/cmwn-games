/**
 * Index script
 * @module
 */
import './testPlatformIntegration';
import 'js-interactive-library';
import './config.game';

// SCREENS

// COMPONENTS
import './components/screen-basic/behavior';
import './components/screen-title/behavior';
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

pl.game('tag-it', function () {

	this.changeWallpaper = function(wallpaper) {
		this.removeClass('PRECIOUS RECYCLE STEPS SCISSORS SPREAD').addClass(wallpaper);
	};

	this.screen('title', function() {
		this.entity('.title', function() {
			this.on('animationend', function(_event) {
				if(!this.is(_event.target)) return;
				this.complete();
			});
		});
	});

	this.screen('flip', function () {
		this.next = function () {
			this.game.quit.okay();
		};
	});


});
