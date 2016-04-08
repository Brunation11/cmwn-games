/**
 * Index script
 * @module
 */
// import 'js-interactive-library';
import '../../../../../js-interactive-library';
import './config.game';

import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/title/behavior';
import './components/slides/behavior';
import './components/frame/behavior';
import './components/selectable-remove/behavior';
import './components/no/behavior';
import './components/video/behavior';

pl.game('litterbug', function () {

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

		this.startAudio = function () {
			this.title.audio.background.play();
			this.title.audio.voiceOver.play();
		};

		this.stopAudio = function () {
			this.title.audio.voiceOver.stop('@ALL');
		};

	});

	this.screen('clean-up', function() {

		this.state('incomplete', '-COMPLETE', {
			didSet: function (_target) {
				_target.isComplete = false;
			}
		});

		this.on('ui-open', function(_event) {
			if(!this.is(_event.target)) return;
			this.game.removeClass('sun');
			this.incomplete(this);
			this.incomplete(this.slides.trash);
			this.slides.trash.ready();
		});
	});

	this.screen('video', function() {
		this.on("ui-close", function() {
			this.video.pause();
			if(this.game.bgSound) this.game.bgSound.play();
		});
	});

	this.screen('flip', function () {
		this.next = function () {
			var buttonSound = pl.util.resolvePath(this, 'game.audio.sfx.button');
			if (buttonSound) buttonSound.play();
			this.game.quit.okay();
		};

		this.complete = function (_event) {
			var eventCategory = (['game', this.game.id(), this.id()+'('+(this.index()+1)+')']).join(' ');

			ga('send', 'event', eventCategory, 'complete');

			return this.proto();
		};
	});

	this.exit = function () {
		var screen, eventCategory;

		screen = this.findOwn(pl.game.config('screenSelector')+'.OPEN:not(#quit)').scope();
		eventCategory = (['game', this.id(), screen.id()+'('+(screen.index()+1)+')']).join(' ');

		ga('send', 'event', eventCategory, 'quit');

		return this.proto();
	};
});
