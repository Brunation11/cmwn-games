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
import './components/slides/behavior';
import './components/frame/behavior';
import './components/score/behavior';
import './components/reveal/behavior';
import './components/multiple-choice/behavior';
import './components/selectable/behavior';
import './components/selectable-reveal/behavior';
import './components/audio-sequence/behavior';
import './components/modal/behavior';

pl.game('tag-it', function () {

	var audioClasses, audioScreens, screenName;

	this.changeWallpaper = function(wallpaper) {
		this.removeClass('PRECIOUS RECYCLE STEPS SCISSORS SPREAD').addClass(wallpaper);
	};

	audioClasses = function() {
		var classes = "";

		this.on('audio-play', function(_event) {
			var id = _event.target.getAttribute('pl-id');
			id = id ? id.toUpperCase() : false;
			classes += id + " ";
			this.addClass(id);
		});

		this.on('ui-close', function() {
			this.removeClass(classes);
			classes = "";
		});
	};

	this.screen('what-faucet', function() {
		audioClasses.call(this);

		this.respond('select', function(_event) {
			this.select(_event.behaviorTarget);
		});
	});

	audioScreens = ['step-1', 'step-2', 'what-need'];

	for(screenName in audioScreens) {
		this.screen(screenName, audioClasses);
	}

	this.screen('flip', function () {
		this.next = function () {
			this.game.quit.okay();
		};
	});

	this.screen('quit', function() {
		this.on('ui-open' , function() {
			var vo = this.audio.voiceOver.sure;
			if(vo) vo.play();
		});
	});

});
